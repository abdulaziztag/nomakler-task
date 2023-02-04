<script setup lang="ts">
import AppInput from 'components/AppInput.vue';
import AppButton from 'components/AppButton.vue';
import useValidate from '@vuelidate/core'

import {computed, reactive} from 'vue';
import {valRules} from 'utils/signUpRules';

import {auth} from 'store/auth';
import {RegisterForm} from 'interfaces/RegisterForm';

const authStore = auth()

const formData = reactive<RegisterForm>({
  firstName: '',
  lastName: '',
  phone: '+998 (',
  referral: ''
})

const rules = computed(() => valRules)

const v$ = useValidate(rules, formData)

const submitForm = async () => {
  const result = await v$.value.$validate()
  result && await authStore.register({...formData})
}
</script>

<template>
  <div class="flex flex-col h-full overflow-auto">
    <h2 class="text-3xl font-bold">
      Регистрация
    </h2>
    <h4 class="text-base mb-2 mt-1">
      Для продолжения введите номер телефона
    </h4>
    <AppInput
      v-model="formData.firstName"
      label="Имя"
      placeholder="Имя"
      :error-message="v$.firstName.$errors.map(e => e.$message).join('\n')"
    />
    <AppInput
      v-model="formData.lastName"
      label="Фамилия"
      placeholder="Фамилия"
      :error-message="v$.lastName.$errors.map(e => e.$message).join('\n')"
    />
    <AppInput
      v-model="formData.phone"
      v-maska
      label="Номер телефона"
      data-maska="+998 (##) ###-##-##"
      :error-message="v$.phone.$errors.map(e => e.$message).join('\n')"
    />
    <AppInput
      label="Код реферала (не обязательно)"
      placeholder="Код реферала"
    />
    <AppButton
      button-type="active"
      class="mt-2"
      @click.prevent="submitForm"
    >
      Далее
    </AppButton>
    <span class="block text-center text-sm my-1">или</span>
    <AppButton
      button-type="light"
      to="/auth/login"
    >
      Войти
    </AppButton>
    <div class="w-80 text-xs mt-3 font-medium">
      Регистрируясь, вы соглашаетесь с
      <span class="text-blue-500">Условиями пользования и Политикой конфиденциальности</span>
      вы подтверждаете свое согласие
    </div>
  </div>
</template>