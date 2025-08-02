<template>
  <div :class="wrapperClasses">
    <textarea
      ref="textareaRef"
      v-model="inputValue"
      :class="textareaClasses"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :rows="rows"
      :style="textareaStyles"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @keydown="handleKeydown"
    />
    <div v-if="showCount && maxlength" class="vn-textarea__count">
      {{ currentLength }}/{{ maxlength }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, watch, onMounted, type CSSProperties } from 'vue'

interface NTextareaProps {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  autosize?: boolean | { minRows?: number; maxRows?: number }
  rows?: number
  maxlength?: number
  showCount?: boolean
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  status?: 'success' | 'warning' | 'error'
}

interface NTextareaEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'keydown', event: KeyboardEvent): void
}

const props = withDefaults(defineProps<NTextareaProps>(), {
  modelValue: '',
  placeholder: '',
  disabled: false,
  readonly: false,
  autosize: false,
  rows: 3,
  maxlength: undefined,
  showCount: false,
  resize: 'vertical',
  status: undefined
})

const emit = defineEmits<NTextareaEmits>()

const textareaRef = ref<HTMLTextAreaElement>()
const focused = ref(false)
const textareaHeight = ref<string>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const currentLength = computed(() => props.modelValue.length)

const wrapperClasses = computed(() => {
  return [
    'vn-textarea-wrapper',
    {
      'vn-textarea-wrapper--focused': focused.value,
      'vn-textarea-wrapper--disabled': props.disabled,
      'vn-textarea-wrapper--autosize': props.autosize,
      [`vn-textarea-wrapper--${props.status}`]: props.status
    }
  ]
})

const textareaClasses = computed(() => {
  return [
    'vn-textarea',
    {
      'vn-textarea--autosize': props.autosize
    }
  ]
})

const textareaStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    resize: props.resize
  }
  
  if (props.autosize && textareaHeight.value) {
    styles.height = textareaHeight.value
  }
  
  return styles
})

const calculateHeight = () => {
  if (!props.autosize || !textareaRef.value) return
  
  const textarea = textareaRef.value
  const minRows = typeof props.autosize === 'object' ? props.autosize.minRows || 1 : 1
  const maxRows = typeof props.autosize === 'object' ? props.autosize.maxRows || Infinity : Infinity
  
  // Reset height to get accurate scrollHeight
  textarea.style.height = 'auto'
  
  const computedStyle = window.getComputedStyle(textarea)
  const lineHeight = parseInt(computedStyle.lineHeight) || 20
  const paddingTop = parseInt(computedStyle.paddingTop) || 0
  const paddingBottom = parseInt(computedStyle.paddingBottom) || 0
  const borderTop = parseInt(computedStyle.borderTopWidth) || 0
  const borderBottom = parseInt(computedStyle.borderBottomWidth) || 0
  
  const minHeight = lineHeight * minRows + paddingTop + paddingBottom + borderTop + borderBottom
  const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom + borderTop + borderBottom
  
  let height = Math.max(textarea.scrollHeight, minHeight)
  if (maxHeight < height) {
    height = maxHeight
  }
  
  textareaHeight.value = `${height}px`
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('input', target.value)
  
  if (props.autosize) {
    nextTick(() => {
      calculateHeight()
    })
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const focus = () => {
  textareaRef.value?.focus()
}

const blur = () => {
  textareaRef.value?.blur()
}

// Watch for value changes to recalculate height
watch(() => props.modelValue, () => {
  if (props.autosize) {
    nextTick(() => {
      calculateHeight()
    })
  }
})

onMounted(() => {
  if (props.autosize) {
    calculateHeight()
  }
})

defineExpose({
  focus,
  blur,
  textareaRef
})
</script>

<style scoped>
.vn-textarea-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  background-color: var(--vn-input-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-textarea-wrapper:hover {
  border-color: var(--vn-primary-color);
}

.vn-textarea-wrapper--focused {
  border-color: var(--vn-primary-color);
  box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
}

.vn-textarea-wrapper--disabled {
  background-color: var(--vn-input-color-disabled);
  border-color: var(--vn-border-color);
  cursor: not-allowed;
}

.vn-textarea-wrapper--disabled:hover {
  border-color: var(--vn-border-color);
}

/* Status */
.vn-textarea-wrapper--success {
  border-color: var(--vn-success-color);
}

.vn-textarea-wrapper--warning {
  border-color: var(--vn-warning-color);
}

.vn-textarea-wrapper--error {
  border-color: var(--vn-error-color);
}

.vn-textarea {
  display: block;
  width: 100%;
  padding: 8px 12px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--vn-text-color-base);
  font-size: var(--vn-font-size-medium);
  line-height: var(--vn-line-height);
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-textarea::placeholder {
  color: var(--vn-text-color-3);
}

.vn-textarea:disabled {
  cursor: not-allowed;
  color: var(--vn-text-color-disabled);
}

.vn-textarea--autosize {
  resize: none;
  overflow: hidden;
}

.vn-textarea__count {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: var(--vn-font-size-small);
  color: var(--vn-text-color-3);
  pointer-events: none;
  background: var(--vn-input-color);
  padding: 2px 4px;
  border-radius: var(--vn-border-radius-small);
}
</style>