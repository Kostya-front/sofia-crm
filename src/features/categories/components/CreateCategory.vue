<template>
  <form @submit.prevent="onSubmit" class="form">
    <input v-model="storeCategories.newCategory.title" class="form-control" placeholder="Введите названии категории" type="text">
    <input v-model="storeCategories.newCategory.urlImage" class="form-control" placeholder="Введите url картинки" type="text">
    <PrimaryButton buttonText="Создать"/>
  </form>
</template>

<script setup lang="ts">
import PrimaryButton from '@/shared/ui/PrimaryButton/PrimaryButton'
import {ref} from "vue";
import {useCategoriesStore} from "@/features/categories/store";

const storeCategories = useCategoriesStore()

function onSubmit() {
  storeCategories.createCategory()
}
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 4fr 4fr 1fr;
  gap: 30px;
}
</style>