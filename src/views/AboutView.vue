<template>
  <base-header :title="'About Page'">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
      perferendis modi molestias obcaecati placeat pariatur atque ea
      corporis voluptates odio.
    </p>
  </base-header>
  <main class="h-screen">
    <section
      class="grid grid-cols-2 items-center justify-items-center mt-8 mb-12 max-w-fit mx-auto"
    >
      <h3 class="text-3xl font-semibold col-span-full">
        Let's make some stuff
      </h3>

      <!-- List -->
      <base-list>
        <base-list-item v-for="item in numArr" :key="item.id">{{
          item
        }}</base-list-item>
      </base-list>
      <!-- Buttons -->
      <div class="grid grid-cols-2 gap-2">
        <div
          class="grid place-items-center bg-blue-400 text-2xl font-semibold p-6 rounded-md"
        >
          {{ totalFromArr }}
        </div>
        <div class="flex flex-col gap-6 justify-center">
          <base-button :onClick="sumArr">Sum Values</base-button>
          <base-button :onClick="clearValue">Clear</base-button>
        </div>
      </div>
    </section>
    <section></section>
  </main>
</template>
<script setup>
import { ref } from "vue";
import BaseHeader from "../components/layout/BaseHeader.vue";
import BaseList from "../components/utilities/BaseList.vue";
import BaseListItem from "../components/utilities/BaseListItem.vue";
import BaseButton from "../components/utilities/BaseButton.vue";

// original data
const numArr = [2, 4, 6, 8];

// responsive value
const totalFromArr = ref(0);

// sum function
function addValues(a, b) {
  return a + b;
}

// add sum to totalFromArr
const sumArr = (event) => {
  return (totalFromArr.value = numArr.reduce(addValues));
};

// clear totalFromArr value
const clearValue = (event) => {
  return (totalFromArr.value = 0);
};
</script>
