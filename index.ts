import type { App } from 'vue'

// Import components
import NText from './components/NText/NText.vue'
import NInput from './components/NInput/NInput.vue'
import NTextarea from './components/NTextarea/NTextarea.vue'
import NCheckbox from './components/NCheckbox/NCheckbox.vue'
import NRadio from './components/NRadio/NRadio.vue'
import NRadioGroup from './components/NRadioGroup/NRadioGroup.vue'
import NDatePicker from './components/NDatePicker/NDatePicker.vue'
import NTimePicker from './components/NTimePicker/NTimePicker.vue'

// Import styles
import './styles/variables.css'

// Component list
const components = [
  NText,
  NInput,
  NTextarea,
  NCheckbox,
  NRadio,
  NRadioGroup,
  NDatePicker,
  NTimePicker
]

// Vue plugin installer function
const install = (app: App) => {
  components.forEach(component => {
    const name = component.name || component.__name
    if (name) {
      app.component(name, component)
    }
  })
}

// Export individual components
export {
  NText,
  NInput,
  NTextarea,
  NCheckbox,
  NRadio,
  NRadioGroup,
  NDatePicker,
  NTimePicker
}

// Export types
export type * from './components/types'

// Export plugin
export default {
  install
}

// Auto-install when used via CDN
declare global {
  interface Window {
    Vue?: any
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}