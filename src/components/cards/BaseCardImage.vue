<template>
  <img
    :src="props.url"
    :alt="props.altText"
    class="w-24 max-w-md rounded-t-sm"
  />
</template>
<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
  },
});
</script>
