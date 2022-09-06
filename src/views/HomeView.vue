<template>
  <div class="home container">
    <Food />
  </div>
</template>

<script>
// @ is an alias to /src
import Food from "./Food.vue";

export default {
  name: "HomeView",
  components: {
    Food,
  },
};
</script>
