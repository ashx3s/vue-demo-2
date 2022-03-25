<template>
  <a
    :href="props.url"
    class="grid place-content-center w-28 rounded-sm hover:shadow-md hover:shadow-slate-400 hover:ease-in-out m-1 px-4 py-2 cursor-pointer"
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
