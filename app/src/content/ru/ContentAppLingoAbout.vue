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
          <h1>AppLingo iOS Приложение</h1>
          <p>
            Приложение для iOS по изучению иностранных слов с помощью карточек. 
            Пользователь может создавать свои словари, добавлять слова с переводами и подсказками, 
            а также импортировать готовые наборы. 
          </p>
          <p>
            Поддерживаются мини-игры для эффективного запоминания.
          </p>
        </div>
      </template>
    </PageGrid>
  </section>
  <h2 class="section-title">Мини-Игры</h2>
    <section class="section">
      <PageGrid :number-of-columns="3" :proportions="[1, 1, 1]" alignment="center">
        <template #column-1>
          <div style="">
            <ImageCompare
              before-src="/content/applingo-about/1_black.svg"
              after-src="/content/applingo-about/1_white.svg"
              before-alt="До обработки"
              after-alt="После обработки"
              :min-height="400"
            />
            <CardText class="section" :no-animation="true">
              [1] - Официальное приложение для тестирования
            </CardText>
            <h3>#1 Скачиваем и устанавливаем приложение</h3>
            <p>
              TestFlight — это официальный инструмент от Apple для тестирования бета-версий приложений. 
              С его помощью пользователи могут устанавливать предварительные версии, проверять новые функции и сообщать о найденных проблемах. 
              Это помогает разработчикам выявить и устранить ошибки перед выпуском финальной версии приложения.
            </p>
          </div>
        </template>
        <template #column-2 >
          <div style="width: 100%;text-align: left;">
            <ImageCompare
              before-src="/content/applingo-about/2_black.svg"
              after-src="/content/applingo-about/2_white.svg"
              before-alt="До обработки"
              after-alt="После обработки"
              :min-height="400"
            />
            <CardText class="section" :no-animation="true">
              [1] - Официальное приложение для тестирования
            </CardText>
            <h3>#1 Скачиваем и устанавливаем приложение</h3>
            <p>
              TestFlight — это официальный инструмент от Apple для тестирования бета-версий приложений. 
              С его помощью пользователи могут устанавливать предварительные версии, проверять новые функции и сообщать о найденных проблемах. 
              Это помогает разработчикам выявить и устранить ошибки перед выпуском финальной версии приложения.
            </p>
          </div> 
        </template>
        <template #column-3 >
          <div style="width: 100%;text-align: left;">
            <ImageCompare
              before-src="/content/applingo-about/3_black.svg"
              after-src="/content/applingo-about/3_white.svg"
              before-alt="До обработки"
              after-alt="После обработки"
              :min-height="400"
            />
            <CardText class="section" :no-animation="true">
              [1] - Официальное приложение для тестирования
            </CardText>
            <h3>#1 Скачиваем и устанавливаем приложение</h3>
            <p>
              TestFlight — это официальный инструмент от Apple для тестирования бета-версий приложений. 
              С его помощью пользователи могут устанавливать предварительные версии, проверять новые функции и сообщать о найденных проблемах. 
              Это помогает разработчикам выявить и устранить ошибки перед выпуском финальной версии приложения.
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
import ImageCompare from '@/components/ImageCompare.vue'

const themeStore = useThemeStore()

const logoSrc = computed(() => {
  return themeStore.isDarkTheme ? '/content/applingo_black.jpg' : '/content/applingo_white.jpg'
}) 
</script>