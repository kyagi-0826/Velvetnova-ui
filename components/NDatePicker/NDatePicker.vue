<template>
  <div class="vn-date-picker" ref="datePickerRef">
    <div :class="inputWrapperClasses" @click="togglePicker">
      <input
        ref="inputRef"
        :value="formattedValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="true"
        class="vn-date-picker__input"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div v-if="clearable && modelValue && !disabled" class="vn-date-picker__suffix">
        <button
          type="button"
          class="vn-date-picker__clear"
          @click.stop="handleClear"
        >
          ✕
        </button>
      </div>
      <div v-else class="vn-date-picker__suffix">
        <span class="vn-date-picker__icon">📅</span>
      </div>
    </div>
    
    <Teleport to="body">
      <div
        v-if="showPicker"
        class="vn-date-picker__panel"
        :style="panelStyle"
      >
        <div class="vn-date-picker__header">
          <button @click="prevMonth" class="vn-date-picker__nav">‹</button>
          <span class="vn-date-picker__title">{{ currentMonthYear }}</span>
          <button @click="nextMonth" class="vn-date-picker__nav">›</button>
        </div>
        
        <div class="vn-date-picker__calendar">
          <div class="vn-date-picker__weekdays">
            <span v-for="weekday in weekdays" :key="weekday" class="vn-date-picker__weekday">
              {{ weekday }}
            </span>
          </div>
          
          <div class="vn-date-picker__days">
            <button
              v-for="day in calendarDays"
              :key="`${day.year}-${day.month}-${day.date}`"
              :class="getDayClasses(day)"
              @click="selectDate(day)"
            >
              {{ day.date }}
            </button>
          </div>
        </div>
        
        <div v-if="showTime" class="vn-date-picker__time">
          <div class="vn-date-picker__time-inputs">
            <input
              v-model="selectedHour"
              type="number"
              min="0"
              max="23"
              class="vn-date-picker__time-input"
              placeholder="时"
            />
            <span>:</span>
            <input
              v-model="selectedMinute"
              type="number"
              min="0"
              max="59"
              class="vn-date-picker__time-input"
              placeholder="分"
            />
          </div>
        </div>
        
        <div class="vn-date-picker__footer">
          <button @click="selectToday" class="vn-date-picker__today">今天</button>
          <button @click="confirmSelection" class="vn-date-picker__confirm">确定</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, type CSSProperties } from 'vue'

interface NDatePickerProps {
  modelValue?: Date | null
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showTime?: boolean
  format?: string
}

interface NDatePickerEmits {
  (e: 'update:modelValue', value: Date | null): void
  (e: 'change', value: Date | null): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}

const props = withDefaults(defineProps<NDatePickerProps>(), {
  modelValue: null,
  placeholder: '请选择日期',
  disabled: false,
  clearable: true,
  showTime: false,
  format: 'YYYY-MM-DD'
})

const emit = defineEmits<NDatePickerEmits>()

const datePickerRef = ref<HTMLElement>()
const inputRef = ref<HTMLInputElement>()
const showPicker = ref(false)
const focused = ref(false)
const currentDate = ref(new Date())
const selectedHour = ref(0)
const selectedMinute = ref(0)
const panelStyle = ref<CSSProperties>({})

const weekdays = ['日', '一', '二', '三', '四', '五', '六']

const formattedValue = computed(() => {
  if (!props.modelValue) return ''
  
  const date = props.modelValue
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  
  let formatted = `${year}-${month}-${day}`
  
  if (props.showTime) {
    const hour = String(date.getHours()).padStart(2, '0')
    const minute = String(date.getMinutes()).padStart(2, '0')
    formatted += ` ${hour}:${minute}`
  }
  
  return formatted
})

const currentMonthYear = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth() + 1
  return `${year}年${month}月`
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  // Get first day of month and calculate start of calendar
  const firstDay = new Date(year, month, 1)
  const startOfWeek = firstDay.getDay()
  const startDate = new Date(year, month, 1 - startOfWeek)
  
  // Generate 42 days (6 weeks)
  const days = []
  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    
    days.push({
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth: date.getMonth() === month,
      isToday: isSameDay(date, new Date()),
      isSelected: props.modelValue ? isSameDay(date, props.modelValue) : false,
      dateObj: date
    })
  }
  
  return days
})

const inputWrapperClasses = computed(() => {
  return [
    'vn-date-picker__wrapper',
    {
      'vn-date-picker__wrapper--focused': focused.value || showPicker.value,
      'vn-date-picker__wrapper--disabled': props.disabled
    }
  ]
})

const isSameDay = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate()
}

const getDayClasses = (day: any) => {
  return [
    'vn-date-picker__day',
    {
      'vn-date-picker__day--other-month': !day.isCurrentMonth,
      'vn-date-picker__day--today': day.isToday,
      'vn-date-picker__day--selected': day.isSelected
    }
  ]
}

const togglePicker = () => {
  if (props.disabled) return
  showPicker.value = !showPicker.value
  
  if (showPicker.value) {
    nextTick(() => {
      updatePanelPosition()
    })
  }
}

const updatePanelPosition = () => {
  if (!datePickerRef.value) return
  
  const rect = datePickerRef.value.getBoundingClientRect()
  const panelHeight = 320 // Approximate panel height
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

const prevMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() - 1)
  currentDate.value = newDate
}

const nextMonth = () => {
  const newDate = new Date(currentDate.value)
  newDate.setMonth(newDate.getMonth() + 1)
  currentDate.value = newDate
}

const selectDate = (day: any) => {
  const newDate = new Date(day.dateObj)
  
  if (props.showTime) {
    newDate.setHours(selectedHour.value)
    newDate.setMinutes(selectedMinute.value)
  }
  
  emit('update:modelValue', newDate)
  emit('change', newDate)
  
  if (!props.showTime) {
    showPicker.value = false
  }
}

const selectToday = () => {
  const today = new Date()
  
  if (props.showTime) {
    selectedHour.value = today.getHours()
    selectedMinute.value = today.getMinutes()
  }
  
  emit('update:modelValue', today)
  emit('change', today)
  showPicker.value = false
}

const confirmSelection = () => {
  if (props.modelValue && props.showTime) {
    const newDate = new Date(props.modelValue)
    newDate.setHours(selectedHour.value)
    newDate.setMinutes(selectedMinute.value)
    
    emit('update:modelValue', newDate)
    emit('change', newDate)
  }
  
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
  if (!datePickerRef.value?.contains(event.target as Node)) {
    showPicker.value = false
  }
}

// Initialize time values when modelValue changes
const initializeTimeValues = () => {
  if (props.modelValue && props.showTime) {
    selectedHour.value = props.modelValue.getHours()
    selectedMinute.value = props.modelValue.getMinutes()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', updatePanelPosition)
  window.addEventListener('resize', updatePanelPosition)
  initializeTimeValues()
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', updatePanelPosition)
  window.removeEventListener('resize', updatePanelPosition)
})
</script>

<style scoped>
.vn-date-picker {
  position: relative;
  display: inline-block;
  width: 100%;
}

.vn-date-picker__wrapper {
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

.vn-date-picker__wrapper:hover {
  border-color: var(--vn-primary-color);
}

.vn-date-picker__wrapper--focused {
  border-color: var(--vn-primary-color);
  box-shadow: 0 0 0 2px rgba(24, 160, 88, 0.2);
}

.vn-date-picker__wrapper--disabled {
  background-color: var(--vn-input-color-disabled);
  border-color: var(--vn-border-color);
  cursor: not-allowed;
}

.vn-date-picker__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--vn-text-color-base);
  font-size: var(--vn-font-size-medium);
  cursor: pointer;
}

.vn-date-picker__input::placeholder {
  color: var(--vn-text-color-3);
}

.vn-date-picker__suffix {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.vn-date-picker__clear {
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

.vn-date-picker__clear:hover {
  background: var(--vn-text-color-2);
}

.vn-date-picker__icon {
  color: var(--vn-text-color-3);
  font-size: 16px;
}

.vn-date-picker__panel {
  background: var(--vn-popover-color);
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  box-shadow: var(--vn-box-shadow-2);
  min-width: 280px;
  padding: 16px;
}

.vn-date-picker__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.vn-date-picker__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: var(--vn-border-radius);
  background: transparent;
  color: var(--vn-text-color-base);
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-date-picker__nav:hover {
  background: var(--vn-action-color-hover);
}

.vn-date-picker__title {
  font-weight: var(--vn-font-weight-strong);
  color: var(--vn-text-color-base);
}

.vn-date-picker__weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
}

.vn-date-picker__weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  font-size: var(--vn-font-size-small);
  color: var(--vn-text-color-3);
  font-weight: var(--vn-font-weight-strong);
}

.vn-date-picker__days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.vn-date-picker__day {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--vn-border-radius);
  background: transparent;
  color: var(--vn-text-color-base);
  cursor: pointer;
  font-size: var(--vn-font-size-small);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-date-picker__day:hover {
  background: var(--vn-action-color-hover);
}

.vn-date-picker__day--other-month {
  color: var(--vn-text-color-3);
}

.vn-date-picker__day--today {
  color: var(--vn-primary-color);
  font-weight: var(--vn-font-weight-strong);
}

.vn-date-picker__day--selected {
  background: var(--vn-primary-color);
  color: white;
}

.vn-date-picker__time {
  border-top: 1px solid var(--vn-border-color);
  padding-top: 16px;
  margin-top: 16px;
}

.vn-date-picker__time-inputs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.vn-date-picker__time-input {
  width: 60px;
  height: 32px;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  background: var(--vn-input-color);
  color: var(--vn-text-color-base);
  text-align: center;
  font-size: var(--vn-font-size-small);
}

.vn-date-picker__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--vn-border-color);
  padding-top: 16px;
  margin-top: 16px;
}

.vn-date-picker__today,
.vn-date-picker__confirm {
  padding: 6px 12px;
  border: 1px solid var(--vn-border-color);
  border-radius: var(--vn-border-radius);
  background: var(--vn-action-color);
  color: var(--vn-text-color-base);
  cursor: pointer;
  font-size: var(--vn-font-size-small);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.vn-date-picker__today:hover,
.vn-date-picker__confirm:hover {
  background: var(--vn-action-color-hover);
}

.vn-date-picker__confirm {
  background: var(--vn-primary-color);
  color: white;
  border-color: var(--vn-primary-color);
}

.vn-date-picker__confirm:hover {
  background: var(--vn-primary-color-hover);
}
</style>