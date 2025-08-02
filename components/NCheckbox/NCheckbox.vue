<template>
  <label :class="checkboxClasses">
    <input
      ref="inputRef"
      v-model="checkedValue"
      type="checkbox"
      :class="inputClasses"
      :disabled="disabled"
      :indeterminate="indeterminate"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span :class="boxClasses">
      <span v-if="showCheckIcon" class="vn-checkbox__checkmark">
        {{ indeterminate ? '−' : '✓' }}
      </span>
    </span>
    <span v-if="label || $slots.default" class="vn-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface NCheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  label?: string
  value?: string | number
}

interface NCheckboxEmits {
  (e: 'update:checked', checked: boolean): void
  (e: 'change', checked: boolean, event: Event): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}

const props = withDefaults(defineProps<NCheckboxProps>(), {
  checked: undefined,
  defaultChecked: false,
  indeterminate: false,
  disabled: false,
  size: 'medium',
  label: '',
  value: undefined
})

const emit = defineEmits<NCheckboxEmits>()

const inputRef = ref<HTMLInputElement>()
const focused = ref(false)
const innerChecked = ref(props.defaultChecked)

const isControlled = computed(() => props.checked !== undefined)

const checkedValue = computed({
  get: () => {
    return isControlled.value ? props.checked : innerChecked.value
  },
  set: (value: boolean) => {
    if (!isControlled.value) {
      innerChecked.value = value
    }
    emit('update:checked', value)
  }
})

const showCheckIcon = computed(() => {
  return checkedValue.value || props.indeterminate
})

const checkboxClasses = computed(() => {
  return [
    'vn-checkbox',
    `vn-checkbox--${props.size}`,
    {
      'vn-checkbox--checked': checkedValue.value,
      'vn-checkbox--indeterminate': props.indeterminate,
      'vn-checkbox--disabled': props.disabled,
      'vn-checkbox--focused': focused.value
    }
  ]
})

const inputClasses = computed(() => {
  return ['vn-checkbox__input']
})

const boxClasses = computed(() => {
  return [
    'vn-checkbox__box',
    {
      'vn-checkbox__box--checked': checkedValue.value,
      'vn-checkbox__box--indeterminate': props.indeterminate
    }
  ]
})

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.checked, event)
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

// Update indeterminate property on input element
watch(
  () => props.indeterminate,
  (value) => {
    if (inputRef.value) {
      inputRef.value.indeterminate = value
    }
  },
  { immediate: true }
)

defineExpose({
  focus,
  blur,
  inputRef
})
</script>

<style scoped>
.vn-checkbox {
  display: inline-flex;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-checkbox--disabled {
  cursor: not-allowed;
  opacity: var(--vn-opacity-disabled);
}

.vn-checkbox--focused .vn-checkbox__box {
  box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
}

/* Sizes */
.vn-checkbox--tiny {
  font-size: var(--vn-font-size-tiny);
}

.vn-checkbox--tiny .vn-checkbox__box {
  width: 14px;
  height: 14px;
}

.vn-checkbox--small {
  font-size: var(--vn-font-size-small);
}

.vn-checkbox--small .vn-checkbox__box {
  width: 16px;
  height: 16px;
}

.vn-checkbox--medium {
  font-size: var(--vn-font-size-medium);
}

.vn-checkbox--medium .vn-checkbox__box {
  width: 18px;
  height: 18px;
}

.vn-checkbox--large {
  font-size: var(--vn-font-size-large);
}

.vn-checkbox--large .vn-checkbox__box {
  width: 20px;
  height: 20px;
}

.vn-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.vn-checkbox__box {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius-small);
  background-color: var(--vn-body-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-checkbox:hover .vn-checkbox__box:not(.vn-checkbox__box--checked):not(.vn-checkbox__box--indeterminate) {
  border-color: var(--vn-primary-color);
}

.vn-checkbox__box--checked,
.vn-checkbox__box--indeterminate {
  border-color: var(--vn-primary-color);
  background-color: var(--vn-primary-color);
}

.vn-checkbox__checkmark {
  color: white;
  font-size: 12px;
  font-weight: bold;
  line-height: 1;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-checkbox__box--checked .vn-checkbox__checkmark,
.vn-checkbox__box--indeterminate .vn-checkbox__checkmark {
  transform: scale(1);
}

.vn-checkbox__label {
  margin-left: 8px;
  color: var(--vn-text-color-base);
  line-height: 1.6;
}

.vn-checkbox--disabled .vn-checkbox__label {
  color: var(--vn-text-color-disabled);
}
</style>