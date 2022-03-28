<script>
import FruitsItem from "./FruitsItem.vue";

export default {
  name: "FruitsList",
  props: ["fruits"],
  
  data() {
    return {};
  },
  components: { FruitsItem },
};
</script>

<template>
  <div class="fruits-list">
    <FruitsItem
      v-for="(fruit, fruitIndex) in this.fruits"
      :key="fruitIndex"
      :fruit="fruit"
    />
  </div>
</template>

<style scoped>
.fruits-list {
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
}
</style>
