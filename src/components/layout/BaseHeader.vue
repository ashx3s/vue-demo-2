<template>
  <header
    class="grid place-items-center text-center min-h-fit bg-gray-200 mb-16 p-8"
  >
    <h1
      class="font-semibold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-4"
    >
      {{ props.title }}
    </h1>
    <p
      class="max-w-prose text-lg text-slate-600 leading-relaxed tracking-wide m-4"
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
