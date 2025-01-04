<template>
  <section class="section">
    <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="inward">
      <template #column-1>
        <div class="content">
          <ImageWrapper :src="logoSrc" alt="AppLingo" style="width:100%; max-width:200px;"/>
        </div>
      </template>
      <template #column-2>
        <div class="content">
          <h1>AppLingo iOS App</h1>
          <p>
            An iOS app for learning foreign words using flashcards. 
            Users can create their own dictionaries, add words with translations and hints, 
            and import ready-made word sets. 
          </p>
          <p>
            Mini-games are available to enhance memorization efficiency.
          </p>
        </div>
      </template>
    </PageGrid>
  </section>  
  
</template>

<script setup>
import { ref, computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

import PageGrid from '@/components/PageGrid.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'

const themeStore = useThemeStore()

const logoSrc = computed(() => {
  return themeStore.isDarkTheme ? '/content/applingo_black.jpg' : '/content/applingo_white.jpg'
}) 
</script>