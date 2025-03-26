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
            Here you'll find documentation, examples, and tips for working with our tools. 
            We're developing this space to share knowledge and encourage open dialogue. 
            Learn, share, suggest — together we'll make technology simpler and more accessible!
          </p>
        </div>
      </template>
    </PageGrid>
  </section>  
  <section class="section">
    <CardsGrid auto-fit min-card-width="320px">
      <CardLink
        icon="bug"
        title="Beta Testing"
        description="Take part in AppLingo beta testing"
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