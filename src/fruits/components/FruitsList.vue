<script setup lang="ts">
import FruitsItem from "./FruitsItem.vue";

interface Fruit {
  id: number;
  name: string;
  description: string;
  infoLink: string;
  imagePath: string;
}

const props = defineProps<{
  fruits: Array<Fruit>;
  filterText: string;
}>();
</script>

<template>
  <ul class="fruits-list">
    <template v-for="fruit in props.fruits">
      <FruitsItem
        v-if="fruit.name.includes(props.filterText) || props.filterText === ''"
        :key="fruit.id"
        v-bind="fruit"
      />
    </template>
  </ul>
</template>

<style scoped>
.fruits-list {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
