<template>
  <a :href="url" class="card" target="_blank" rel="noopener noreferrer">
    <div class="card-icon">
      <MainIcon :name="icon" :size="32" />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description">{{ description }}</p>
    </div>
    <div class="card-arrow">
      <MainIcon name="chevron-right" :size="24" />
    </div>
  </a>
</template>

<script setup>
import MainIcon from './icons/MainIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  position: relative;
  min-height: 160px;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.card:hover {
  border-color: var(--accent-color);
  background: var(--card-background-hover);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: var(--background-secondary);
  border-radius: var(--border-radius-md);
  color: var(--accent-color);
  flex-shrink: 0;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.card:hover .card-icon {
  background: var(--accent-color);
  color: var(--accent-color-contrast);
  transform: scale(1.1);
}

.card-content {
  flex: 1;
  padding-right: var(--spacing-xl);
}

.card-title {
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  line-height: var(--line-height-tight);
}

.card-description {
  color: var(--text-secondary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  margin: 0;
}

.card-arrow {
  position: absolute;
  right: var(--spacing-xl);
  top: 50%;
  transform: translateY(-50%) translateX(-10px);
  color: var(--accent-color);
  opacity: 0;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

@media (max-width: 768px) {
  .card {
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    min-height: auto;
  }

  .card-icon {
    width: 40px;
    height: 40px;
  }

  .card-content {
    padding-right: var(--spacing-lg);
  }

  .card-title {
    font-size: var(--font-size-lg);
  }

  .card-description {
    font-size: var(--font-size-sm);
  }

  .card-arrow {
    right: var(--spacing-lg);
  }
}
</style>