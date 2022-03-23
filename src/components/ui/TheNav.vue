<template>
  <nav class="flex gap-2 my-2 mr-4 p-2">
    <the-nav-link :url="'/'">Home</the-nav-link>
    <the-nav-link :url="'about'">About</the-nav-link>
  </nav>
</template>
<script setup>
import TheNavLink from "./TheNavLink.vue";
</script>
