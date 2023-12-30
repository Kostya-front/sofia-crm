<template>
  <Header/>
  <Aside/>
  <router-view/>   
</template>

<style lang="scss">
li {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
  display: block;
  height: 100%;
}
</style>

<script lang="ts" setup>
import Header from '@/widgets/Header/Header.vue'
import Aside from '@/widgets/Aside/Aside.vue'
</script>