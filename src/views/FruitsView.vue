<script setup lang="ts">
import { ref, provide, Ref } from "vue";
import FruitsList from "../components/fruits/FruitsList.vue";

interface Fruit {
  id: number;
  name: string;
  description: string;
  infoLink: string;
  imagePath: string;
}

const fruits: Ref<Array<Fruit>> = ref([
  {
    id: 1,
    name: "watermelon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    infoLink: "https://en.wikipedia.org/wiki/Watermelon",
    imagePath:
      "https://www.freepnglogos.com/uploads/watermelon-png/watermelon-png-watermelon-png-image-download-36.png",
  },
  {
    id: 2,
    name: "avocado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    infoLink: "https://en.wikipedia.org/wiki/Avocado",
    imagePath:
      "https://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG.png",
  },
]);

const deleteFruitHandler = (fruitId) => {
  const fruitIndex = fruits.value.findIndex((f) => f.id === fruitId);
  fruits.value.splice(fruitIndex, 1);
};

provide("deleteFruit", deleteFruitHandler);
</script>

<template>
  <div class="fruits">
    <FruitsList :fruits="fruits" />
  </div>
</template>

<style scoped></style>
