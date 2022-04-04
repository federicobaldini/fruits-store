<script setup lang="ts">
defineProps<{
  link?: boolean;
  to?: string;
  customClass?: string;
  onClick?: Function;
}>();
</script>

<template>
  <button
    v-if="!link"
    :class="customClass + ' custom-button'"
    @click="onClick()"
  >
    <slot></slot>
  </button>
  <a v-else :href="to" :class="customClass + ' custom-button'">
    <slot></slot>
  </a>
</template>

<style scoped>
.custom-button {
  height: 2rem;
  width: 7rem;
  text-align: center;
  border-radius: 15px;
  background: #28b463;
  color: #ffffff;
  text-decoration: none;
  border: none;
  transition: all 0.2s;
  font-size: 15px;
  padding: 0.3rem 1.5rem;
}

.custom-button:hover {
  background: #1e8449;
}
</style>
