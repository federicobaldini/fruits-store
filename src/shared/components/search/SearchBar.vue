<script setup lang="ts">
const emit = defineEmits<{
  (e: "on-change-input-text", value: string): void;
}>();
</script>

<template>
  <div class="searchbar">
    <input
      type="text"
      placeholder="What are you looking for?"
      class="searchbar__input"
      @input="(event) => emit('on-change-input-text', (event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.searchbar {
  margin: 2rem;
  width: 100%;
  text-align: center;
}

.searchbar__input {
  max-width: 40rem;
  width: 100%;
  height: 3rem;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  padding: 0 0 0 2rem;
  font-size: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.24);
}
</style>
