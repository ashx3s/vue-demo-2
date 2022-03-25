<template>
  <article class="w-1/2 bg-slate-200 shadow-lg shadow-slate-500">
    <!-- top section -->
    <div class="grid place-content-center gap-2 m-2">
      <h3 class="font-bold text-4xl lg:text-6xl mb-2">
        {{ props.cardInfo.title }}
      </h3>
      <img
        :src="props.cardInfo.image"
        alt="props.card.altText"
        class="object-cover w-1/2 rounded-md my-2"
      />
    </div>
    <!-- bottom section -->
    <div class="grid gap-2">
      <!-- Product Details, max 3 list items -->
      <ul v-if="props.cardInfo.details">
        <li v-for="detail in props.cardInfo.details" :key="detail.id">
          {{ detail.text }}
        </li>
      </ul>
    </div>
    <div>
      <!-- cta -->
      <base-card-action :path="props.cardInfo.action"
        >Shop</base-card-action
      >
    </div>
  </article>
</template>
<script setup>
import BaseCardAction from "./BaseCardAction.vue";

const props = defineProps({
  cardInfo: {
    type: Object,
  },
});
</script>
