<template>
  <PageWrapper>
    <component :is="currentLocaleContent" />
  </PageWrapper>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import ContentUS from '@/content/us/ContentContribute.vue'
import ContentRU from '@/content/ru/ContentContribute.vue'

import PageWrapper from '@/components/PageWrapper.vue'

const { locale } = useI18n()
const currentLocaleContent = computed(() => {
  return locale.value === 'ru' ? ContentRU : ContentUS
})
</script>
