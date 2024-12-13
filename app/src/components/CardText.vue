<template>
  <div class="card-text">
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
  }
})
</script>
 
<style scoped>
.card-text {
  background: var(--card-background);
  border: 1px solid var(--card-border);
  padding: var(--spacing-xl);
  border-radius: var(--border-radius-lg); 
  box-shadow: var(--shadow-md);
  transition: all var(--transition-duration-base) var(--transition-timing);
}
 
.card-text:hover {
  transform: translateY(-2px);
  border-color: var(--accent-color);
  background: var(--card-background-hover);
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
}

.card-text__content :deep(ul li) {
  margin-bottom: var(--spacing-sm);
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
}
</style>