<template>
  <aside class="aside">
    <ul class="list">
      <li class="list__item"> <router-link to="/">Главная</router-link></li>
      <li class="list__item"> <router-link to="/categories">Категории</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style lang="scss" scoped>
.aside {
  background: linear-gradient(150deg, #04041A, #15164D);
  color: #fff;
  grid-area: aside;
}
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  & a {
    padding: 5px 10px;
    &:hover {
      background: #15164D;
    }
  }
}

</style>