<script setup lang="ts">
const props = defineProps<{
  link?: boolean;
  to?: string;
  customClass?: string;
  onClick?: Function;
}>();
</script>

<template>
  <button
    v-if="!props.link"
    :class="props.customClass + ' custom-button'"
    @click="props.onClick()"
  >
    <slot></slot>
  </button>
  <a v-else :href="props.to" :class="props.customClass + ' custom-button'">
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
