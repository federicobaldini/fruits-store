<script>
export default {
  name: "FruitsItem",
  props: ["fruit"],

  data() {
    return {};
  },
};
</script>

<template>
  <div class="fruits-item">
    <h1 class="fruits-item__title">{{ this.fruit.name.toUpperCase() }}</h1>
    <div class="fruits-item__image-container">
      <img class="fruits-item__image" :src="this.fruit.imagePath" alt="fruit" />
    </div>
  </div>
</template>

<style scoped>
.fruits-item {
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem;
  overflow: hidden;
  background: white;
  height: 15rem;
  width: 15rem;
}

.fruits-item__title {
  font-size: 18px;
}

.fruits-item__image-container {
  display: flex;
  justify-content: center;
  height: 80%;
}

.fruits-item__image {
  padding: 1rem;
}
</style>
