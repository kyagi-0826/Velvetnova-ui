<template>
  <div :class="groupClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

interface NRadioGroupProps {
  modelValue?: string | number | boolean
  name?: string
  size?: 'tiny' | 'small' | 'medium' | 'large'
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
}

interface NRadioGroupEmits {
  (e: 'update:modelValue', value: string | number | boolean): void
  (e: 'change', value: string | number | boolean): void
}

const props = withDefaults(defineProps<NRadioGroupProps>(), {
  modelValue: undefined,
  name: `radio-group-${Date.now()}`,
  size: 'medium',
  disabled: false,
  direction: 'horizontal'
})

const emit = defineEmits<NRadioGroupEmits>()

const groupClasses = computed(() => {
  return [
    'vn-radio-group',
    `vn-radio-group--${props.direction}`,
    `vn-radio-group--${props.size}`,
    {
      'vn-radio-group--disabled': props.disabled
    }
  ]
})

const updateValue = (value: string | number | boolean) => {
  emit('update:modelValue', value)
  emit('change', value)
}

// Provide to child radio components
provide('radioGroup', {
  modelValue: computed(() => props.modelValue),
  name: computed(() => props.name),
  size: computed(() => props.size),
  disabled: computed(() => props.disabled),
  updateValue
})
</script>

<style scoped>
.vn-radio-group {
  display: inline-flex;
}

.vn-radio-group--horizontal {
  flex-direction: row;
  gap: 16px;
}

.vn-radio-group--vertical {
  flex-direction: column;
  gap: 8px;
}

.vn-radio-group--disabled {
  opacity: var(--vn-opacity-disabled);
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .vn-radio-group--horizontal {
    flex-direction: column;
    gap: 8px;
  }
}
</style>