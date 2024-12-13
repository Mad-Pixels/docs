<template>
  <aside class="left-navigation" role="complementary" aria-label="Main navigation">
    <nav class="nav-content" role="navigation">
      <div class="nav-group">
        <h3 class="nav-title">{{ menuTitle }}</h3>
        
        <template v-for="link in navLinks" :key="link.path">
          <div class="nav-item">
            <router-link 
              v-if="!link.children"
              :to="`/${route.params.locale}${link.path}`"
              class="nav-link"
              :class="{ 'active': isCurrentRoute(link.path) }"
              :title="link.label"
            >
              <span class="nav-link-content">
                <MainIcon
                  v-if="link.icon"
                  :name="link.icon"
                  :size="20"
                  class="nav-icon"
                />
                <span class="nav-text">{{ link.label }}</span>
              </span>
            </router-link>

            <button 
              v-else
              class="nav-link parent"
              :class="{ 'active': isCurrentRoute(link.path) }"
              @click="toggleSection(link)"
              :aria-expanded="isExpanded(link)"
              :title="link.label"
            >
              <span class="nav-link-content">
                <MainIcon
                  v-if="link.icon"
                  :name="link.icon"
                  :size="20"
                  class="nav-icon"
                />
                <span class="nav-text">{{ link.label }}</span>
              </span>
              <MainIcon 
                name="chevron-right"
                :size="16"
                class="expand-icon"
                :class="{ 'expanded': isExpanded(link) }"
              />
            </button>

            <div 
              v-if="link.children"
              class="nav-children"
              :class="{ 'expanded': isExpanded(link) }"
              :aria-hidden="!isExpanded(link)"
            >
              <router-link
                v-for="child in link.children"
                :key="child.path"
                :to="`/${route.params.locale}${child.path}`"
                class="nav-link child"
                :class="{ 'active': isCurrentRoute(child.path) }"
                :title="child.label"
              >
                <span class="nav-link-content">
                  <MainIcon
                    v-if="child.icon"
                    :name="child.icon"
                    :size="18"
                    class="nav-icon"
                  />
                  <span class="nav-text">{{ child.label }}</span>
                </span>
              </router-link>
            </div>
          </div>
        </template>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { computed, ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import MainIcon from './icons/MainIcon.vue'
import { useLeftMenuStore } from '@/stores/menu_left'

const menuTitle = computed(() => currentMessages.value.internal_menu.title)
const navLinks = computed(() => currentMessages.value.internal_menu.links)
const currentMessages = computed(() => messages.value[locale.value])
const expandedSections = ref(new Set())
const { messages, locale } = useI18n()
const route = useRoute()

const isCurrentRoute = (path) => {
  return route.path.endsWith(path)
}

const isExpanded = (link) => {
  return expandedSections.value.has(link.path) || 
         (link.children?.some(child => isCurrentRoute(child.path)))
}

const toggleSection = (link) => {
  if (expandedSections.value.has(link.path)) {
    expandedSections.value.delete(link.path)
  } else {
    expandedSections.value.add(link.path)
  }
}

const menuStore = useLeftMenuStore()

watch(() => menuStore.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('menu-open')
  } else {
    document.body.classList.remove('menu-open')
  }
})

onUnmounted(() => {
  document.body.classList.remove('menu-open')
})
</script>

<style scoped>
.left-navigation {
  width: var(--left-nav-width);
  background: var(--background-primary);
  border-right: 1px solid var(--border-color);
}

.nav-content {
  height: 100%;
  padding: var(--spacing-lg);
  overflow-y: auto;
  scrollbar-gutter: stable;
}

.nav-group {
  margin-bottom: var(--spacing-lg);
}

.nav-title {
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  padding: 0 var(--spacing-sm);
  letter-spacing: 0.5px;
}

.nav-item {
  margin: var(--spacing-xs) 0;
}

.nav-link {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: var(--spacing-sm) 0;
  color: var(--text-primary);
  text-decoration: none;
  border: none;
  background: transparent;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-duration-base) var(--transition-timing);
  cursor: pointer;
  margin: 4px 0 4px 0;
}

.nav-link.parent {
  user-select: none;
}

.nav-link-content {
  display: flex;
  align-items: center;
  flex: 1;
}

.nav-icon {
  color: var(--text-secondary);
  transition: color var(--transition-duration-base) var(--transition-timing);
}

.nav-text {
  font-size: var(--font-size-base);
  line-height: var(--line-height-tight);
  transition: transform var(--transition-duration-base) var(--transition-timing);
}

.expand-icon {
  color: var(--text-secondary);
  transition: transform var(--transition-duration-base) var(--transition-timing);
}

.expand-icon.expanded {
  transform: rotate(90deg);
}

.nav-children {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.nav-children.expanded {
  max-height: 1000px;
  opacity: 1;
}

.nav-link.child {
  font-size: var(--font-size-sm);
  padding: var(--spacing-xs) var(--spacing-md);
}

.nav-link:hover {
  background: var(--background-hover);
  color: var(--accent-color);
}

.nav-link:hover .nav-icon,
.nav-link:hover .expand-icon {
  color: var(--accent-color);
}

.nav-link:hover .nav-text {
  transform: translateX(var(--spacing-xs));
}

.nav-link.active {
  background: var(--background-active);
  color: var(--accent-color);
  font-weight: 500;
}

.nav-link.active .nav-icon {
  color: var(--accent-color);
}

.nav-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: var(--accent-color);
  border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
}

.nav-children .nav-link {
  opacity: 0;
  transform: translateX(calc(var(--spacing-xs) * -1));
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.nav-children.expanded .nav-link {
  opacity: 1;
  transform: translateX(0);
}

.nav-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: -2px;
}

.mobile-nav {
  position: fixed;
  inset: 0 auto 0 0;
  height: 100vh;
  width: var(--left-nav-width); 
  z-index: var(--z-navigation);
  background: var(--background-primary);
  box-shadow: var(--shadow-lg);
  transform: translateX(-100%);
  transition: transform var(--transition-duration-base) var(--transition-timing);
  overflow-y: auto; 
}

.mobile-nav.show {
  transform: translateX(0);
}

.nav-content::-webkit-scrollbar {
  width: 6px;
}

.nav-content::-webkit-scrollbar-track {
  background: transparent;
}

.nav-content::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: var(--border-radius-full);
}

.nav-content::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

@media (min-width: 1920px) {
  .desktop-nav {
    border-left: 1px solid var(--border-color);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .nav-children,
  .expand-icon,
  .nav-text {
    transition: none;
  }
}

:global(body.menu-open) {
  overflow: hidden;
  position: fixed;
  width: 100%;
}
</style>