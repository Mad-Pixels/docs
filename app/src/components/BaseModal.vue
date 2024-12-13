<template>
  <Teleport to="body">
    <div 
      v-if="modelValue" 
      class="modal-overlay"
      @click="$emit('update:modelValue', false)"
    >
      <div 
        class="modal-content"
        :class="{ 'full-width': fullWidth }"
        @click.stop
      >
        <div class="modal-header">
          <h2 class="modal-title">
            <slot name="title"></slot>
          </h2>
          <button 
            class="modal-close"
            @click="$emit('update:modelValue', false)"
            title="Close modal"
          >
            <MainIcon name="externalLink" :size="24" />
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'
import MainIcon from './icons/MainIcon.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['update:modelValue'])

const toggleScrollLock = (lock) => {
  if (lock) {
    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.overflowY = 'scroll' 
  } else {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    document.body.style.overflowY = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}

watch(() => props.modelValue, (isOpen) => {
  toggleScrollLock(isOpen)
}, { immediate: true })

onUnmounted(() => {
  if (props.modelValue) {
    toggleScrollLock(false)
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: var(--modal-overlay-bg);
  backdrop-filter: var(--overlay-blur);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-modal);
  transition: opacity var(--transition-duration-base) var(--transition-timing);
}

.modal-content {
  background: var(--background-primary);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  width: var(--modal-width);
  max-width: var(--modal-max-width);
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-xl);
  transform: translateY(0);
  transition: transform var(--transition-duration-base) var(--transition-timing);
  scrollbar-gutter: stable;
}

.modal-content.full-width {
  max-width: 90vw;
  width: 90vw;
}

.modal-content::-webkit-scrollbar {
  width: 8px;
}

.modal-content::-webkit-scrollbar-track {
  background: var(--background-secondary);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
}

.modal-title {
  margin: 0;
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm);
  margin: calc(var(--spacing-sm) * -1);
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.modal-close:hover {
  color: var(--accent-color);
  background: var(--background-secondary);
}

.modal-body {
  margin-bottom: var(--spacing-lg);
  color: var(--text-secondary);
}

.modal-footer {
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-sm);
}

@media (max-width: 768px) {
  .modal-content {
    padding: var(--spacing-lg);
    margin: var(--spacing-sm);
    width: 100%;
    max-height: calc(100vh - var(--spacing-xl));
  }
  
  .modal-content.full-width {
    max-width: 100%;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
}
</style>