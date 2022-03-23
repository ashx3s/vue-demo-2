<template>
  <router-link to="/"
    ><img
      :src="logo.path"
      :alt="logo.altText"
      class="w-6 lg:w-8 m-1 lg:m-2 hover:opacity-75"
  /></router-link>
</template>
<script setup>
const logo = {
  path: "../assets/logo.png",
  altText: "VueJS Logo",
};
</script>
