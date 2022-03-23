<template>
  <header
    class="grid place-items-center text-center min-h-full h-5/6 bg-gray-200 py-8"
  >
    <h2
      class="font-semibold text-2xl md:text-3xl lg:text-4xl text-slate-900"
    >
      {{ props.title }}
    </h2>
    <p
      class="max-w-prose text-xl text-slate-600 leading-relaxed tracking-wide m-2"
    >
      <slot></slot>
    </p>
  </header>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
