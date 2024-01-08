import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {ICategory} from "@/features/categories/types";


export const useCategoriesStore = defineStore('categories', () => {
  let categories = ref<ICategory[]>([])
  const newCategory = reactive<ICategory>({id: new Date().getTime(), title: '', urlImage: ''})


  function createCategory() {
    let destructCategory = {...newCategory}
    categories.value.push(destructCategory)
  }

  function deleteCategory(id: number) {
    // const index = categories.findIndex(category => category.id === id)
    // if(index >= 0) {
    //   categories.splice(index,1)
    // }
    categories.value = categories.value.filter(category => category.id !== id)
  }

  return {
    categories,
    newCategory,
    createCategory,
    deleteCategory
  }
})
