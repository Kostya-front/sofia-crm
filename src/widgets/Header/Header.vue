<template>
  <header class="header">
    <div class="container">
        <router-link to="/">
            <img src="@/assets/logo.svg" alt="">
        </router-link>

        <SecondaryButton/>
    </div>
  </header>
</template>

<script lang="ts" setup>
import SecondaryButton from '../../shared/ui/SecondaryButton/SecondaryButton.vue';
</script>

<style scoped>
.header {
  padding: 15px 0;
  background: linear-gradient(45deg, #04041A, #15164D);
  grid-area: header;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>