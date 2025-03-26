<template>
  <PageWrapper>
    <component :is="currentLocaleContent" />
  </PageWrapper>
</template>
  
<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  import PageWrapper from '@/components/PageWrapper.vue'
  import ContentUS from '@/content/us/ContentAppLingoGames.vue'
  import ContentRU from '@/content/ru/ContentAppLingoGames.vue'
  
  const { locale } = useI18n()
  const currentLocaleContent = computed(() => {
    return locale.value === 'ru' ? ContentRU : ContentUS
  })
</script>