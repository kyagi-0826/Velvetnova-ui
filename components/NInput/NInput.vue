<template>
  <div :class="wrapperClasses">
    <div v-if="$slots.prefix || prefix" class="vn-input__prefix">
      <slot name="prefix">{{ prefix }}</slot>
    </div>
    <input
      ref="inputRef"
      v-model="inputValue"
      :class="inputClasses"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @keydown="handleKeydown"
    />
    <div v-if="clearable && inputValue && !disabled" class="vn-input__suffix">
      <button
        type="button"
        class="vn-input__clear"
        @click="handleClear"
        @mousedown.prevent
      >
        ✕
      </button>
    </div>
    <div v-else-if="$slots.suffix || suffix" class="vn-input__suffix">
      <slot name="suffix">{{ suffix }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'

interface NInputProps {
  modelValue?: string | number
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
  size?: 'tiny' | 'small' | 'medium' | 'large'
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  clearable?: boolean
  round?: boolean
  status?: 'success' | 'warning' | 'error'
  prefix?: string
  suffix?: string
  maxlength?: number
  showCount?: boolean
}

interface NInputEmits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'input', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
  (e: 'clear'): void
  (e: 'keydown', event: KeyboardEvent): void
}

const props = withDefaults(defineProps<NInputProps>(), {
  modelValue: '',
  type: 'text',
  size: 'medium',
  placeholder: '',
  disabled: false,
  readonly: false,
  clearable: false,
  round: false,
  status: undefined,
  prefix: '',
  suffix: '',
  maxlength: undefined,
  showCount: false
})

const emit = defineEmits<NInputEmits>()

const inputRef = ref<HTMLInputElement>()
const focused = ref(false)

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const wrapperClasses = computed(() => {
  return [
    'vn-input-wrapper',
    `vn-input-wrapper--${props.size}`,
    {
      'vn-input-wrapper--focused': focused.value,
      'vn-input-wrapper--disabled': props.disabled,
      'vn-input-wrapper--round': props.round,
      [`vn-input-wrapper--${props.status}`]: props.status
    }
  ]
})

const inputClasses = computed(() => {
  return [
    'vn-input',
    {
      'vn-input--with-prefix': props.prefix,
      'vn-input--with-suffix': props.suffix || (props.clearable && inputValue.value)
    }
  ]
})

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('input', target.value)
}

const handleClear = async () => {
  emit('update:modelValue', '')
  emit('clear')
  await nextTick()
  inputRef.value?.focus()
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event)
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

defineExpose({
  focus,
  blur,
  inputRef
})
</script>

<style scoped>
.vn-input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  background-color: var(--vn-input-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-input-wrapper:hover {
  border-color: var(--vn-primary-color);
}

.vn-input-wrapper--focused {
  border-color: var(--vn-primary-color);
  box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
}

.vn-input-wrapper--disabled {
  background-color: var(--vn-input-color-disabled);
  border-color: var(--vn-border-color);
  cursor: not-allowed;
}

.vn-input-wrapper--disabled:hover {
  border-color: var(--vn-border-color);
}

.vn-input-wrapper--round {
  border-radius: calc(var(--vn-height-medium) / 2);
}

/* Sizes */
.vn-input-wrapper--tiny {
  height: var(--vn-height-tiny);
  padding: 0 8px;
}

.vn-input-wrapper--small {
  height: var(--vn-height-small);
  padding: 0 10px;
}

.vn-input-wrapper--medium {
  height: var(--vn-height-medium);
  padding: 0 12px;
}

.vn-input-wrapper--large {
  height: var(--vn-height-large);
  padding: 0 14px;
}

/* Status */
.vn-input-wrapper--success {
  border-color: var(--vn-success-color);
}

.vn-input-wrapper--warning {
  border-color: var(--vn-warning-color);
}

.vn-input-wrapper--error {
  border-color: var(--vn-error-color);
}

.vn-input {
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: var(--vn-text-color-base);
  font-size: inherit;
  line-height: 1;
  padding: 0;
}

.vn-input::placeholder {
  color: var(--vn-text-color-3);
}

.vn-input:disabled {
  cursor: not-allowed;
  color: var(--vn-text-color-disabled);
}

.vn-input--with-prefix {
  margin-left: 6px;
}

.vn-input--with-suffix {
  margin-right: 6px;
}

.vn-input__prefix,
.vn-input__suffix {
  display: flex;
  align-items: center;
  color: var(--vn-text-color-3);
  flex-shrink: 0;
}

.vn-input__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 50%;
  background: var(--vn-text-color-3);
  color: white;
  cursor: pointer;
  font-size: 12px;
  line-height: 1;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-input__clear:hover {
  background: var(--vn-text-color-2);
}
</style>