<template>
  <div class="card">
    <div class="card-header">
      <div v-if="icon" class="card-icon">
        <div class="icon-wrapper">
          <MainIcon :name="icon" :size="24" />
        </div>
      </div>
      <h3 class="card-title">{{ title }}</h3>
    </div>
    <div class="card-content">
      <div class="card-body">
        <slot></slot>
      </div>
      <div class="card-arrow">
        <div class="arrow-wrapper">
          <MainIcon name="arrow-right" :size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MainIcon from './icons/MainIcon.vue'

defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-duration-base) var(--transition-timing);
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: linear-gradient(
    to right,
    var(--accent-color),
    var(--accent-color-light)
  );
  opacity: 0;
  transition: opacity var(--transition-duration-base) var(--transition-timing);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--background-secondary);
  border-radius: var(--border-radius-md);
  color: var(--accent-color);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.card-title {
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  font-weight: 600;
  line-height: var(--line-height-tight);
  margin: 0;
}

.card-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.card-body {
  color: var(--text-secondary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
}

.card-body :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
}

.card-body :deep(li) {
  position: relative;
  padding-left: var(--spacing-xl);
  margin-bottom: var(--spacing-sm);
}

.card-body :deep(li:last-child) {
  margin-bottom: 0;
}

.card-body :deep(li::before) {
  content: '';
  position: absolute;
  left: var(--spacing-md);
  top: 0.75em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-color);
  opacity: 0.8;
}

.arrow-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--accent-color);
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
  }

  .icon-wrapper {
    width: 40px;
    height: 40px;
  }

  .card-title {
    font-size: var(--font-size-lg);
  }

  .card-body {
    font-size: var(--font-size-base);
  }

  .card-body :deep(li) {
    padding-left: var(--spacing-lg);
  }

  .card-body :deep(li::before) {
    left: var(--spacing-sm);
  }
}
</style>