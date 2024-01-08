<template>
  <button @click="onClick()" class="button">{{text}}</button>
</template>

<script setup lang="ts">
const props = defineProps(['onClick', 'text'])
</script>

<style scoped>
.button {
  background: #EE0000;
  width: 37px;
  height: 37px;
  border: none;
  border-radius: 12px;
  color: #fff;
}
</style>