<template>
  <BaseDropdown
    v-model="selectedLocale"
    :options="SUPPORTED_LOCALES"
    :searchable="false"
    track-by="code"
    :placeholder="t('language.select')"
    @select="handleLocaleChange"
  >
    <template #selected="{ option }">
      <MainIcon :name="option.code" :size="20" />
    </template>

    <template #option="{ option }">
      {{ option.code.toUpperCase() }}
    </template>
  </BaseDropdown>
</template>

<script setup>
import { computed, watch } from 'vue'

import BaseDropdown from './BaseDropdown.vue'
import MainIcon from './icons/MainIcon.vue'

import { SUPPORTED_LOCALES } from '@/i18n/config'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const selectedLocale = computed({
  get: () => SUPPORTED_LOCALES.find(lang => lang.code === locale.value),
  set: (value) => handleLocaleChange(value)
})

const handleLocaleChange = async (selected) => {
  if (selected?.code) {
    const currentPath = route.path.replace(/^\/[^\/]+/, '')
    await router.push(`/${selected.code}${currentPath}`)
  }
}

watch(
  () => route.params.locale,
  (newLocale) => {
    if (newLocale && newLocale !== locale.value) {
      locale.value = newLocale
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.locale-option {
  display: flex;
  align-items: center;
  justify-content: center;
}

.locale-text {
  text-align: center;
  width: 100%;
}

:deep(.multiselect) {
  min-width: 42px;
  width: 42px;
}
:deep(.multiselect__select) {
  display: none;
}
:deep(.multiselect__tags) {
  padding: var(--spacing-xs);
}
:deep(.multiselect__single) {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 32px;
  margin: 0;
}
:deep(.multiselect__content-wrapper) {
  min-width: 42px;
}
:deep(.multiselect__option) {
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-xs);
}
:deep(.multiselect__option--selected) {
  font-weight: normal;
}
</style>