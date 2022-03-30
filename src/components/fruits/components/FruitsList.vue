<script setup lang="ts">
import FruitsItem from "./FruitsItem.vue";

interface Fruit {
  id: number;
  name: string;
  description: string;
  infoLink: string;
  imagePath: string;
}

defineProps<{
  fruits: Array<Fruit>;
}>();
</script>

<template>
  <ul class="fruits-list">
    <FruitsItem
      v-for="(fruit, fruitIndex) in fruits"
      :key="fruitIndex"
      v-bind="fruit"
    />
  </ul>
</template>

<style scoped>
.fruits-list {
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
