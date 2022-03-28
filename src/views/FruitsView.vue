<script>
import FruitsList from "../components/fruits/FruitsList.vue";

export default {
  data() {
    return {
      fruits: [
        {
          id: 1,
          name: "watermelon",
          imagePath:
            "https://www.freepnglogos.com/uploads/watermelon-png/watermelon-png-watermelon-png-image-download-36.png",
        },
        {
          id: 2,
          name: "avocado",
          imagePath:
            "https://www.pngall.com/wp-content/uploads/2016/05/Avocado-PNG.png",
        },
      ],
    };
  },
  components: { FruitsList },
};
</script>

<template>
  <div class="fruits"><FruitsList :fruits="fruits" /></div>
</template>

<style scoped></style>
