<!-- 
  <ImageLoader
    src="/path/to/image.jpg"
    alt="description"
  />
  <ImageLoader
    src="/path/to/image.jpg"
    alt="description"
    :minHeight="300"
  />

  <PageGrid 
    :number-of-columns="2" 
    :proportions="[2, 1]"
    alignment="inward"
  >
    <div>...</div>
  </PageGrid>
-->

<template>
  <div 
    class="image-wrapper" 
    :class="{ loaded: isLoaded, error: hasError }"
    :style="wrapperStyle"
  >
    <img 
      :src="src"
      :alt="alt"
      loading="lazy"
      @load="onLoad"
      @error="onError"
      class="main-image"
    />
    <div class="image-placeholder">
      <MainIcon 
        v-if="hasError"
        name="image-off" 
        :size="24" 
        class="error-icon"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MainIcon from './icons/MainIcon.vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  minHeight: {
    type: [String, Number],
    default: '100px'
  }
})

const isLoaded = ref(false)
const hasError = ref(false)

const wrapperStyle = computed(() => ({
  minHeight: typeof props.minHeight === 'number' 
    ? `${props.minHeight}px` 
    : props.minHeight
}))

const onLoad = () => {
  isLoaded.value = true
  hasError.value = false
}

const onError = () => {
  hasError.value = true
  isLoaded.value = false
}
</script>

<style scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  background: var(--background-secondary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity var(--transition-duration-base) var(--transition-timing);
}

.image-wrapper.loaded .main-image {
  opacity: 1;
}

.image-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg, 
    transparent 25%, 
    var(--background-primary) 50%, 
    transparent 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite linear;
}

.image-wrapper.loaded .image-placeholder {
  display: none;
}

.image-wrapper.error .image-placeholder {
  animation: none;
  background: var(--background-secondary);
}

.error-icon {
  color: var(--text-secondary);
  opacity: 0.5;
}

@keyframes loading {
  0% { 
    background-position: 200% 0; 
  }
  100% { 
    background-position: -200% 0; 
  }
}

@media (max-width: 768px) {
  .image-wrapper {
    min-height: 50px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-placeholder {
    animation: none;
    background: var(--background-secondary);
  }
}

@media print {
  .image-wrapper {
    background: none;
  }

  .image-placeholder {
    display: none;
  }

  .main-image {
    opacity: 1;
    print-color-adjust: exact;
  }
}
</style>