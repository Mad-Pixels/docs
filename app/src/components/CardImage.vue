<template>
  <div class="card" :class="{ 'is-link': isLink }" @click="handleClick">
    <div class="card-media">
      <ImageWrapper 
        :src="image" 
        :alt="title" 
        class="card-media__wrapper"
      />
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-description">
        <slot></slot>
      </div>
      <div v-if="isLink" class="card-arrow">
        <MainIcon name="chevron-right" :size="24" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'    
import MainIcon from './icons/MainIcon.vue'
import ImageWrapper from './ImageWrapper.vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  to: {
    type: [String, Object],
    default: null
  }
})

const isLink = computed(() => !!props.to)

const handleClick = () => {
  if (props.to) {
    router.push(props.to)
  }
}
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--card-background);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.card.is-link {
  cursor: pointer;
}

.card:hover {
  border-color: var(--accent-color);
  background: var(--card-background-hover);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-media {
  position: relative;
  width: 100%;
  padding-top: 60%; /* 5:3 соотношение */
}

.card-media__wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

:deep(.image-wrapper) {
  height: 100%;
  border-radius: 0;
}

:deep(.main-image) {
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-duration-base) var(--transition-timing),
              opacity var(--transition-duration-base) var(--transition-timing);
}

.card:hover :deep(.main-image) {
  transform: scale(1.05);
}

.card-content {
  flex: 1;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-primary);
  line-height: var(--line-height-tight);
}

.card-description {
  font-size: var(--font-size-base);
  color: var(--text-secondary);
  line-height: var(--line-height-base);
}

.card-arrow {
  position: absolute;
  right: var(--spacing-lg);
  bottom: var(--spacing-lg);
  color: var(--accent-color);
  opacity: 0;
  transform: translateX(-10px);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

@media (max-width: 768px) {
  .card-content {
    padding: var(--spacing-lg);
    gap: var(--spacing-sm);
  }
  
  .card-title {
    font-size: var(--font-size-lg);
  }
  
  .card-description {
    font-size: var(--font-size-base);
  }

  .card-media {
    padding-top: 66.67%; 
  }
}
</style>