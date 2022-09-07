<template>
  <div id="app">
    <nav class="navbarr">
      <TheHeader />
    </nav>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
  computed: {
    route() {
      return this.$route;
    },
  },
  watch: {
    activeBtn(newW, oldW) {
      console.log("yangi", newW);
      console.log("eski", oldW);
    },
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.navbarr {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 #e5e5e5;
  width: 100%;
  z-index: 99;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 12px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
