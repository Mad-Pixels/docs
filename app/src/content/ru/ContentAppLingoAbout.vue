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
      <PageGrid :number-of-columns="3" vertical-alignment="top" :proportions="[1, 1, 1]" alignment="center">
        <template #column-1>
          <div style="text-align: left;">
            <div style="display: flex; justify-content: center;">
              <ImageCompare
                before-src="/content/applingo-about/1_black.svg"
                after-src="/content/applingo-about/1_white.svg"
                before-alt="dark"
                after-alt="light"
              
                style="width:100%;max-width:320px;"
              />
            </div>
            <br>
            <h3>КВИЗ</h3>
            <p>
              Мини-игра предназначена для проверки знаний слов и их переводов. 
              Пользователь видит слово или выражение на одном языке и должен выбрать правильный перевод из предложенных вариантов.
            </p>
            <strong>Правила:</strong>
            <ul>
              <li>На экране появляется слово или фраза для перевода.</li>
              <li>Предлагаются несколько вариантов ответа.</li>
              <li>Пользователь выбирает один из них.</li>
              <li>За правильный ответ начисляются баллы, при ошибке отображается правильный перевод для запоминания.</li>
            </ul>
            <p>Цель игры — выбрать как можно больше правильных переводов и повысить знание словарного запаса.</p>
          </div>
        </template>
        <template #column-2 >
          <div style="text-align: left;">
            <div style="display: flex; justify-content: center;">
              <ImageCompare
                before-src="/content/applingo-about/2_black.svg"
                after-src="/content/applingo-about/2_white.svg"
                before-alt="dark"
                after-alt="light"
              
                style="width:100%;max-width:320px;"
              />
            </div>
            <br>
            <h3>НАЙДИ ПАРУ</h3>
            <p>
              Мини-игра направлена на развитие памяти и изучение новых слов. 
              Пользователь должен находить пары слов и их переводов, сопоставляя их на экране.
            </p>
            <strong>Правила:</strong>
            <ul>
              <li>На экране отображаются две колонки по 6 слов: слева — на одном языке, справа — на другом.</li>
              <li>Пользователь должен выбрать одно слово из левой колонки и найти его перевод в правой колонке.</li>
              <li>Если пара совпала — она исчезает, и игрок продолжает игру.</li>
              <li>При отгадывании каждой третьей пары слова в колонках заменяются на новые.</li>
            </ul>
            <p>Цель игры — выбрать как можно больше правильных переводов и повысить знание словарного запаса.</p>
          </div> 
        </template>
        <template #column-3 >
          <div style="text-align: left;">
            <div style="display: flex; justify-content: center;"> 
              <ImageCompare
                before-src="/content/applingo-about/3_black.svg"
                after-src="/content/applingo-about/3_white.svg"
                before-alt="dark"
                after-alt="light"
              
                style="width:100%;max-width:320px;"
              />
            </div>
            <br>
            <h3>ДА / НЕТ</h3>
            <p>
              Мини-игра для проверки знаний слов и их переводов. 
              Пользователю предлагаются карточки со словами и переводами, и нужно свайпом указать, 
              верно ли они соответствуют друг другу.
            </p>
            <strong>Правила:</strong>
            <ul>
              <li>На экране отображается карточка с парой: слово и предполагаемый перевод.</li>
              <li>Если перевод правильный — свайп вправо («Да»).</li>
              <li>Если перевод неверный — свайп влево («Нет»).</li>
              <li>За правильные ответы начисляются баллы, за ошибки отображается правильный вариант перевода.</li>
            </ul>
            <p>Цель игры — оценить правильность перевода как можно быстрее и без ошибок, улучшая навыки распознавания слов и запоминания.</p>
          </div> 
        </template>
      </PageGrid>
    </section> 
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

import PageGrid from '@/components/PageGrid.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'
import ImageCompare from '@/components/ImageCompare.vue'

const themeStore = useThemeStore()

const logoSrc = computed(() => {
  return themeStore.isDarkTheme ? '/content/applingo_black.jpg' : '/content/applingo_white.jpg'
}) 
</script>