<script setup lang="ts">
import {ButtonVariant, ButtonVariants} from 'interfaces/Button';
import {PropType, toRefs} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  buttonType: {
    type: String as PropType<ButtonVariant>,
    default: 'active'
  },
  to: {
    type: String,
    default: ''
  }
})

const {to} = toRefs(props)
const goTo = () => {
  to.value.length !== 0 && router.push(to.value)
}

</script>

<template>
  <button
    :disabled="disabled"
    :class="['text-center w-full py-3 border-2 focus:border-2 rounded-xl font-bold', ButtonVariants[buttonType]]"
    v-bind="$attrs"
    @click="goTo"
  >
    <slot />
  </button>
</template>

<style scoped>

</style>