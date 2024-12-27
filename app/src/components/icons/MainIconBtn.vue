<template>
  <button 
    class="icon-button" 
    @click="$emit('click')" 
    :title="title"
  >
    <MainIcon 
      :name="name"
      :size="size"
      :fill="fill"
    />
  </button>
</template>

<script setup>
import MainIcon from './MainIcon.vue'

defineProps({
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
  },
  title: {
    type: String,
    default: ''
  }
})
defineEmits(['click'])
</script>

<style>
.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition-transform);
}
.icon-button:hover {
  background: none;
  transform: scale(1.1);
}
.icon-button:hover .main-icon {
  color: var(--accent-color);
}
</style>