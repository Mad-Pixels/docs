<template>
  <MainIconBtn 
    :name="themeStore.isDarkTheme ? 'sun' : 'moon'" 
    :size="24"
    :title="toggleTitle"
    @click="themeStore.toggleTheme"
  />
</template>

<script setup>
import { computed } from 'vue'

import MainIconBtn from './icons/MainIconBtn.vue'

import { useI18n } from 'vue-i18n'
import { useThemeStore } from '@/stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()

const toggleTitle = computed(() => 
  themeStore.isDarkTheme ? t('theme.light') : t('theme.dark')
)
</script>