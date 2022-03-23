<template>
  <a
    href="props.url"
    class="text-lg text-slate-800 hover:text-slate-500 hover:ease-in-out"
    ><slot></slot
  ></a>
</template>
<script setup>
const props = defineProps({
  url: {
    type: String,
  },
});
</script>
