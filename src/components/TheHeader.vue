<template>
  <div class="carusell">
    <VueSlickCarousel v-bind="settings">
      <div>
        <router-link class="button" id="button-0" to="/food#Шаурма">
          Шаурма
        </router-link>
      </div>
      <div>
        <router-link class="button" id="button-1" to="/food#Бургеры">
          Бургеры
        </router-link>
      </div>
      <div>
        <router-link class="button" id="button-2" to="/food#Лаваш">
          Лаваш
        </router-link>
      </div>
      <div>
        <router-link class="button" id="button-3" to="/food#Блюда">
          Блюда
        </router-link>
      </div>
      <div>
        <router-link class="button" id="button-4" to="/food#Десерты">
          Десерты
        </router-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "TheHeader",
  components: {
    VueSlickCarousel,
  },
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
      settings: {
        // dots: true,
        focusOnSelect: true,
        infinite: true,
        initialSlide: 1,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        swipeToSlide: true,
      },
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
.carusell {
  width: 800px;
  /* overflow-y: auto; */
}
a {
  color: black !important;
}
.slick-slider {
  width: 250px !important;
}
.slick-list {
  width: 285px;
}
.route-wrapper {
  display: flex !important;
}
.slick-slide {
  width: 30% !important;
}
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
