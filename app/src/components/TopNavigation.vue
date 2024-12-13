<template>
  <nav class="navigation" role="navigation">
    <div class="nav-links" v-show="!menuStore.isMobile">
      <a 
        v-for="link in navLinks"
        :key="link.path"
        :href="link.path"
        :title="link.label"
        class="nav-link"
        target="_blank"
        rel="noopener noreferrer"
        @click="menuStore.close"
      >
        <span class="nav-link-text">{{ link.label }}</span>
      </a>
    </div>

    <BaseModal
      v-model="menuStore.isMobileMenuOpen"
      :full-width="false"
    >
      <template #title>
        {{ t('external_menu.title') }}
      </template>

      <div class="modal-links">
        <a
          v-for="link in navLinks"
          :key="link.path"
          :href="link.path"
          :title="link.label"
          class="modal-link"
          target="_blank"
          rel="noopener noreferrer"
          @click="menuStore.close"
        >
          <span class="modal-link-text">{{ link.label }}</span>
          <MainIcon name="external-link" :size="16" class="external-icon" />
        </a>
      </div>
    </BaseModal>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import BaseModal from './BaseModal.vue'
import MainIcon from './icons/MainIcon.vue'
import { useTopMenuStore } from '@/stores/menu_top'
import { useI18n } from 'vue-i18n'

const menuStore = useTopMenuStore()
const { t } = useI18n()

const navLinks = computed(() => {
  return [0, 1].map(index => ({
    path: t(`external_menu.links.${index}.path`),
    label: t(`external_menu.links.${index}.label`)
  }))
})
</script>

<style scoped>
.navigation {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-sm);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--accent-color);
  transition: all var(--transition-duration-base) var(--transition-timing);
  transform: translateX(-50%);
}

.nav-link:hover {
  color: var(--accent-color);
  background: var(--background-secondary);
}

.nav-link:hover::after {
  width: calc(100% - var(--spacing-md));
}

.modal-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.modal-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.modal-link-text {
  margin-right: var(--spacing-sm);
}

.external-icon {
  color: var(--text-secondary);
  opacity: 0.7;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.modal-link:hover {
  background: var(--background-secondary);
  color: var(--accent-color);
  transform: translateX(var(--spacing-xs));
}

.modal-link:hover .external-icon {
  color: var(--accent-color);
  opacity: 1;
  transform: translateX(var(--spacing-xs));
}

@media (max-width: 768px) {
  .nav-link {
    font-size: var(--font-size-sm);
    padding: var(--spacing-xs);
  }
}

.nav-link:focus-visible,
.modal-link:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

@media print {
  .navigation {
    display: none;
  }
}
</style>