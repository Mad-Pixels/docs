<!-- 
  <PageGrid :number-of-columns="2" vertical-alignment="top">
    <template #column-1>
      column-1
    </template>
    <template #column-2>
      column-2
    </template>
  </PageGrid>

  <PageGrid 
    :number-of-columns="2" 
    :proportions="[2, 1]"
    alignment="inward"
  >
    <div>...</div>
  </PageGrid>
-->

<template>
  <div class="page-grid">
    <div 
      class="grid-wrapper"
      :class="{
        [`columns-${numberOfColumns}`]: true,
        [`align-${alignment}`]: true
      }"
      :style="gridStyles"
    >
      <template v-for="i in numberOfColumns" :key="i">
        <div 
          class="grid-column" 
          :style="getColumnStyles(i)"
        >
          <slot :name="`column-${i}`"></slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
const ALIGNMENT = {
  CENTER: 'center',
  INWARD: 'inward',
  OUTWARD: 'outward'
};

const VERTICAL_ALIGNMENT = {
  TOP: 'top',
  CENTER: 'center'
};
</script>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  proportions: {
    type: Array,
    default: () => [1],
    validator: (value) => value.every(n => typeof n === 'number' && n > 0)
  },
  columnGap: {
    type: String,
    default: 'var(--spacing-xl)'
  },
  numberOfColumns: {
    type: Number,
    default: 2,
    validator: (value) => value > 0 && value <= 6
  },
  alignment: {
    type: String,
    default: ALIGNMENT.CENTER,
    validator: (value) => Object.values(ALIGNMENT).includes(value)
  },
  verticalAlignment: {
    type: String,
    default: VERTICAL_ALIGNMENT.CENTER,
    validator: (value) => Object.values(VERTICAL_ALIGNMENT).includes(value)
  }
});

const gridStyles = computed(() => ({
  '--column-gap': props.columnGap,
  '--columns-count': props.numberOfColumns,
  '--vertical-align': props.verticalAlignment === VERTICAL_ALIGNMENT.TOP ? 'flex-start' : 'center'
}));

const getColumnStyles = (columnIndex) => {
  const styles = {
    flex: props.proportions[columnIndex - 1] || 1
  };

  if (props.alignment === ALIGNMENT.CENTER) {
    styles.justifyContent = 'center';
  } else if (props.alignment === ALIGNMENT.INWARD) {
    styles.justifyContent = columnIndex <= props.numberOfColumns / 2 ? 'flex-end' : 'flex-start';
  } else if (props.alignment === ALIGNMENT.OUTWARD) {
    styles.justifyContent = columnIndex <= props.numberOfColumns / 2 ? 'flex-start' : 'flex-end';
  }

  return styles;
};
</script>

<style scoped>
.page-grid {
  width: 100%;
  margin: 0 auto;
}

.grid-wrapper {
  display: flex;
  align-items: var(--vertical-align);
  gap: var(--column-gap);
  width: 100%;
  min-height: 100%;
  padding-top: var(--spacing-xl);
}

.grid-column {
  display: flex;
  align-items: var(--vertical-align);
  min-width: 0; 
}

.align-center .grid-column {
  text-align: center;
}

.align-inward .grid-column:first-child {
  text-align: right;
}

.align-inward .grid-column:last-child {
  text-align: left;
}

.align-outward .grid-column:first-child {
  text-align: left;
}

.align-outward .grid-column:last-child {
  text-align: right;
}

@media (max-width: 1200px) {
  .grid-wrapper {
    padding-top: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .grid-wrapper {
    flex-direction: column;
    gap: var(--spacing-lg);
    padding-top: var(--spacing-md);
  }
  
  .grid-column {
    width: 100%;
    justify-content: center !important;
    text-align: center !important;
  }
  
  .align-inward .grid-column,
  .align-outward .grid-column {
    text-align: center;
  }
}

.grid-column {
  transition: all var(--transition-duration-base) var(--transition-timing);
}

@media (prefers-reduced-motion: reduce) {
  .grid-column {
    transition: none;
  }
}

@media print {
  .grid-wrapper {
    display: block;
    padding: 0;
  }

  .grid-column {
    width: 100%;
    margin-bottom: var(--spacing-lg);
    page-break-inside: avoid;
  }
}
</style>