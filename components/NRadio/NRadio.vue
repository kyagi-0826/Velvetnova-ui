<template>
  <label :class="radioClasses">
    <input
      ref="inputRef"
      v-model="checkedValue"
      type="radio"
      :class="inputClasses"
      :disabled="disabled"
      :name="radioGroup?.name || name"
      :value="value"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span :class="dotClasses">
      <span class="vn-radio__dot-inner"></span>
    </span>
    <span v-if="label || $slots.default" class="vn-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'

interface NRadioProps {
  value: string | number | boolean
  disabled?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  label?: string
  name?: string
}

interface NRadioEmits {
  (e: 'change', value: string | number | boolean, event: Event): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}

const props = withDefaults(defineProps<NRadioProps>(), {
  disabled: false,
  size: 'medium',
  label: '',
  name: undefined
})

const emit = defineEmits<NRadioEmits>()

// Inject from RadioGroup if available
const radioGroup = inject<{
  modelValue: any
  name: string
  size: string
  disabled: boolean
  updateValue: (value: any) => void
} | null>('radioGroup', null)

const inputRef = ref<HTMLInputElement>()
const focused = ref(false)

const checkedValue = computed({
  get: () => {
    return radioGroup ? radioGroup.modelValue : undefined
  },
  set: (value) => {
    if (radioGroup) {
      radioGroup.updateValue(value)
    }
  }
})

const isChecked = computed(() => {
  return checkedValue.value === props.value
})

const actualSize = computed(() => {
  return radioGroup?.size || props.size
})

const actualDisabled = computed(() => {
  return radioGroup?.disabled || props.disabled
})

const radioClasses = computed(() => {
  return [
    'vn-radio',
    `vn-radio--${actualSize.value}`,
    {
      'vn-radio--checked': isChecked.value,
      'vn-radio--disabled': actualDisabled.value,
      'vn-radio--focused': focused.value
    }
  ]
})

const inputClasses = computed(() => {
  return ['vn-radio__input']
})

const dotClasses = computed(() => {
  return [
    'vn-radio__dot',
    {
      'vn-radio__dot--checked': isChecked.value
    }
  ]
})

const handleChange = (event: Event) => {
  emit('change', props.value, event)
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

defineExpose({
  focus,
  blur,
  inputRef
})
</script>

<style scoped>
.vn-radio {
  display: inline-flex;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-radio--disabled {
  cursor: not-allowed;
  opacity: var(--vn-opacity-disabled);
}

.vn-radio--focused .vn-radio__dot {
  box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
}

/* Sizes */
.vn-radio--tiny {
  font-size: var(--vn-font-size-tiny);
}

.vn-radio--tiny .vn-radio__dot {
  width: 14px;
  height: 14px;
}

.vn-radio--small {
  font-size: var(--vn-font-size-small);
}

.vn-radio--small .vn-radio__dot {
  width: 16px;
  height: 16px;
}

.vn-radio--medium {
  font-size: var(--vn-font-size-medium);
}

.vn-radio--medium .vn-radio__dot {
  width: 18px;
  height: 18px;
}

.vn-radio--large {
  font-size: var(--vn-font-size-large);
}

.vn-radio--large .vn-radio__dot {
  width: 20px;
  height: 20px;
}

.vn-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  pointer-events: none;
}

.vn-radio__dot {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 2px solid var(--vn-border-color);
  border-radius: 50%;
  background-color: var(--vn-body-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-radio:hover .vn-radio__dot:not(.vn-radio__dot--checked) {
  border-color: var(--vn-primary-color);
}

.vn-radio__dot--checked {
  border-color: var(--vn-primary-color);
  background-color: var(--vn-primary-color);
}

.vn-radio__dot-inner {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: white;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-radio__dot--checked .vn-radio__dot-inner {
  transform: scale(1);
}

.vn-radio__label {
  margin-left: 8px;
  color: var(--vn-text-color-base);
  line-height: 1.6;
}

.vn-radio--disabled .vn-radio__label {
  color: var(--vn-text-color-disabled);
}
</style>