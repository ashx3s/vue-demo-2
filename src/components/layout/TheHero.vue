<template>
  <header class="grid place-items-center h-full md:h-5/6 bg-slate-900">
    <div>
      <h1
        class="font-bold text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-black via-emerald-600 to-pink-600 mb-1 md:mb-2 lg:mb-3"
      >
        {{ props.title }}
      </h1>
    </div>
  </header>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Hero Title",
  },
});
</script>
