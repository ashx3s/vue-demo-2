<template>
  <header class="grid place-items-center text-center h-1/3 bg-gray-200">
    <h2
      class="text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-1 lg:mb-2"
    >
      {{ props.title }}
    </h2>
  </header>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
