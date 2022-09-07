<template>
  <div class="nav-bar">
    {{ elemenet }}
    <router-link
      class="button"
      ref="ok"
      :id="`button-${id}`"
      v-for="(route, id) in routes"
      :key="id"
      :to="{ path: `/food${route.hash}` }"
    >
      {{ route.name }}
    </router-link>
    <!-- {{ activeBtn }} -->
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  mounted() {
    setInterval(() => {
      document.querySelectorAll(".button").forEach((item) => {
        if (item.classList.contains("is-primary")) {
          return item.scrollIntoView();
        }
      });
    }, 300);
  },
  data() {
    return {
      ok: null,
      routes: [
        {
          id: 1,
          name: "Шаурма",
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
  computed: {
    activeBtn() {
      return document.querySelector(".is-primary");
    },
    elemenet() {
      return this.$store.state.element;
    },
  },
  // watch: {
  //   elemenet(newW, old) {
  //     console.log(newW);
  //     return newW;
  //   },
  // },
};
</script>

<style>
.button {
  margin-right: 12px;
  border: none !important;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  width: 457px;
  scroll-behavior: smooth;
}
</style>
