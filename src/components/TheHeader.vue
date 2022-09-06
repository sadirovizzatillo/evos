<template>
  <div>
    <router-link
      class="button"
      :id="`button-${id}`"
      v-for="(route, id) in routes"
      :key="id"
      :to="{ path: `/food${route.hash}` }"
    >
      {{ route.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      routes: [
        {
          id: 1,
          name: "shaurma",
          hash: "#Шаурма",
        },
        {
          id: 2,
          name: "Бургеры",
          hash: "#Бургеры",
        },
        {
          id: 3,
          name: "Лаваш",
          hash: "#Лаваш",
        },
        {
          id: 3,
          name: "Блюда",
          hash: "#Блюда",
        },
        {
          id: 3,
          name: "Десерты",
          hash: "#Десерты",
        },
      ],
    };
  },
};
</script>

<style>
.button {
  margin-right: 12px;
}
</style>
