<!-- 
  <CardsGrid :max-cards="3" gap="var(--spacing-lg)"></CardsGrid>
  <CardsGrid auto-fit min-card-width="250px"></CardsGrid> 
-->

<template>
  <div 
    class="cards-grid"
    :class="{
      [`grid-columns-${maxCards}`]: !autoFit,
      'auto-fit': autoFit
    }"
    :style="{
      '--grid-gap': gap,
      '--min-card-width': `clamp(280px, ${minCardWidth}, 100%)`
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  maxCards: {
    type: Number,
    default: 3,
    validator: (value) => [1, 2, 3, 4, 6].includes(value)
  },
  gap: {
    type: String,
    default: 'var(--grid-gap-md)'
  },
  autoFit: {
    type: Boolean,
    default: false
  },
  minCardWidth: {
    type: String,
    default: '300px'
  }
})
</script>

<style scoped>
.cards-grid {
  display: grid;
  gap: var(--grid-gap);
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  box-sizing: border-box;
}

.cards-grid.auto-fit {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min-card-width)), 1fr));
}

.grid-columns-1 {
  grid-template-columns: 1fr;
}

.grid-columns-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-columns-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-columns-4 {
  grid-template-columns: repeat(4, 1fr);
}

.grid-columns-6 {
  grid-template-columns: repeat(6, 1fr);
}

@media (min-width: var(--breakpoint-2xl)) {
  .columns-1 {
    max-width: calc(var(--container-max-width) / 2);
    grid-template-columns: 1fr;
  }
  .columns-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .columns-3 {
    grid-template-columns: repeat(3, 1fr);
  }
  .columns-4 {
    grid-template-columns: repeat(4, 1fr);
  }
  .columns-6 {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media (min-width: var(--breakpoint-md)) and (max-width: calc(var(--breakpoint-2xl) - 1px)) {
  .columns-2,
  .columns-3,
  .columns-4,
  .columns-6 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .columns-1 {
    max-width: calc(var(--container-max-width) / 2);
    grid-template-columns: 1fr;
  }
}

@media (max-width: calc(var(--breakpoint-md) - 1px)) {
  .cards-grid {
    grid-template-columns: 1fr;
    padding: 0 var(--spacing-sm);
  }
  
  .cards-grid.auto-fit {
    grid-template-columns: 1fr;
  }
}

.cards-grid > * {
  animation: card-appear var(--transition-duration-base) var(--transition-timing);
}

@keyframes card-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cards-grid > * {
    animation: none;
  }
}

@media print {
  .cards-grid {
    display: block;
  }
  
  .cards-grid > * {
    margin-bottom: 20px;
    page-break-inside: avoid;
  }
}
</style>