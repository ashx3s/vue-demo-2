<template>
  <header class="grid grid-cols-2 items-center w-full bg-slate-900 p-2">
    <TheLogo />
    <div class="flex items-center justify-self-end">
      <TheNav />
      <TheToggle />
    </div>
  </header>
</template>
<script setup>
import TheLogo from "../TheLogo.vue";
import TheNav from "./TheNav.vue";
import TheToggle from "./TheToggle.vue";
</script>
