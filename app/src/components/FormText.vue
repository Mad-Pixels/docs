<template>
  <div class="form-text" :class="{ 'has-error': error, 'is-disabled': disabled }">
    <label v-if="label" :for="id" class="form-text__label">
      {{ label }}
      <span v-if="required" class="form-text__required" aria-hidden="true">*</span>
    </label>
    <div class="form-text__wrapper">
      <textarea
        :id="id"
        :name="name"
        v-model="inputValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :rows="rows"
        :aria-invalid="!!error"
        :aria-describedby="helpTextId"
        class="form-text__field"
      />
    </div>
    <small 
      v-if="helpText" 
      :id="helpTextId"
      class="form-text__help-text"
    >
      {{ helpText }}
    </small>
    <div 
      v-if="error" 
      class="form-text__error"
      role="alert"
    >
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  id: {
    type: String,
    default: () => `textarea-${Math.random().toString(36).substr(2, 9)}`
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  helpText: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  rows: {
    type: Number,
    default: 4
  }
})

const emit = defineEmits(['update:modelValue'])
const inputValue = ref(props.modelValue)
const helpTextId = computed(() => `${props.id}-help`)

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal
  }
)

watch(inputValue, (newVal) => {
  emit('update:modelValue', newVal)
})
</script>

<style scoped>
.form-text {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-lg);
}

.form-text__label {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: 500;
}

.form-text__required {
  color: var(--error-color);
  margin-left: var(--spacing-xs);
}

.form-text__wrapper {
  position: relative;
  display: flex;
}

.form-text__field {
  width: 100%;
  min-height: calc(40px * 3);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: inherit;
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--text-primary);
  background-color: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  resize: vertical;
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.form-text__field::placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}

.form-text__field:hover:not(:disabled):not(:focus) {
  border-color: var(--accent-color);
}

.form-text__field:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px var(--accent-color-opacity);
  background-color: var(--background-primary);
}

.is-disabled .form-text__field {
  background-color: var(--background-secondary);
  border-color: var(--border-color);
  color: var(--text-secondary);
  cursor: not-allowed;
  opacity: 0.7;
}

.is-disabled .form-text__label {
  opacity: 0.7;
}

.has-error .form-text__field {
  border-color: var(--error-color);
  background-color: var(--background-primary);
}

.has-error .form-text__field:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.form-text__help-text {
  margin-top: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.form-text__error {
  margin-top: var(--spacing-xs);
  color: var(--error-color);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.form-text__field::-webkit-scrollbar {
  width: 8px;
}

.form-text__field::-webkit-scrollbar-track {
  background: var(--background-secondary);
  border-radius: 4px;
}

.form-text__field::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 4px;
}

.form-text__field::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}

@media (max-width: 768px) {
  .form-text__field {
    min-height: calc(36px * 3);
    font-size: var(--font-size-sm);
  }

  .form-text__label {
    font-size: var(--font-size-sm);
  }
}
</style>