<template>
  <svg 
    :width="size" 
    :height="size" 
    :viewBox="icon?.viewBox || '0 0 24 24'" 
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill"
    class="main-icon"
  >
    <template v-if="Array.isArray(icon?.path)">
      <path 
        v-for="(pathData, index) in icon.path" 
        :key="index"
        :d="pathData.d"
        :fill="pathData.fill || (pathData.stroke ? 'none' : 'currentColor')"
        :stroke="pathData.stroke === 'undefined' ? 'currentColor' : pathData.stroke"
        :stroke-width="pathData.strokeWidth"
        :stroke-linecap="pathData.strokeLinecap"
        :stroke-linejoin="pathData.strokeLinejoin"
      />
    </template>
    <path 
      v-else-if="icon?.path" 
      :d="icon.path" 
      :fill="fill"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { icons } from './icons'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  },
  fill: {
    type: String,
    default: 'currentColor'
  }
})

const icon = computed(() => icons[props.name])
</script>

<style>
.main-icon {
  transition: var(--transition-colors), var(--transition-transform);
  color: var(--text-secondary);
}
</style>