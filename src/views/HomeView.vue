<template>
  <the-hero>Home Page</the-hero>
  <main class="grid justify-center bg-slate-50 my-8 mx-6">
    <section>
      <p class="max-w-prose">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
        voluptates similique sunt dicta atque doloremque molestias repellat
        deserunt a aliquid assumenda necessitatibus perferendis, eaque
        ratione tempore animi nemo ad. Commodi eos, odio soluta nihil
        itaque, non voluptate excepturi cupiditate, provident repudiandae
        neque voluptates aspernatur voluptatibus maiores animi perspiciatis
        in nulla est ad iusto doloremque quasi unde reiciendis. Officiis
        voluptatum amet reiciendis dolores eaque magnam animi autem
        expedita pariatur ipsam veritatis impedit quisquam inventore velit
        sunt blanditiis adipisci illum, et porro, eum similique iste veniam
        sint maiores. Quibusdam dolorem commodi dignissimos ab veniam modi
        ipsam architecto, recusandae sed velit! Culpa, doloremque!
      </p>
    </section>
    <section class="flex gap-8 w-100 bg-pink-200">
      <!-- Not Rendering **Fix** -->
      <base-card>
        <base-card-title>{{ cards[0].title }}</base-card-title>
        <base-card-text>{{ cards[0].description }}</base-card-text>
      </base-card>

      <!-- Product Card that focuses on props -->
      <ProductCard :cardInfo="productCard" />
    </section>
  </main>
</template>
<script setup>
import TheHero from "../components/layout/TheHero.vue";
import BaseCard from "../components/cards/BaseCard.vue";
import BaseCardTitle from "../components/cards/BaseCardTitle.vue";
import BaseCardImage from "../components/cards/BaseCardImage.vue";
import BaseCardText from "../components/cards/BaseCardText.vue";
import ProductCard from "@/components/cards/ProductCard.vue";

const cards = [
  {
    title: "Title",
    description: "text for the card",
  },
];
const productCard = {
  title: "Product",
  image: "img path",
  things: ["thing 1", "thing 2"],
  actionUrl: "https://actiongohere.com",
  actionText: "Click Me",
};
</script>
