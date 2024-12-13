<template>
  <div id="app">
    <MainHeader />
    <div class="container" style="padding-top: 60px;">
      <div class="layout">
        <LeftNavigation v-if="!leftMenuStore.isMobile" class="desktop-nav" />
        <main :class="['main-content', { 'with-sidebar': !leftMenuStore.isMobile }]">
          <RouterView v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </RouterView>
        </main>
      </div>
    </div>
    <MainFooter />

    <Transition name="fade">
      <div 
        v-show="leftMenuStore.isMobile && leftMenuStore.isOpen"
        class="mobile-overlay"
        @click="leftMenuStore.close"
      />
    </Transition>

    <Transition name="slide">
      <LeftNavigation 
        v-if="leftMenuStore.isMobile" 
        class="mobile-nav"
        :class="{ 'show': leftMenuStore.isOpen }" 
      />
    </Transition>
  </div>
</template>

<script setup>
import LeftNavigation from '@/components/LeftNavigation.vue'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

import { useLeftMenuStore } from '@/stores/menu_left'
const leftMenuStore = useLeftMenuStore()
</script>

<style>
.layout {
  display: flex;
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}

.main-content {
  flex: 1;
  padding: var(--spacing-lg);
}

.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 98;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-duration) var(--transition-timing);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform var(--transition-duration) var(--transition-timing);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateX(20px);
}
.fade-leave-to {
  transform: translateX(-20px);
}
</style>