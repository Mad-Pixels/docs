<template>
  <div 
    class="card-text" 
    :class="{ 
      'no-animation': noAnimation,
      'with-shadow': withShadow
    }"
  >
    <h3 v-if="title" class="card-text__title">{{ title }}</h3>
    <div class="card-text__content">
      <slot></slot>
    </div>
  </div>
</template>
 
<script setup>
defineProps({
  title: {
    type: String,
    default: null
  },
  noAnimation: {
    type: Boolean,
    default: false
  },
  withShadow: {
    type: Boolean,
    default: true
  }
})
</script>
 
<style scoped>
.card-text {
  background: var(--card-background);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--card-border);
}

.card-text.no-animation {
  border: none;
}

.card-text.with-shadow {
  box-shadow: var(--shadow-md);
}

.card-text:not(.no-animation) {
  transition: all var(--transition-duration-base) var(--transition-timing);
}
 
.card-text:not(.no-animation):hover {
  transform: translateY(-2px);
  background: var(--card-background-hover);
}

.card-text.with-shadow:not(.no-animation):hover {
  box-shadow: var(--shadow-lg);
}
 
.card-text__title {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  line-height: var(--line-height-tight);
}
 
.card-text__content {
  color: var(--text-secondary);
  line-height: var(--line-height-base);
  font-size: var(--font-size-base);
}

.card-text__content :deep(p) {
  margin-bottom: var(--spacing-md);
}
 
.card-text__content :deep(p:last-child) {
  margin-bottom: 0;
}

.card-text__content :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
}

.card-text__content :deep(ul li) {
  position: relative;
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}

.card-text__content :deep(ul li::before) {
  content: '';
  position: absolute;
  left: 0;
  top: 0.75em;
  width: 6px;
  height: 6px;
  background-color: var(--accent-color);
  border-radius: 50%;
}

.card-text__content :deep(ul li:last-child) {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .card-text {
    padding: var(--spacing-lg);
  }

  .card-text__title {
    font-size: var(--font-size-lg);
  }

  .card-text__content {
    font-size: var(--font-size-base);
  }
  
  .card-text__content :deep(ul li) {
    padding-left: var(--spacing-md);
  }
}

@media print {
  .card-text {
    border: none !important;
    box-shadow: none !important;
    background: none !important;
    padding: 0 !important;
  }

  .card-text__title {
    color: #000 !important;
  }

  .card-text__content {
    color: #000 !important;
  }
}
</style>