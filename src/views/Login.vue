<script setup lang="ts">
  import AppInput from 'components/AppInput.vue';
  import AppButton from 'components/AppButton.vue';
  import {ref} from 'vue';
  import {auth} from 'store/auth';

  const authStore = auth()

  const phone = ref('+998 (')


  const getOtp = async () => {
    await authStore.getOtp(phone.value)
  }

</script>

<template>
  <div class="flex flex-col h-full justify-between">
    <div>
      <h2 class="text-3xl font-bold">
        Авторизация
      </h2>
      <h4 class="text-base mb-4 mt-2">
        Для продолжения введите номер телефона
      </h4>
      <AppInput
        v-model="phone"
        v-maska
        label="Номер телефона"
        class="mb-8"
        data-maska="+998 (##) ###-##-##"
      />
      <AppButton
        :button-type="phone.length === 19 ? 'active' : 'disabled'"
        :disabled="phone.length !== 19"
        @click="getOtp"
      >
        Продолжить
      </AppButton>
      <span class="text-center block my-4 text-sm">или</span>
      <router-link
        to="/auth/signup"
        class="text-blue-500 text-center block text-base"
      >
        Вход по QR
      </router-link>
    </div>
    <AppButton
      button-type="light"
      class=""
      to="/auth/signup"
    >
      Зарегистрироваться
    </AppButton>
  </div>
</template>