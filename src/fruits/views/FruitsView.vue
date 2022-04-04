<script setup lang="ts">
import { ref, provide, Ref } from "vue";
import FruitsList from "../components/FruitsList.vue";
import SearchBar from "../../shared/components/search/SearchBar.vue";

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
let filterText: Ref<string> = ref("");

const onChangeInputTextHandler = (newInputText: string) => {
  filterText.value = newInputText;
};

const deleteFruitHandler = (fruitId: number) => {
  const fruitIndex = fruits.value.findIndex((f) => f.id === fruitId);
  fruits.value.splice(fruitIndex, 1);
};

provide("deleteFruit", deleteFruitHandler);
</script>

<template>
  <div class="fruits">
    <SearchBar @on-change-input-text="onChangeInputTextHandler" />
    <FruitsList :fruits="fruits" :filterText="filterText" />
  </div>
</template>

<style scoped>
.fruits {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
