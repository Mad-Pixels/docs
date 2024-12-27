<!-- 
  <HideMobile>
    this text will be hidden on mobile
  </HideMobile>
  <HideMobile inline>
    <span>Inline text</span>
  </HideMobile>
  <HideMobile preserve-space>
    <div>Hidden element but save area</div>
  </HideMobile>
  <HideMobile :breakpoint="992">
    Hidden on breakpoint
  </HideMobile>
-->

<template>
  <div 
    class="hide-mobile"
    :class="{ 
      'inline': inline,
      'preserve-space': preserveSpace 
    }"
  >
    <slot v-if="!isMobile"></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  inline: {
    type: Boolean,
    default: false
  },
  preserveSpace: {
    type: Boolean,
    default: false
  },
  breakpoint: {
    type: Number,
    default: 768 // значение --breakpoint-mobile
  }
})

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < props.breakpoint
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.hide-mobile {
  display: block;
}

.hide-mobile.inline {
  display: inline-block;
}

@media (max-width: 768px) {
  .hide-mobile:not(.preserve-space) {
    display: none !important;
  }
  
  .hide-mobile.preserve-space {
    visibility: hidden;
  }
}
</style>