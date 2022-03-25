<template>
  <the-hero>Home Page</the-hero>
  <main class="grid place-content-center bg-slate-50 my-8 mx-6">
    <section class="w-100 mx-auto m-12">
      <header class="text-center mb-4">
        <h2 class="text-4xl font-semibold leading-8">Latin Party</h2>
      </header>
      <div>
        <p class="max-w-prose text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
          voluptates similique sunt dicta atque doloremque molestias
          repellat deserunt a aliquid assumenda necessitatibus perferendis,
          eaque ratione tempore animi nemo ad. Commodi eos, odio soluta
          nihil itaque, non voluptate excepturi cupiditate, provident
          repudiandae neque voluptates aspernatur voluptatibus maiores
          animi perspiciatis in nulla est ad iusto doloremque quasi unde
          reiciendis. Officiis voluptatum amet reiciendis dolores eaque
          magnam animi autem expedita pariatur ipsam veritatis impedit
          quisquam inventore velit sunt blanditiis adipisci illum, et
          porro, eum similique iste veniam sint maiores. Quibusdam dolorem
          commodi dignissimos ab veniam modi ipsam architecto, recusandae
          sed velit! Culpa, doloremque!
        </p>
      </div>
    </section>
    <section class="w-100 bg-emerald-100 py-8">
      <header class="text-center mb-4">
        <h2 class="text-4xl font-semibold">Card Layout</h2>
      </header>
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Not Rendering **Fix** -->
        <base-card v-for="card in cards" :key="card.id">
          <base-card-title>{{ card.title }}</base-card-title>
          <base-card-image :path="card.image" />
          <base-card-text>{{ card.description }}</base-card-text>
          <base-card-action
            class="bg-emerald-300 text-slate-900 hover:bg-emerald-400 hover:shadow-md shadow-emerald-600"
            >Buy</base-card-action
          >
        </base-card>
      </div>
    </section>
    <!-- Product Card that focuses on props
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-8">
      <header class="text-center mb-4 col-span-full">
        <h2 class="text-4xl font-semibold">Products</h2>
      </header>
    </section>
    -->
  </main>
</template>
<script setup>
import TheHero from "../components/layout/TheHero.vue";
import BaseCard from "../components/cards/BaseCard.vue";
import BaseCardTitle from "../components/cards/BaseCardTitle.vue";
import BaseCardImage from "../components/cards/BaseCardImage.vue";
import BaseCardText from "../components/cards/BaseCardText.vue";
import BaseCardAction from "../components/cards/BaseCardAction.vue";
import ProductCard from "../components/cards/ProductCard.vue";

const cards = [
  {
    title: "Super Bowl",
    description: "Official sponsor of the Snoop and Dre half-time show.",
    image: require(`../assets/images/food.jpeg`),
  },
  {
    title: "Millenial Toast",
    description: "The breakfast that tanked an economy.",
    image: require(`../assets/images/avocadotoast.jpeg`),
  },
  {
    title: "Kale Caesar",
    description: "The personal fav of General Maximus Decimus Miridius.",
    image: require(`../assets/images/salad.jpeg`),
  },
];
const products = [
  {
    title: "Product",
    image: require("../assets/images/radio.jpeg"),
    details: ["thing 1", "thing 2"],
    actionUrl: "https://sait-wbdv.netlify.app",
  },
  {
    title: "Product",
    image: "im",
    details: ["thing 1", "thing 2"],
    actionUrl: "https://sait-wbdv.netlify.app",
  },
];
</script>
