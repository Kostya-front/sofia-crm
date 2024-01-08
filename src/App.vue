<template>
  <div class="page">
    <Header/>

    <Aside/>

    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">

.page {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: max-content auto;
  grid-template-areas: 'header header' 'aside main';
  height: 100vh;
}

.main {
  grid-area: main;
  padding: 20px;
}

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