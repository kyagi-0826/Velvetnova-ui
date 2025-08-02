<template>
  <div class="vn-time-picker" ref="timePickerRef">
    <div :class="inputWrapperClasses" @click="togglePicker">
      <input
        ref="inputRef"
        :value="formattedValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="true"
        class="vn-time-picker__input"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div v-if="clearable && modelValue && !disabled" class="vn-time-picker__suffix">
        <button
          type="button"
          class="vn-time-picker__clear"
          @click.stop="handleClear"
        >
          ✕
        </button>
      </div>
      <div v-else class="vn-time-picker__suffix">
        <span class="vn-time-picker__icon">🕐</span>
      </div>
    </div>
    
    <Teleport to="body">
      <div
        v-if="showPicker"
        class="vn-time-picker__panel"
        :style="panelStyle"
      >
        <div class="vn-time-picker__content">
          <!-- Hour Column -->
          <div class="vn-time-picker__column">
            <div class="vn-time-picker__column-header">时</div>
            <div class="vn-time-picker__column-list" ref="hourListRef">
              <div
                v-for="hour in hours"
                :key="hour"
                :class="getItemClasses('hour', hour)"
                @click="selectHour(hour)"
              >
                {{ String(hour).padStart(2, '0') }}
              </div>
            </div>
          </div>
          
          <!-- Minute Column -->
          <div class="vn-time-picker__column">
            <div class="vn-time-picker__column-header">分</div>
            <div class="vn-time-picker__column-list" ref="minuteListRef">
              <div
                v-for="minute in minutes"
                :key="minute"
                :class="getItemClasses('minute', minute)"
                @click="selectMinute(minute)"
              >
                {{ String(minute).padStart(2, '0') }}
              </div>
            </div>
          </div>
          
          <!-- Second Column -->
          <div v-if="showSeconds" class="vn-time-picker__column">
            <div class="vn-time-picker__column-header">秒</div>
            <div class="vn-time-picker__column-list" ref="secondListRef">
              <div
                v-for="second in seconds"
                :key="second"
                :class="getItemClasses('second', second)"
                @click="selectSecond(second)"
              >
                {{ String(second).padStart(2, '0') }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="vn-time-picker__footer">
          <button @click="selectNow" class="vn-time-picker__now">此刻</button>
          <button @click="confirmSelection" class="vn-time-picker__confirm">确定</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch, type CSSProperties } from 'vue'

interface NTimePickerProps {
  modelValue?: string | null
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showSeconds?: boolean
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  format?: '12' | '24'
}

interface NTimePickerEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'change', value: string | null): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}

const props = withDefaults(defineProps<NTimePickerProps>(), {
  modelValue: null,
  placeholder: '请选择时间',
  disabled: false,
  clearable: true,
  showSeconds: false,
  hourStep: 1,
  minuteStep: 1,
  secondStep: 1,
  format: '24'
})

const emit = defineEmits<NTimePickerEmits>()

const timePickerRef = ref<HTMLElement>()
const inputRef = ref<HTMLInputElement>()
const hourListRef = ref<HTMLElement>()
const minuteListRef = ref<HTMLElement>()
const secondListRef = ref<HTMLElement>()
const showPicker = ref(false)
const focused = ref(false)
const selectedHour = ref(0)
const selectedMinute = ref(0)
const selectedSecond = ref(0)
const panelStyle = ref<CSSProperties>({})

const hours = computed(() => {
  const maxHour = props.format === '12' ? 12 : 23
  const startHour = props.format === '12' ? 1 : 0
  const result = []
  for (let i = startHour; i <= maxHour; i += props.hourStep) {
    result.push(i)
  }
  return result
})

const minutes = computed(() => {
  const result = []
  for (let i = 0; i < 60; i += props.minuteStep) {
    result.push(i)
  }
  return result
})

const seconds = computed(() => {
  const result = []
  for (let i = 0; i < 60; i += props.secondStep) {
    result.push(i)
  }
  return result
})

const formattedValue = computed(() => {
  if (!props.modelValue) return ''
  return props.modelValue
})

const inputWrapperClasses = computed(() => {
  return [
    'vn-time-picker__wrapper',
    {
      'vn-time-picker__wrapper--focused': focused.value || showPicker.value,
      'vn-time-picker__wrapper--disabled': props.disabled
    }
  ]
})

const parseTimeValue = (value: string | null) => {
  if (!value) {
    selectedHour.value = 0
    selectedMinute.value = 0
    selectedSecond.value = 0
    return
  }
  
  const parts = value.split(':')
  selectedHour.value = parseInt(parts[0]) || 0
  selectedMinute.value = parseInt(parts[1]) || 0
  selectedSecond.value = parseInt(parts[2]) || 0
}

const formatTimeValue = () => {
  const hour = String(selectedHour.value).padStart(2, '0')
  const minute = String(selectedMinute.value).padStart(2, '0')
  
  if (props.showSeconds) {
    const second = String(selectedSecond.value).padStart(2, '0')
    return `${hour}:${minute}:${second}`
  }
  
  return `${hour}:${minute}`
}

const getItemClasses = (type: 'hour' | 'minute' | 'second', value: number) => {
  const isSelected = type === 'hour' ? value === selectedHour.value :
                    type === 'minute' ? value === selectedMinute.value :
                    value === selectedSecond.value
  
  return [
    'vn-time-picker__item',
    {
      'vn-time-picker__item--selected': isSelected
    }
  ]
}

const togglePicker = () => {
  if (props.disabled) return
  showPicker.value = !showPicker.value
  
  if (showPicker.value) {
    nextTick(() => {
      updatePanelPosition()
      scrollToSelected()
    })
  }
}

const updatePanelPosition = () => {
  if (!timePickerRef.value) return
  
  const rect = timePickerRef.value.getBoundingClientRect()
  const panelHeight = 300 // Approximate panel height
  const viewportHeight = window.innerHeight
  
  const spaceBelow = viewportHeight - rect.bottom
  const spaceAbove = rect.top
  
  const showAbove = spaceBelow < panelHeight && spaceAbove > spaceBelow
  
  panelStyle.value = {
    position: 'absolute',
    left: `${rect.left + window.scrollX}px`,
    top: showAbove 
      ? `${rect.top + window.scrollY - panelHeight}px`
      : `${rect.bottom + window.scrollY}px`,
    zIndex: 9999
  }
}

const scrollToSelected = () => {
  nextTick(() => {
    scrollToItem(hourListRef.value, selectedHour.value, hours.value)
    scrollToItem(minuteListRef.value, selectedMinute.value, minutes.value)
    if (props.showSeconds) {
      scrollToItem(secondListRef.value, selectedSecond.value, seconds.value)
    }
  })
}

const scrollToItem = (container: HTMLElement | undefined, value: number, items: number[]) => {
  if (!container) return
  
  const index = items.indexOf(value)
  if (index === -1) return
  
  const itemHeight = 32 // Height of each item
  const containerHeight = container.clientHeight
  const scrollTop = index * itemHeight - (containerHeight / 2) + (itemHeight / 2)
  
  container.scrollTop = Math.max(0, scrollTop)
}

const selectHour = (hour: number) => {
  selectedHour.value = hour
}

const selectMinute = (minute: number) => {
  selectedMinute.value = minute
}

const selectSecond = (second: number) => {
  selectedSecond.value = second
}

const selectNow = () => {
  const now = new Date()
  selectedHour.value = now.getHours()
  selectedMinute.value = now.getMinutes()
  selectedSecond.value = now.getSeconds()
  
  scrollToSelected()
}

const confirmSelection = () => {
  const timeValue = formatTimeValue()
  emit('update:modelValue', timeValue)
  emit('change', timeValue)
  showPicker.value = false
}

const handleClear = () => {
  emit('update:modelValue', null)
  emit('change', null)
}

const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  focused.value = false
  emit('blur', event)
}

const handleClickOutside = (event: Event) => {
  if (!timePickerRef.value?.contains(event.target as Node)) {
    showPicker.value = false
  }
}

// Watch for modelValue changes to update internal state
watch(() => props.modelValue, (newValue) => {
  parseTimeValue(newValue)
}, { immediate: true })

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', updatePanelPosition)
  window.addEventListener('resize', updatePanelPosition)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', updatePanelPosition)
  window.removeEventListener('resize', updatePanelPosition)
})
</script>

<style scoped>
.vn-time-picker {
  position: relative;
  display: inline-block;
  width: 100%;
}

.vn-time-picker__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--vn-height-medium);
  padding: 0 12px;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  background-color: var(--vn-input-color);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-time-picker__wrapper:hover {
  border-color: var(--vn-primary-color);
}

.vn-time-picker__wrapper--focused {
  border-color: var(--vn-primary-color);
  box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
}

.vn-time-picker__wrapper--disabled {
  background-color: var(--vn-input-color-disabled);
  border-color: var(--vn-border-color);
  cursor: not-allowed;
}

.vn-time-picker__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--vn-text-color-base);
  font-size: var(--vn-font-size-medium);
  cursor: pointer;
}

.vn-time-picker__input::placeholder {
  color: var(--vn-text-color-3);
}

.vn-time-picker__suffix {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.vn-time-picker__clear {
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

.vn-time-picker__clear:hover {
  background: var(--vn-text-color-2);
}

.vn-time-picker__icon {
  color: var(--vn-text-color-3);
  font-size: 16px;
}

.vn-time-picker__panel {
  background: var(--vn-popover-color);
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  box-shadow: var(--vn-box-shadow-2);
  min-width: 240px;
  max-width: 320px;
  padding: 16px;
}

.vn-time-picker__content {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.vn-time-picker__column {
  flex: 1;
  min-width: 60px;
}

.vn-time-picker__column-header {
  text-align: center;
  font-size: var(--vn-font-size-small);
  color: var(--vn-text-color-3);
  margin-bottom: 8px;
  font-weight: var(--vn-font-weight-strong);
}

.vn-time-picker__column-list {
  height: 160px;
  overflow-y: auto;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
}

.vn-time-picker__column-list::-webkit-scrollbar {
  width: 6px;
}

.vn-time-picker__column-list::-webkit-scrollbar-track {
  background: var(--vn-action-color);
}

.vn-time-picker__column-list::-webkit-scrollbar-thumb {
  background: var(--vn-text-color-3);
  border-radius: 3px;
}

.vn-time-picker__item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  cursor: pointer;
  font-size: var(--vn-font-size-small);
  color: var(--vn-text-color-base);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-time-picker__item:hover {
  background: var(--vn-action-color-hover);
}

.vn-time-picker__item--selected {
  background: var(--vn-primary-color);
  color: white;
  font-weight: var(--vn-font-weight-strong);
}

.vn-time-picker__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--vn-border-color);
  padding-top: 16px;
}

.vn-time-picker__now,
.vn-time-picker__confirm {
  padding: 6px 12px;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  background: var(--vn-action-color);
  color: var(--vn-text-color-base);
  cursor: pointer;
  font-size: var(--vn-font-size-small);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-time-picker__now:hover,
.vn-time-picker__confirm:hover {
  background: var(--vn-action-color-hover);
}

.vn-time-picker__confirm {
  background: var(--vn-primary-color);
  color: white;
  border-color: var(--vn-primary-color);
}

.vn-time-picker__confirm:hover {
  background: var(--vn-primary-color-hover);
}
</style>