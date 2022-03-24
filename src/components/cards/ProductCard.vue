<template>
  <article>
    <!-- top section -->
    <div>
      <h3>{{ props.cardInfo.title }}</h3>
      <img :src="props.cardInfo.image" alt="props.card.altText" />
    </div>
    <!-- bottom section -->
    <div>
      <!-- Product Details, max 3 list items -->
      <ul v-if="props.things">
        <li v-for="thing in props.cardInfo.things" :key="thing.id">
          {{ thing.text }}
        </li>
      </ul>
    </div>
    <div>
      <!-- cta -->
      <a :href="props.cardInfo.actionUrl">{{
        props.cardInfo.actionText
      }}</a>
    </div>
  </article>
</template>
<script setup>
const props = defineProps({
  cardInfo: {
    type: Object,
  },
});
</script>
