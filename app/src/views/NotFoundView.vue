<template>
  <div class="not-found">
    <h1>404</h1>
    <p>{{ t('notFound.description') }}</p>
    <router-link to="/">{{ t('notFound.link') }}</router-link>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>