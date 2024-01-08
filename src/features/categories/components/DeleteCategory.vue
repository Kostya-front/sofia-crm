<template>
 <DangerButton text="X" :onClick="() => storeCategory.deleteCategory(categoryId)"/>
</template>

<script setup lang="ts">
import DangerButton from "@/shared/ui/DangerButton/DangerButton";
import {useCategoriesStore} from "@/features/categories/store";

const props = defineProps(['categoryId'])
const storeCategory = useCategoriesStore()

</script>

<style scoped>

</style>