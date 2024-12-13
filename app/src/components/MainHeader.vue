<template>
  <header class="main-header" :class="{ visible: isHeaderVisible }">
    <div class="container">
      <div class="header-content">
        <router-link :to="localePath('/')" class="logo">
          <img 
            :src="logoSrc" 
            alt="Logo" 
            class="logo-image"
          />
        </router-link>
        
        <TopNavigation />
        
        <div class="controls">
          <MainIconBtn
            v-if="leftMenuStore.isMobile"
            name="burger"
            :size="24"
            title="Toggle navigation"
            @click="leftMenuStore.toggle"
          />
          <MainIconBtn
            v-if="topMenuStore.isMobile"
            name="externalLink"
            :size="24"
            title="Toggle menu"
            @click="topMenuStore.toggle"
          />
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import LanguageSwitcher from './LanguageSwitcher.vue'
import MainIconBtn from './icons/MainIconBtn.vue'
import TopNavigation from './TopNavigation.vue'
import ThemeToggle from './ThemeToggle.vue'

import { useLeftMenuStore } from '@/stores/menu_left'
import { useTopMenuStore } from '@/stores/menu_top'
import { useThemeStore } from '@/stores/theme'
import { useRoute } from 'vue-router'

const themeStore = useThemeStore()
const leftMenuStore = useLeftMenuStore()
const topMenuStore = useTopMenuStore()
const isHeaderVisible = ref(true)
const route = useRoute()
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  isHeaderVisible.value = currentScrollY < lastScrollY || currentScrollY < 50;
  lastScrollY = currentScrollY
}

const localePath = (path) => {
  const locale = route.params.locale
  return `/${locale}${path}`
}

const logoSrc = computed(() => {
  return themeStore.isDarkTheme ? '/logo/main-white.png' : '/logo/main-black.png'
})

const checkMobile = () => {
  const isMobile = window.innerWidth < 1024
  leftMenuStore.set(isMobile)
  topMenuStore.set(isMobile)
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background: var(--background-primary);
  border-bottom: 1px solid var(--border-color);
  transform: translateY(0);
  transition: all var(--transition-duration-base) var(--transition-timing);
  z-index: var(--z-header);
  backdrop-filter: blur(8px);
  background: var(--background-primary-transparent);
}

.main-header:not(.visible) {
  transform: translateY(-100%);
  box-shadow: none;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0;
  gap: var(--spacing-lg);
}

.logo {
  display: flex;
  align-items: center;
  height: 100%;
  padding: var(--spacing-sm);
  margin-left: calc(var(--spacing-sm) * -1);
  border-radius: var(--border-radius-md);
  transition: background-color var(--transition-duration-base) var(--transition-timing);
}

.logo-image {
  width: auto;
  height: 42px;
  border-radius: var(--border-radius-md);
}

:deep(.image-wrapper) {
  height: 40px;
  min-height: auto;
}

:deep(.main-image) {
  height: 60px;
  width: auto;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
}

.controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  height: 100%;
  padding: var(--spacing-xs);
}

@media (max-width: 768px) {
  .header-content {
    gap: var(--spacing-md);
  }

  .logo-image {
    height: 36px;
  }

  :deep(.image-wrapper),
  :deep(.main-image) {
    height: 36px;
  }
}
</style>