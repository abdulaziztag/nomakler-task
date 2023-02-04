<script setup lang="ts">
import img from 'assets/auth_img.png'
</script>

<template>
  <div class="bg-deepBlue min-h-[100vh] flex justify-center items-center select-none">
    <div class="rounded-xl bg-blueGray-100 my-3 flex flex-row">
      <div class="py-12 px-16">
        <router-view />
      </div>
      <img
        :src="img"
        width="454"
        height="718"
        alt="house"
        class="rounded-r-xl xl:max-2xl:flex max-lg:hidden"
      >
    </div>
  </div>
</template>

<style scoped>
</style>