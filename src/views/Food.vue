<template id="food">
  <div class="about container">
    <h2 class="datas-titles title title-first">Шаурма</h2>
    <div id="Шаурма" class="datas">
      <div class="card" v-for="ok in new Array(6)" :key="ok">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-255x255">
                <img
                  src="https://cp.ectn.uz/files//0622/shaurma_s_kurochkoy_sredniyi_evos.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Шаурма</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Сытный набор из сочного куриного мяса, картофеля фри, риса и
            овощного салата. Подается с нашим фирменным томатным соусом
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>
    <h2 class="datas-titles title">Бургеры</h2>
    <div id="Бургеры" class="datas">
      <div class="card" v-for="ok in new Array(6)" :key="ok">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-255x255">
                <img
                  src="https://cp.ectn.uz/files//0622/Double_Cheeseburger_evos.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Бургеры</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Жареное куриное филе в лаваше со свежими огурцами и помидорами,
            хрустящими чипсами и нашим фирменным томатным соусом
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>
    <h2 class="datas-titles title">Лаваш</h2>
    <div id="Лаваш" class="datas">
      <div class="card" v-for="ok in new Array(4)" :key="ok">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-255x255">
                <img
                  src="https://cp.ectn.uz/files//web/lavash_kur.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Лаваш</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Сочная говядина завернута в лаваш с хрустящими чипсами, свежими
            огурцами и помидорами, с фирменным острым соусом и с сырным соусом
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>
    <h2 class="datas-titles title">Блюда</h2>
    <div id="Блюда" class="datas">
      <div class="card" v-for="ok in new Array(6)" :key="ok">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-255x255">
                <img
                  src="https://cp.ectn.uz/files//0622/donar_s_kurochkoy_evos.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Блюда</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Сытный набор из сочного куриного мяса, картофеля фри, риса и
            овощного салата. Подается с нашим фирменным томатным соусом
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>
    <h2 class="datas-titles title">Десерты</h2>
    <div id="Десерты" class="datas">
      <div class="card" v-for="ok in new Array(3)" :key="ok">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-255x255">
                <img
                  src="https://cp.ectn.uz/files//0622/Cheesecake_evos.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">Десерты</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div class="content">
            Сытный набор из сочного куриного мяса, картофеля фри, риса и
            овощного салата. Подается с нашим фирменным томатным соусом
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodItems",
  data() {
    return {
      scrollY: 0,
    };
  },
  computed: {
    shaurma() {
      return document.querySelector("#Шаурма");
    },
    burger() {
      return document.querySelector("#Бургеры");
    },
    lavash() {
      return document.querySelector("#Лаваш");
    },
    bluda() {
      return document.querySelector("#Блюда");
    },
    desert() {
      return document.querySelector("#Десерты");
    },
  },
  mounted() {
    document.getElementById(`button-${0}`).classList.add("is-primary");
    // var ok = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     entry.target.cla
    //   });
    // });
    // var docs = document.getElementById(`button-${0}`);
    // ok.observe(docs);
    window.addEventListener("scroll", () => {
      if (Math.abs(this.desert.getBoundingClientRect().top < 500)) {
        document.getElementById(`button-${4}`).classList.add("is-primary");
      } else {
        document.getElementById(`button-${4}`).classList.remove("is-primary");
      }
      if (
        Math.abs(this.bluda.getBoundingClientRect().top < 150) &&
        this.bluda.getBoundingClientRect().bottom > 645
      ) {
        document.getElementById(`button-${3}`).classList.add("is-primary");
      } else {
        document.getElementById(`button-${3}`).classList.remove("is-primary");
      }
      if (
        Math.abs(this.lavash.getBoundingClientRect().top < 150) &&
        this.lavash.getBoundingClientRect().bottom > 200
      ) {
        document.getElementById(`button-${2}`).classList.add("is-primary");
      } else {
        document.getElementById(`button-${2}`).classList.remove("is-primary");
      }
      if (
        this.burger.getBoundingClientRect().top < 100 &&
        this.burger.getBoundingClientRect().bottom > 177
      ) {
        document.getElementById(`button-${1}`).classList.add("is-primary");
      } else {
        document.getElementById(`button-${1}`).classList.remove("is-primary");
      }
      if (
        this.shaurma.getBoundingClientRect().top < 100 &&
        this.shaurma.getBoundingClientRect().bottom > 177
      ) {
        document.getElementById(`button-${0}`).classList.add("is-primary");
      } else {
        document.getElementById(`button-${0}`).classList.remove("is-primary");
      }
    });
  },
};
</script>

<style>
.title-first {
  padding-top: 70px !important;
}
.datas-titles {
  position: absolute;
  padding-top: 20px;
}
.fix {
  position: fixed;
}
.about {
  padding-bottom: 100px;
}
.datas {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 110px;
}
.media {
  flex-direction: column;
  align-items: center !important;
}
.card {
  max-width: 350px;
}
</style>
