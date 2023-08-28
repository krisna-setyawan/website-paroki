<template>
  <div class="bg-section-180 pb-5">
    <v-container min-height="500">
      <div class="text-center welcome-text">
        <h1 class="text-uppercase">GEREJA KATOLIK {{ paroki.churchName }}</h1>
        <h2 class="text-uppercase">PAROKI {{ paroki.parokiName }} - {{ paroki.city }}</h2>
      </div>

      <v-divider class="my-5"></v-divider>

      <v-row class="d-flex justify-center">
        <v-col cols="11" sm="9" md="5" lg="4" style="position: relative;">
          <v-card class=" py-5 text-center card-jadwal" min-height="560" min-width="100%" elevation="2">
            <div class="py-auto list-jadwal">
              <span class="mb-0 part-title">Jadwal Misa</span>
              <v-list class="mx-5 ">Jumat : 17:00 WIB</v-list>
              <v-list class="mx-5 ">Sabtu : 18:00 WIB</v-list>
              <v-list class="mx-5 ">Minggu : 07:00 & 10:00 WIB</v-list>
              <v-divider class="my-5"></v-divider>
              <span class="mb-0 part-title">Sekolah Minggu</span>
              <v-list class="mx-5 ">Minggu : 06:00 WIB</v-list>
              <v-divider class="my-5"></v-divider>
              <span class="mb-0 part-title">Jadwal Sakramen Tobat</span>
              <v-list class="mx-5 ">20 Maret 2023, 17:00 WIB</v-list>
            </div>
          </v-card>
        </v-col>

        <v-col cols="11" sm="9" md="7" lg="6" class="text-center">
          <v-card class="mx-auto" min-height="560" min-width="100%" elevation="2" style="border-radius: 6px">
            <div class="border-b-lg py-2">
              <span class="text-center part-title">Kegiatan Paroki</span>
            </div>

            <v-carousel cycle :interval="2000" hide-delimiters show-arrows="hover" min-height="600">
              <v-carousel-item v-for="(item, index) in carouselItems" :key="index" :src="item.imageUrl"
                :lazy-src="item.imageUrl" :alt="item.caption" cover min-height="100%">
                <div class="d-flex fill-height justify-center align-end">
                  <span class="bg-title mb-3">{{ item.caption }}</span>
                </div>
              </v-carousel-item>
            </v-carousel>

            <!-- <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner" v-for="(item, index) in carouselItems" :key="index">
                <div class="carousel-item" :class="[{ active: index === 0 }]">
                  <img :src="item.imageUrl" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div> -->

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { paroki } = defineProps(["paroki"]);

const carouselItems = [
  {
    imageUrl:
      "https://news-id.gerejayesuskristus.org/media/960x540/tangerangcleanup-1.jpeg",
    caption: "Lorem ipsum dolor Lorem, ipsum dolor.",
  },
  {
    imageUrl:
      "https://news-id.gerejayesuskristus.org/media/960x720/tangerangcleanup-2.jpeg",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  },
];
</script>



<style>
.list-jadwal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (min-width: 420px) {
  .list-jadwal span {
    font-size: 20px;
  }
}

@media (min-width: 533px) {
  .list-jadwal span {
    font-size: 25px;
  }
}

@media (min-width: 768px) {
  .list-jadwal span {
    font-size: 29px;
  }
}

@media (min-width: 959px) {
  .list-jadwal span {
    font-size: 20px;
  }
}

@media (min-width: 1280px) {
  .list-jadwal span {
    font-size: 20px;
  }
}

@media (min-width: 1440px) {
  .list-jadwal span {
    font-size: 23px;
  }
}

@media (min-width: 1990px) {
  .list-jadwal span {
    font-size: 23px;
  }
}
</style>
