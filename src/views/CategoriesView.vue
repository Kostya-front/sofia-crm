<template>
  <div class="home">
    <h1>Категории</h1>

    <CreateCategory/>

    <CategoriesTable/>
  </div>
</template>

<script setup lang="ts">
import CreateCategory from "@/features/categories/components/CreateCategory.vue";
import CategoriesTable from "@/widgets/CategoriesTable/CategoriesTable.vue";

</script>
