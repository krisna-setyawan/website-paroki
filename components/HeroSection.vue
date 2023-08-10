<template>
  <div class="bg-section-180 pb-5">
    <v-container min-height="500">
      <div class="text-center welcome-text">
        <h1>GEREJA KATOLIK</h1>
        <h2>PAROKI SANTO FRANSISKUS ASISI - RESAPOMBO, BLITAR</h2>
      </div>

      <v-divider class="my-5"></v-divider>

      <v-row class="d-flex justify-center">
        <v-col cols="11" sm="9" md="5" lg="4" class="d-flex align-center">
          <v-card class="mx-auto py-5 text-center card-jadwal bg-orange-lighten-5" min-height="560" min-width="100%"
            elevation="2">
            <div class="py-auto coba">
              <span class="mb-0 part-title">Jadwal Misa</span>
              <v-list class="mx-5  bg-orange-lighten-5">Jumat : 17:00 WIB</v-list>
              <v-list class="mx-5  bg-orange-lighten-5">Sabtu : 18:00 WIB</v-list>
              <v-list class="mx-5  bg-orange-lighten-5">Minggu : 07:00 & 10:00 WIB</v-list>
              <v-divider class="my-5"></v-divider>
              <span class="mb-0 part-title">Sekolah Minggu</span>
              <v-list class="mx-5  bg-orange-lighten-5">Minggu : 06:00 WIB</v-list>
              <v-divider class="my-5"></v-divider>
              <span class="mb-0 part-title">Jadwal Sakramen Tobat</span>
              <v-list class="mx-5  bg-orange-lighten-5">20 Maret 2023, 17:00 WIB</v-list>
            </div>
          </v-card>
        </v-col>

        <v-col cols="11" sm="9" md="7" lg="6" class="text-center">
          <v-card class="mx-auto bg-orange-lighten-5" min-height="560" min-width="100%" elevation="2"
            style="border-radius: 6px">
            <div class="border-b-lg py-2">
              <span class="text-center part-title">Kegiatan Paroki</span>
            </div>

            <v-carousel cycle :interval="2000" hide-delimiters show-arrows="hover">
              <v-carousel-item v-for="(item, index) in carouselItems" :key="index" :src="item.imageUrl"
                :lazy-src="item.imageUrl" :alt="item.caption" cover min-width="100%">
                <div class="d-flex fill-height justify-center align-end">
                  <span class="bg-title mb-3">{{ item.caption }}</span>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
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
      ],
    };
  },
};
</script>

<style>
.coba {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
