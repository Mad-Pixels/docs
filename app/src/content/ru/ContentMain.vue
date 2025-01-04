<template>
<section class="section">
    <PageGrid :number-of-columns="2" :proportions="[1, 2]" alignment="inward">
      <template #column-1>
        <div class="content">
          <ImageWrapper src="/logo/main-white.png" alt="MadPixels" style="width:100%; max-width:200px;"/>
        </div>
      </template>
      <template #column-2>
        <div class="content">
          <h1>MadPixels Community Docs</h1>
          <p>
            Здесь вы найдете документацию, примеры и советы для работы с нашими инструментами. 
            Мы развиваем это пространство, чтобы делиться знаниями и приглашать к открытому диалогу. 
            Изучайте, делитесь, предлагайте — вместе сделаем технологии проще и доступнее!
          </p>
        </div>
      </template>
    </PageGrid>
  </section>  
  <section class="section">
    <CardsGrid auto-fit min-card-width="320px">
      <CardLink
        icon="bug"
        title="Бета тестирование"
        description="Принять участие в тестирование AppLingo"
        url="applingo/betatesting"
      />
    </CardsGrid> 
  </section>
</template>

<script setup>
  import PageGrid from '@/components/PageGrid.vue'
  import CardLink from '@/components/CardLink.vue'
  import CardsGrid from '@/components/CardsGrid.vue'
  import ImageWrapper from '@/components/ImageWrapper.vue'
</script>
