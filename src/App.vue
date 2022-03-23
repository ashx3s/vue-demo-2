<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>
<script setup>
import TheHeader from "./components/ui/TheHeader.vue";
import TheFooter from "./components/ui/TheFooter.vue";
</script>
