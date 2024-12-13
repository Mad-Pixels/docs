<template>
  <PageWrapper>
      <component :is="currentLocaleContent" />
      <section class="section">
        <h2 class="section-title">{{ t('send_message.title') }}</h2>
        <FormGrid
          :fields="formFields" 
          :maxColumns=2
          :submitButton="{ 
            label: t('send_message.submit'),
            class: 'primary-button',
            props: { 
              disabled: isSubmitting 
            }
          }"
          @submit="handleFormSubmit"
        />
        <BaseModal v-model="showModal">
          <template #title>
            {{ modalTitle }}
          </template>
          <p>{{ modalMessage }}</p>
          <template #footer>
            <button @click="closeModal">
              {{ t('common.close') }}
            </button>
          </template>
        </BaseModal>
      </section>
  </PageWrapper>
</template>

<script setup>
import { ref, computed } from 'vue'

import PageWrapper from '@/components/PageWrapper.vue'
import ContentUS from '@/content/us/ContentMain.vue'
import ContentRU from '@/content/ru/ContentMain.vue'

import { sendEmail } from '@/services/emailService'
import { useI18n } from 'vue-i18n'

import BaseModal from '@/components/BaseModal.vue'
import FormInput from '@/components/FormInput.vue'
import FormText from '@/components/FormText.vue'
import FormGrid from '@/components/FormGrid.vue'

const { t, locale } = useI18n()
const errors = ref({})

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const currentLocaleContent = computed(() => {
  return locale.value === 'ru' ? ContentRU : ContentUS
})

const validateForm = () => {
  errors.value = {};
  if (!formData.value.name) {
    errors.value.name = t('send_message.errors.name_required')
  }
  if (!formData.value.email) {
    errors.value.email = t('send_message.errors.email_required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = t('send_message.errors.email_invalid')
  }
  return Object.keys(errors.value).length === 0
}

const formFields = computed(() => [
  {
    component: FormInput,
    props: {
      modelValue: formData.value.name,
      'onUpdate:modelValue': (v) => formData.value.name = v,
      label: t('send_message.name'),
      name: 'name',
      required: true,
      error: errors.value.name
    }
  },
  {
    component: FormInput,
    props: {
      modelValue: formData.value.email,
      'onUpdate:modelValue': (v) => formData.value.email = v,
      label: t('send_message.email'),
      type: 'email',
      name: 'email',
      required: true,
      error: errors.value.email
    }
  },
  {
    component: FormText,
    props: {
      modelValue: formData.value.message,
      'onUpdate:modelValue': (v) => formData.value.message = v,
      label: t('send_message.message'),
      name: 'message',
      rows: 4
    }
  }
])

const isSubmitting = ref(false)
const showModal = ref(false)
const modalMessage = ref('')
const modalTitle = ref('')

const showNotification = (success) => {
  modalTitle.value = success 
    ? t('send_message.success.title')
    : t('send_message.errors.title');
  modalMessage.value = success
    ? t('send_message.success.message')
    : t('send_message.errors.send_error')
  showModal.value = true;
}

const closeModal = () => {
  showModal.value = false
}

const handleFormSubmit = async () => {
  if (isSubmitting.value || !validateForm()) return
  isSubmitting.value = true
  try {
    const { success } = await sendEmail(formData.value)
    showNotification(success);
    if (success) {
      formData.value = { name: '', email: '', message: '' }
    }
  } catch (error) {
    showNotification(false)
  } finally {
    isSubmitting.value = false
  }
}
</script>
