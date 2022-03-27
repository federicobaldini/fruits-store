<script>
import FruitsItem from "./FruitsItem.vue";

export default {
  name: "FruitsList",
  data() {
    return {};
  },
  components: { FruitsItem },
};
</script>

<template>
  <div class="fruits-list">
    <div>FruitsList Works!</div>
    <FruitsItem />
  </div>
</template>

<style scoped></style>
