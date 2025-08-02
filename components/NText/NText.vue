<template>
  <component
    :is="tag"
    :class="textClasses"
    :style="textStyles"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'

interface NTextProps {
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

const props = withDefaults(defineProps<NTextProps>(), {
  type: 'default',
  size: 'medium',
  strong: false,
  italic: false,
  underline: false,
  delete: false,
  code: false,
  depth: undefined,
  tag: 'span'
})

const textClasses = computed(() => {
  return [
    'vn-text',
    `vn-text--${props.type}`,
    `vn-text--${props.size}`,
    {
      'vn-text--strong': props.strong,
      'vn-text--italic': props.italic,
      'vn-text--underline': props.underline,
      'vn-text--delete': props.delete,
      'vn-text--code': props.code,
      [`vn-text--depth-${props.depth}`]: props.depth !== undefined
    }
  ]
})

const textStyles = computed<CSSProperties>(() => {
  const styles: CSSProperties = {}
  
  if (props.depth !== undefined) {
    const opacityMap = {
      1: 'var(--vn-opacity-1)',
      2: 'var(--vn-opacity-2)',
      3: 'var(--vn-opacity-3)',
      4: 'var(--vn-opacity-4)',
      5: 'var(--vn-opacity-5)'
    }
    styles.opacity = opacityMap[props.depth]
  }
  
  return styles
})
</script>

<style scoped>
.vn-text {
  margin: 0;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Sizes */
.vn-text--tiny {
  font-size: var(--vn-font-size-tiny);
}

.vn-text--small {
  font-size: var(--vn-font-size-small);
}

.vn-text--medium {
  font-size: var(--vn-font-size-medium);
}

.vn-text--large {
  font-size: var(--vn-font-size-large);
}

/* Types */
.vn-text--default {
  color: var(--vn-text-color-base);
}

.vn-text--primary {
  color: var(--vn-primary-color);
}

.vn-text--info {
  color: var(--vn-info-color);
}

.vn-text--success {
  color: var(--vn-success-color);
}

.vn-text--warning {
  color: var(--vn-warning-color);
}

.vn-text--error {
  color: var(--vn-error-color);
}

/* Styles */
.vn-text--strong {
  font-weight: var(--vn-font-weight-strong);
}

.vn-text--italic {
  font-style: italic;
}

.vn-text--underline {
  text-decoration: underline;
}

.vn-text--delete {
  text-decoration: line-through;
}

.vn-text--code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  background-color: var(--vn-action-color);
  padding: 2px 4px;
  border-radius: var(--vn-border-radius-small);
  font-size: 0.9em;
}
</style>