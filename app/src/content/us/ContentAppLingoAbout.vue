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
          <h1>AppLingo iOS Application</h1>
          <p>
            An iOS app for learning foreign words using flashcards. 
            Users can create their own dictionaries, add words with translations and hints, 
            and import ready-made word sets.
          </p>
          <p>
            Mini-games are available to enhance memorization.
          </p>
        </div>
      </template>
    </PageGrid>
  </section>
  <h2 class="section-title">Mini-Games</h2>
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
          <h3>QUIZ</h3>
          <p>
            A mini-game designed to test knowledge of words and their translations. 
            The user sees a word or phrase in one language and must choose the correct translation from the provided options.
          </p>
          <strong>Rules:</strong>
          <ul>
            <li>A word or phrase for translation appears on the screen.</li>
            <li>Several answer options are provided.</li>
            <li>The user selects one of them.</li>
            <li>Points are awarded for correct answers, and the correct translation is displayed for memorization in case of an error.</li>
          </ul>
          <p>The goal is to select as many correct translations as possible and expand the vocabulary.</p>
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
          <h3>FIND A PAIR</h3>
          <p>
            A mini-game aimed at improving memory and learning new words. 
            The user must match pairs of words and their translations displayed on the screen.
          </p>
          <strong>Rules:</strong>
          <ul>
            <li>Two columns with 6 words each are displayed: on the left — in one language, on the right — in another.</li>
            <li>The user selects one word from the left column and finds its translation in the right column.</li>
            <li>If the pair matches, it disappears, and the user continues the game.</li>
            <li>After guessing every third pair, the words in the columns are replaced with new ones.</li>
          </ul>
          <p>The goal is to match as many correct pairs as possible and expand the vocabulary.</p>
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
          <h3>YES / NO</h3>
          <p>
            A mini-game to test knowledge of words and their translations. 
            The user is presented with cards containing words and translations and must swipe to indicate 
            whether they match.
          </p>
          <strong>Rules:</strong>
          <ul>
            <li>A card with a word and a suggested translation appears on the screen.</li>
            <li>If the translation is correct, swipe right ("Yes").</li>
            <li>If the translation is incorrect, swipe left ("No").</li>
            <li>Points are awarded for correct answers, and the correct translation is shown in case of an error.</li>
          </ul>
          <p>The goal is to quickly determine the correctness of the translation and improve recognition and memorization skills.</p>
        </div> 
      </template>
    </PageGrid>
  </section> 
  <h2 class="section-title">Game Modes</h2>
  <div>Each game supports multiple modes</div>
  <section class="section">
    <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="outward">
      <template #column-1>
        <ImageWrapper src="/content/applingo-about/4.svg" alt="TestFlight" style="width: 100%;max-width: 320px;"/>
      </template>
      <template #column-2 >
        <div style="width: 100%;text-align: left;">
          <CardText class="section" :no-animation="true">
            <div><strong>[Practice]</strong></div>
            <p>
              The "Practice" mode is designed for free word learning without time or attempt limits. 
              The user can complete tasks, repeat words, and practice translations at their own pace.
            </p>
            <div><strong>[Survival Mode]</strong></div>
            <p>
              In "Survival Mode," the user is given 3 lives. 
              Each mistake costs one life. The game continues until all lives are lost or until all tasks are completed without errors.
            </p>
            <div><strong>[Time Trial]</strong></div>
            <p>
              In "Time Trial," the user has 2 minutes and 30 seconds to complete as many tasks as possible. 
              The game ends when the timer runs out. The goal is to score as many points as possible within the allotted time.
            </p>
          </CardText>
        </div>
      </template>
    </PageGrid>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'

import PageGrid from '@/components/PageGrid.vue'
import CardText from '@/components/CardText.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'
import ImageCompare from '@/components/ImageCompare.vue'

const themeStore = useThemeStore()

const logoSrc = computed(() => {
  return themeStore.isDarkTheme ? '/content/applingo_black.jpg' : '/content/applingo_white.jpg'
}) 
</script>