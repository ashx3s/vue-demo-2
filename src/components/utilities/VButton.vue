<template>
  <button
    @click="onClick"
    class="grid place-items-center px-4 p-y2 bg-red-200 hover:bg-red-400 hover:shadow-sm hover:shadow-red-200 hover:ease-in-out active:bg-red-700"
  >
    <slot></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  onClick: {
    type: Function,
    required: true,
  },
});
</script>
