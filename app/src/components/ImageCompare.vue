<!-- 
<ImageCompare
  before-src="/content/applingo-about/2_black.svg"
  after-src="/content/applingo-about/2_white.svg"
  before-alt="dark"
  after-alt="light"
  :min-height="320"
/> 
-->

<template>
  <div 
    ref="container"
    class="image-compare" 
    :class="{ 'is-loaded': isLoaded, 'has-error': hasError }"
    :style="wrapperStyle"
  >
    <img 
      :src="afterSrc"
      :alt="afterAlt"
      loading="lazy"
      @load="onLoadAfter"
      @error="onError"
      class="image-compare__img image-compare__img--after"
    />
    <div 
      class="image-compare__clip"
      :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
    >
      <img 
        :src="beforeSrc"
        :alt="beforeAlt"
        loading="lazy"
        @load="onLoadBefore"
        @error="onError"
        class="image-compare__img image-compare__img--before"
      />
    </div>
    <div 
      class="image-compare__slider"
      :style="{ left: `${position}%` }"
      @mousedown.prevent="startDragging"
      @touchstart.prevent="startDragging"
    >
      <div class="image-compare__slider-line" />
      <div class="image-compare__slider-button">
        <MainIcon name="pinch" :size="24" style="color: #fafafa;" />
      </div>
    </div>
    <div v-if="!isLoaded || hasError" class="image-compare__placeholder">
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
  beforeSrc: {
    type: String,
    required: true
  },
  afterSrc: {
    type: String,
    required: true
  },
  beforeAlt: {
    type: String,
    default: 'Before'
  },
  afterAlt: {
    type: String,
    default: 'After'
  },
  minHeight: {
    type: [String, Number],
    default: '100px'
  }
})

const container = ref(null)
const position = ref(50)
const isDragging = ref(false)
const isLoaded = ref(false)
const hasError = ref(false)
const beforeLoaded = ref(false)
const afterLoaded = ref(false)

const wrapperStyle = computed(() => ({
  minHeight: typeof props.minHeight === 'number' 
    ? `${props.minHeight}px` 
    : props.minHeight
}))

const onLoadBefore = () => {
  beforeLoaded.value = true
  checkLoaded()
}

const onLoadAfter = () => {
  afterLoaded.value = true
  checkLoaded()
}

const checkLoaded = () => {
  if (beforeLoaded.value && afterLoaded.value) {
    isLoaded.value = true
  }
}

const onError = () => {
  hasError.value = true
  isLoaded.value = false
}

const updatePosition = (event) => {
  if (!container.value) return
  
  const rect = container.value.getBoundingClientRect()
  const x = event.type.includes('touch')
    ? event.touches[0].clientX - rect.left
    : event.clientX - rect.left
    
  position.value = Math.min(Math.max((x / rect.width) * 100, 0), 100)
}

const handleDragging = (event) => {
  if (!isDragging.value) return
  event.preventDefault()
  updatePosition(event)
}

const startDragging = (event) => {
  if (!isLoaded.value) return
  
  event.preventDefault()
  isDragging.value = true
  
  window.addEventListener('mousemove', handleDragging, { passive: false })
  window.addEventListener('mouseup', stopDragging)
  window.addEventListener('touchmove', handleDragging, { passive: false })
  window.addEventListener('touchend', stopDragging)
}

const stopDragging = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', handleDragging)
  window.removeEventListener('mouseup', stopDragging)
  window.removeEventListener('touchmove', handleDragging)
  window.removeEventListener('touchend', stopDragging)
}

</script>

<style scoped>
.image-compare {
  position: relative;
  width: 100%;
  background: var(--background-secondary);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  user-select: none;
}

.image-compare__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 0;
  transition: opacity var(--transition-duration-base) var(--transition-timing);
}

.is-loaded .image-compare__img {
  opacity: 1;
}

.image-compare__clip {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.image-compare__slider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  transform: translateX(-50%);
  cursor: ew-resize;
  z-index: 9;
}

.image-compare__slider-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--accent-color);;
}

.image-compare__slider-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: var(--accent-color);;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.image-compare__placeholder {
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
  z-index: 19;
}

.has-error .image-compare__placeholder {
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

@media (hover: hover) {
  .image-compare__slider-button {
    transition: transform 0.2s ease;
  }
  
  .image-compare__slider-button:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@media (max-width: 768px) {
  .image-compare {
    min-height: 50px;
  }
  
  .image-compare__slider-button {
    width: 32px;
    height: 32px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-compare__img {
    transition: none;
  }
  
  .image-compare__placeholder {
    animation: none;
    background: var(--background-secondary);
  }
}

@media print {
  .image-compare {
    background: none;
  }

  .image-compare__slider,
  .image-compare__placeholder {
    display: none;
  }

  .image-compare__img {
    opacity: 1;
    print-color-adjust: exact;
  }
}
</style>