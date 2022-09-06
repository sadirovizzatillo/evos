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
    route(newW, oldW) {
      console.log("yangi", newW);
      console.log("eski", oldW);
    },
  },
};
</script>

<style>
.navbarr {
  position: fixed;
  top: 0;
  background-color: #42b983;
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
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
