<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Имя категории</th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="(category, index) of storeCategories.categories"
        :key="new Date().getTime()"
    >
      <th scope="row">{{ index + 1}}</th>
      <td>{{ category.title }}</td>
      <td class="table__buttons"><DeleteCategory :categoryId="category.id"/></td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

import {useCategoriesStore} from "@/features/categories/store";
import DeleteCategory from '@/features/categories/components/DeleteCategory'
const storeCategories = useCategoriesStore()
</script>

<style scoped>
.table__buttons {
  display: flex;
  justify-content: flex-end;
}
</style>