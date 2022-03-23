<template>
  <router-link
    :to="props.url"
    class="text-lg text-medium text-white hover:text-emerald-400 hover:underline hover:unerline-offset-8 hover:ease-in-out mx-2"
    ><slot></slot
  ></router-link>
</template>
<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});
</script>
