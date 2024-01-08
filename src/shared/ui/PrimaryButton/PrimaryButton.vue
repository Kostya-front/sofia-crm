<template>
  <button class="button">{{buttonText}}</button>
</template>

<script setup lang="ts">
const props = defineProps(['buttonText'])


</script>

<style scoped>
.button {
  background: #030319;
  color: #fff;
  padding: 5px 39px;
  border-radius: 24px;
  border: none;
  font-size: 24px;
}
</style>