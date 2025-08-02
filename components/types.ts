// Component prop types
export interface NTextProps {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
  size?: 'tiny' | 'small' | 'medium' | 'large'
  strong?: boolean
  italic?: boolean
  underline?: boolean
  delete?: boolean
  code?: boolean
  depth?: 1 | 2 | 3 | 4 | 5
  tag?: string
}

export interface NInputProps {
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

export interface NTextareaProps {
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

export interface NCheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  label?: string
  value?: string | number
}

export interface NRadioProps {
  value: string | number | boolean
  disabled?: boolean
  size?: 'tiny' | 'small' | 'medium' | 'large'
  label?: string
  name?: string
}

export interface NRadioGroupProps {
  modelValue?: string | number | boolean
  name?: string
  size?: 'tiny' | 'small' | 'medium' | 'large'
  disabled?: boolean
  direction?: 'horizontal' | 'vertical'
}

export interface NDatePickerProps {
  modelValue?: Date | null
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  showTime?: boolean
  format?: string
}

export interface NTimePickerProps {
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