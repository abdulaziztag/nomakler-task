<script setup lang="ts">
  defineProps({
    label: {
      type: [String, Boolean],
      default: false
    },
    modelValue: {
      type: String,
      default: ''
    },
    errorMessage: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <div class="flex flex-col mt-1">
    <label
      v-if="label"
      class="text-sm text-[#506277] my-2"
    >{{ label }}</label>
    <input
      type="text"
      :value="modelValue"
      class="rounded-md outline-0 px-3 py-2 items-center focus:border-blue-500 focus:border-2 border-2 border-white"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span
      v-if="errorMessage !== ''"
      class="text-red-500 text-xs mt-1"
    >{{ errorMessage }}</span>
  </div>
</template>

<style scoped>

</style>