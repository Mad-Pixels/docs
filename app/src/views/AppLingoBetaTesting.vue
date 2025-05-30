<template>
  <PageWrapper>  
    <component :is="currentLocaleContent" />
    <section class="section">
      <PageGrid 
        :number-of-columns="2" 
        :proportions="[3, 1]"
        alignment="inward"
      >
        <template #column-2>
          <HideMobile>
            <ImageWrapper 
              :src="logoSrc"
              alt="AppLingo"
            />
          </HideMobile>
        </template>
        <template #column-1>
          <div class="form-content">
            <h2 id="beta-form" class="section-title">{{ t('form_data.title_betatest') }}</h2>
            <FormGrid
              :fields="formFields" 
              :maxColumns=2
              :submitButton="{ 
                label: t('form_data.submit'),
                class: 'primary-button',
                props: { 
                  disabled: isSubmitting 
                }
              }"
              @submit="handleFormSubmit"
            />
          </div>
        </template>
      </PageGrid>
    </section>
  </PageWrapper>
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
</template>

<script setup>
import { ref, computed } from 'vue'
import { sendEmail } from '@/services/emailService'
import { useThemeStore } from '@/stores/theme'
import { useI18n } from 'vue-i18n'

import ContentUS from '@/content/us/ContentAppLingoBetaTesting.vue'
import ContentRU from '@/content/ru/ContentAppLingoBetaTesting.vue'

import PageWrapper from '@/components/PageWrapper.vue'
import BaseModal from '@/components/BaseModal.vue'
import FormInput from '@/components/FormInput.vue'
import FormText from '@/components/FormText.vue'
import FormGrid from '@/components/FormGrid.vue'
import PageGrid from '@/components/PageGrid.vue'
import HideMobile from '@/components/HideMobile.vue'
import ImageWrapper from '@/components/ImageWrapper.vue'

const themeStore = useThemeStore()
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

const logoSrc = computed(() => {
  return themeStore.isDarkTheme ? '/content/applingo_black.jpg' : '/content/applingo_white.jpg'
}) 

const validateForm = () => {
  errors.value = {};
  if (!formData.value.name) {
    errors.value.name = t('form_data.errors.name_required')
  }
  if (!formData.value.email) {
    errors.value.email = t('form_data.errors.email_required')
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = t('form_data.errors.email_invalid')
  }
  return Object.keys(errors.value).length === 0
}

const formFields = computed(() => [
  {
    component: FormInput,
    props: {
      modelValue: formData.value.name,
      'onUpdate:modelValue': (v) => formData.value.name = v,
      label: t('form_data.name'),
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
      label: t('form_data.email'),
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
      label: t('form_data.message'),
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
    ? t('form_data.success.title')
    : t('form_data.errors.title');
  modalMessage.value = success
    ? t('form_data.success.message')
    : t('form_data.errors.send_error')
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

<style scoped>
.form-content {
  width: 100%;
  text-align: left;
}
</style>