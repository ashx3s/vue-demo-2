<template>
  <a
    :href="props.url"
    class="grid place-items-center px-4 py-2 bg-emerald-200 hover:bg-emerald-500 hover:shadow-sm hover:shadow-emerald-100 hover:ease-in-out active:bg-emerald-700"
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
