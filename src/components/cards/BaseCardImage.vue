<template>
  <img
    :src="props.path"
    :alt="props.altText"
    class="w-24 max-w-md rounded-t-sm"
  />
</template>
<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
  },
});
</script>
