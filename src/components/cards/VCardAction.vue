<template>
  <a
    :href="props.url"
    class="grid place-items-center px-4 py-2 bg-blue-900 hover:bg-blue-600 hover:shadow-sm hover:shadow-blue-200 hover:ease-in-out active:bg-emerald-700"
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
