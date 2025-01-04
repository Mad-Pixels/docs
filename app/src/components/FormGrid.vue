<!-- 
  <CardsGrid :max-cards="3" gap="var(--spacing-lg)"></CardsGrid>
  <CardsGrid auto-fit min-card-width="250px"></CardsGrid> 
-->

<template>
  <form @submit.prevent="handleSubmit" class="form-grid">
    <div
      class="form-grid-container"
      :style="gridStyles"
    >
      <component
        v-for="(field, index) in fields"
        :key="index"
        :is="field.component"
        v-bind="field.props"
        :class="{'full-width': isLastRowUneven && index >= lastRowStartIndex}"
        :style="isLastRowUneven && index >= lastRowStartIndex ? fullSpanStyle : {}"
      />
    </div>
    <div class="form-grid-actions">
      <button
        type="submit"
        :class="['submit-button', submitButton.class]"
        :disabled="submitButton.props?.disabled"
      >
        {{ submitButton.label || 'Send' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  fields: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (field) =>
          typeof field === 'object' &&
          field.component &&
          typeof field.component === 'object'
      ),
  },
  maxColumns: {
    type: Number,
    default: 2,
    validator: (value) => [1, 2, 3, 4].includes(value),
  },
  gap: {
    type: String,
    default: 'var(--grid-gap-md)',
  },
  submitButton: {
    type: Object,
    default: () => ({
      label: 'Отправить',
      class: '',
      props: {},
    }),
  },
  onSubmit: {
    type: Function,
    default: () => {},
  },
})

const emit = defineEmits(['submit'])
const totalItems = props.fields.length
const rows = Math.ceil(totalItems / props.maxColumns)
const lastRowItemCount = totalItems % props.maxColumns || props.maxColumns
const fullSpan = Math.floor(props.maxColumns / lastRowItemCount)
const isLastRowUneven = lastRowItemCount !== props.maxColumns
const lastRowStartIndex = (rows - 1) * props.maxColumns

const handleSubmit = (event) => {
  emit('submit', event);
  props.onSubmit(event);
}

const gridStyles = computed(() => {
  return {
    '--grid-gap': props.gap,
    '--max-columns': props.maxColumns,
    'grid-gap': props.gap,
  }
})

const fullSpanStyle = {
  '--full-span': fullSpan,
}
</script>

<style scoped>
.form-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-grid-container {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: repeat(var(--max-columns), 1fr);
}

.form-grid-actions {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  cursor: pointer;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background: var(--accent-color);
  color: white;
  transition: var(--transition-all);
}
.submit-button:disabled {
  background: var(--disable-color);
  border-color: var(--disable-color);
  cursor: not-allowed;
  opacity: 0.7;
}
.submit-button:not(:disabled):hover {
  opacity: 0.9;
}

@media (min-width: 768px) {
  .full-width {
    grid-column: span var(--full-span);
  }
}

@media (max-width: 767px) {
  .form-grid-container {
    grid-template-columns: 1fr !important;
  }
}
</style>
