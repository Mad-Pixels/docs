<template>
  <div class="dropdown-wrapper">
    <Multiselect
      v-model="selected"
      :options="options"
      :multiple="multiple"
      :searchable="searchable"
      :close-on-select="!multiple"
      :clear-on-select="false"
      :preserve-search="true"
      :placeholder="placeholder"
      :label="label"
      :show-labels="false"
      :track-by="trackBy"
      :loading="loading"
      :class="{ 'is-error': error }"
      @select="handleSelect"
      @remove="handleRemove"
    >
      <template #option="props">
        <slot name="option" v-bind="props">
          {{ props.option[label] }}
        </slot>
      </template>

      <template #singleLabel="props">
        <slot name="selected" v-bind="props">
          {{ props.option[label] }}
        </slot>
      </template>
    </Multiselect>
    <span v-if="error" class="error-text">{{ error }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const props = defineProps({
  modelValue: {
    type: [Array, Object, String, Number],
    default: () => multiple.value ? [] : null
  },
  options: {
    type: Array,
    required: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  searchable: {
    type: Boolean,
    default: true
  },
  label: {
    type: String,
    default: 'label'
  },
  trackBy: {
    type: String,
    default: 'id'
  },
  placeholder: {
    type: String,
    default: 'Select value'
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'select', 'remove'])

const selected = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleSelect = (option) => {
  emit('select', option)
}

const handleRemove = (option) => {
  emit('remove', option)
}
</script>

<style scoped>
.dropdown-wrapper {
  position: relative;
  cursor: pointer;
  width: 100%;
}

.error-text {
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: var(--font-size-sm);
  color: var(--error-color);
}

:deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
}
:deep(ul li) {
  margin: 0;
  padding: 0;
}
:deep(ul li::before) {
  display: none;
}
:deep(.multiselect) {
  min-height: 40px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-sm);
  background: var(--background-primary);
  transition: var(--transition-base);
  font-size: var(--font-size-base);
  color: var(--text-primary);
}
:deep(.multiselect:hover) {
  border-color: var(--accent-color);
  transition: var(--transition-all) !important;
}
:deep(.multiselect:focus-within) {
  border-color: var(--accent-color);
  outline: none;
  box-shadow: 0 0 0 1px var(--accent-color);
  transition: var(--transition-all) !important;
}
:deep(.multiselect__tags) {
  background: var(--background-primary);
}
:deep(.multiselect__placeholder) {
  margin: 0;
  padding: 0;
  color: var(--text-secondary);
}
:deep(.multiselect__input) {
  background: var(--background-primary);
  color: var(--text-primary);
  padding: 0;
}
:deep(.multiselect__single) {
  background: var(--background-primary);
  color: var(--text-primary);
  margin: 0;
  padding: 0;
}
:deep(.multiselect__select) {
  display: block;
  width: 25px;
}
:deep(.multiselect__content-wrapper) {
  border: none;
  border-radius: var(--border-radius-sm);
  background: var(--background-primary);
  margin-top: var(--spacing-xs);
}
:deep(.multiselect__option) {
  padding: var(--spacing-sm);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  min-height: 40px;
  display: flex;
  align-items: center;
}
:deep(.multiselect__option--highlight) {
  background: var(--background-secondary);
  color: var(--text-primary);
}
:deep(.multiselect__option--selected) {
  background: var(--accent-color);
  color: white;
  font-weight: normal;
}
:deep(.multiselect__option--selected.multiselect__option--highlight) {
  background: var(--accent-color);
  opacity: 0.9;
}
:deep(.multiselect.is-error) {
  border-color: var(--error-color);
}
:deep(.multiselect.is-error:focus-within) {
  box-shadow: 0 0 0 1px var(--error-color);
}
@media (max-width: 768px) {
  :deep(.multiselect) {
    min-height: 36px;
  }
  :deep(.multiselect__tags) {
    min-height: 36px;
  }
  :deep(.multiselect__option) {
    min-height: 36px;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}
</style>