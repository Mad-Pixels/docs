<template>
  <div class="form-input" :class="{ 'has-error': error, 'is-disabled': disabled }">
    <label v-if="label" :for="id" class="form-input__label">
      {{ label }}
      <span v-if="required" class="form-input__required" aria-hidden="true">*</span>
    </label>
    <div class="form-input__wrapper">
      <input
        :id="id"
        :type="type"
        :name="name"
        v-model="inputValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :aria-invalid="!!error"
        :aria-describedby="helpTextId"
        class="form-input__field"
      />
    </div>
    <small 
      v-if="helpText" 
      :id="helpTextId" 
      class="form-input__help-text"
    >
      {{ helpText }}
    </small>
    <div 
      v-if="error" 
      class="form-input__error" 
      role="alert"
    >
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue' 

const props = defineProps({
  modelValue: {
    type: [String, Number],
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
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  },
  type: {
    type: String,
    default: 'text'
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
.form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-lg);
}

.form-input__label {
  display: inline-flex;
  align-items: center;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
  font-size: var(--font-size-base);
  font-weight: 500;
}

.form-input__required {
  color: var(--error-color);
  margin-left: var(--spacing-xs);
}

.form-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input__field {
  width: 100%;
  height: 40px;
  padding: 0 var(--spacing-md);
  font-size: var(--font-size-base);
  color: var(--text-primary);
  background-color: var(--background-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-duration-base) var(--transition-timing);
}

.form-input__field::placeholder {
  color: var(--text-secondary);
  opacity: 0.7;
}

.form-input__field:hover:not(:disabled):not(:focus) {
  border-color: var(--accent-color);
}

.form-input__field:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px var(--accent-color-opacity);
  background-color: var(--background-primary);
}

.is-disabled .form-input__field {
  background-color: var(--background-secondary);
  border-color: var(--border-color);
  color: var(--text-secondary);
  cursor: not-allowed;
  opacity: 0.7;
}

.is-disabled .form-input__label {
  opacity: 0.7;
}

.has-error .form-input__field {
  border-color: var(--error-color);
  background-color: var(--background-primary);
}

.has-error .form-input__field:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

.form-input__help-text {
  margin-top: var(--spacing-xs);
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
}

.form-input__error {
  margin-top: var(--spacing-xs);
  color: var(--error-color);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

@media (max-width: 768px) {
  .form-input__field {
    height: 36px;
    font-size: var(--font-size-sm);
  }
  
  .form-input__label {
    font-size: var(--font-size-sm);
  }
}
</style>