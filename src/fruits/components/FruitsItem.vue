<script setup lang="ts">
import { ref, inject, onMounted, Ref } from "vue";
import Button from "../../shared/components/ui/Button.vue";

const props = defineProps<{
  id: number;
  name: string;
  description: string;
  imagePath: string;
  infoLink: string;
}>();

let isLoading: Ref<boolean> = ref(false);
const deleteFruit: Function = inject("deleteFruit");

onMounted(() => {
  setTimeout(() => {
    isLoading.value = true;
  }, 200);
});
</script>

<template>
  <Transition name="fade">
    <li v-if="isLoading" class="fruits-item">
      <div class="fruits-item__image-container">
        <img class="fruits-item__image" :src="props.imagePath" alt="fruit" />
      </div>
      <div class="fruits-item__info-container">
        <h1 class="fruits-item__title">{{ props.name.toUpperCase() }}</h1>
        <p class="fruits-item__description">{{ props.description }}</p>
        <div class="fruits-item__button-container">
          <Button
            :link="true"
            :to="props.infoLink"
            class="fruits-item__button-info"
            >INFO</Button
          >
          <Button
            :link="false"
            class="fruits-item__button-delete"
            :onClick="
              () => {
                deleteFruit(props.id);
              }
            "
            >DELETE</Button
          >
        </div>
      </div>
    </li>
  </Transition>
</template>

<style scoped>
.fruits-item {
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  overflow: hidden;
  background: white;
  min-height: 10rem;
  width: 40rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.fruits-item__title {
  font-size: 18px;
}

.fruits-item__image-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 8rem;
  margin: 0 2rem 0 0;
}

.fruits-item__image {
  padding: 1rem;
}

.fruits-item__info-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.fruits-item__description {
  font-size: 12px;
  color: #a6acaf;
  padding: 0 1rem 1rem 0;
}

.fruits-item__button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem 0 0;
}
.fruits-item__button-info {
  margin: 0 0 0 1rem;
  cursor: pointer;
  background: #3498db;
}
.fruits-item__button-info:hover {
  background: #2874a6;
}
.fruits-item__button-delete {
  margin: 0 0 0 1rem;
  cursor: pointer;
  background: #e74c3c;
}

.fruits-item__button-delete:hover {
  background: #b03a2e;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
