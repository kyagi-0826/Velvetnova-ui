# Velvetnova UI

A Vue 3 UI library inspired by Native UI, built with TypeScript and designed for modern web applications.

## Features

- 🎨 **Native UI Inspired**: Clean and intuitive design language
- 🔧 **TypeScript**: Full type safety and excellent developer experience
- 🎯 **Vue 3**: Built with Composition API and modern Vue features
- 🌙 **Dark Theme**: Built-in dark theme support
- 📱 **Responsive**: Mobile-friendly components
- ♿ **Accessible**: Basic accessibility features included
- 🎨 **Customizable**: CSS variables for easy theming

## Components

### Text Display
- **NText**: Versatile text component with multiple types, sizes, and styles

### Form Controls
- **NInput**: Feature-rich input field with validation and customization
- **NTextarea**: Auto-resizing textarea with character count
- **NCheckbox**: Checkbox with intermediate state support
- **NRadio & NRadioGroup**: Radio buttons with group management

### Date & Time
- **NDatePicker**: Calendar-based date picker with optional time selection
- **NTimePicker**: Time selection with customizable steps

## Installation

```bash
npm install velvetnova-ui
```

## Usage

### Global Registration

```ts
import { createApp } from 'vue'
import VelvetnovaUI from 'velvetnova-ui'
import 'velvetnova-ui/dist/style.css'

const app = createApp(App)
app.use(VelvetnovaUI)
```

### Individual Import

```vue
<script setup lang="ts">
import { NText, NInput, NButton } from 'velvetnova-ui'
</script>

<template>
  <div>
    <NText type="primary" size="large">Welcome to Velvetnova UI</NText>
    <NInput v-model="value" placeholder="Enter text" clearable />
  </div>
</template>
```

## Example

```vue
<template>
  <div class="demo">
    <!-- Text Display -->
    <NText type="primary" size="large" strong>
      Velvetnova UI Demo
    </NText>
    
    <!-- Form Controls -->
    <NInput 
      v-model="inputValue" 
      placeholder="Enter your name" 
      clearable 
      prefix="👤"
    />
    
    <NTextarea 
      v-model="textareaValue"
      placeholder="Write your message"
      :autosize="{ minRows: 3, maxRows: 6 }"
      show-count
      :maxlength="200"
    />
    
    <!-- Checkbox -->
    <NCheckbox 
      v-model:checked="agreed" 
      label="I agree to the terms"
    />
    
    <!-- Radio Group -->
    <NRadioGroup v-model="gender" direction="horizontal">
      <NRadio value="male" label="Male" />
      <NRadio value="female" label="Female" />
      <NRadio value="other" label="Other" />
    </NRadioGroup>
    
    <!-- Date & Time Pickers -->
    <NDatePicker 
      v-model="selectedDate" 
      show-time 
      clearable 
    />
    
    <NTimePicker 
      v-model="selectedTime" 
      show-seconds 
      clearable 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const textareaValue = ref('')
const agreed = ref(false)
const gender = ref('male')
const selectedDate = ref<Date | null>(null)
const selectedTime = ref<string | null>(null)
</script>
```

## Theming

Velvetnova UI uses CSS variables for theming. You can customize the appearance by overriding these variables:

```css
:root {
  --vn-primary-color: #18a058;
  --vn-font-size-medium: 16px;
  --vn-border-radius: 6px;
  /* ... more variables */
}

/* Dark theme */
[data-theme="dark"] {
  --vn-text-color-base: #ffffff;
  --vn-body-color: #101014;
  /* ... dark theme variables */
}
```

## Component API

### NText

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` | Text type |
| size | `'tiny' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Text size |
| strong | `boolean` | `false` | Bold text |
| italic | `boolean` | `false` | Italic text |
| underline | `boolean` | `false` | Underlined text |
| delete | `boolean` | `false` | Strikethrough text |
| code | `boolean` | `false` | Monospace code style |
| depth | `1 \| 2 \| 3 \| 4 \| 5` | - | Text opacity level |
| tag | `string` | `'span'` | HTML tag to render |

### NInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| modelValue | `string \| number` | `''` | Input value |
| type | `'text' \| 'password' \| 'email' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| size | `'tiny' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Input size |
| placeholder | `string` | `''` | Placeholder text |
| disabled | `boolean` | `false` | Disabled state |
| readonly | `boolean` | `false` | Readonly state |
| clearable | `boolean` | `false` | Show clear button |
| round | `boolean` | `false` | Rounded corners |
| status | `'success' \| 'warning' \| 'error'` | - | Validation status |

### NCheckbox

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | `boolean` | - | Checked state |
| indeterminate | `boolean` | `false` | Indeterminate state |
| disabled | `boolean` | `false` | Disabled state |
| size | `'tiny' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Checkbox size |
| label | `string` | `''` | Checkbox label |

*More component APIs available in the source code and TypeScript definitions.*

## Development

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Type check
npm run type-check
```

## License

MIT License