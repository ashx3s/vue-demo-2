<template>
  <img
    :src="props.path"
    :alt="props.altText"
    class="h-24 w-10/12 object-cover rounded-t-md my-1"
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
