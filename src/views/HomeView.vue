<template>
  <div class="home container">
    <Food />
  </div>
</template>

<script>
import Food from "./Food.vue";

export default {
  name: "HomeView",
  components: {
    Food,
  },
};
</script>
