<template>
  <div class="home">
    <Food />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Food from "./Food.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Food,
  },
};
</script>
