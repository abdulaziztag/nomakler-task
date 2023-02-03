<script setup lang="ts">
  import AppInput from 'components/AppInput.vue';
  import AppButton from '../components/AppButton.vue';
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
        label="Номер телефона"
        model-value=""
        class="mb-8"
      />
      <AppButton
        button-type="disabled"
        :disabled="true"
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