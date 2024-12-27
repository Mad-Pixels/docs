<template>
  <footer class="main-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <p class="copyright">&copy; {{ currentYear }} MadPixels</p>
        </div>
        <div class="footer-links">
          <a
            v-for="link in navLinks"
            :key="link.path"
            :href="link.path"
            :title="link.path"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
            @click="menuStore.close"
          >
            <MainIcon
              :name="link.icon" 
              :size="24"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import MainIcon from './icons/MainIcon.vue'
import { useTopMenuStore } from '@/stores/menu_top'
import { useI18n } from 'vue-i18n'

const menuStore = useTopMenuStore()
const { t } = useI18n()

const currentYear = new Date().getFullYear()

const navLinks = computed(() => {
  return [0, 1].map(index => ({
    path: t(`external_menu.links.${index}.path`),
    icon: t(`external_menu.links.${index}.icon`)
  }))
})
</script>

<style scoped>
.main-footer {
  width: 100%;
  min-height: var(--footer-height);
  background: var(--background-secondary);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-md) 0;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
}

.footer-info {
  display: flex;
  align-items: center;
}

.copyright {
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  margin: 0;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--text-secondary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.footer-link:hover {
  color: var(--accent-color);
  background: var(--background-hover);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .main-footer {
    padding: var(--spacing-sm) 0;
  }

  .footer-content {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }

  .footer-links {
    gap: var(--spacing-sm);
  }

  .footer-link {
    width: 36px;
    height: 36px;
  }
}

@media print {
  .main-footer {
    display: none;
  }
}
</style>