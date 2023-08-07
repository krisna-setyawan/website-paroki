<template>
  <div class="bg-section-180 pb-5">
    <v-container min-height="500">
      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="12" md="4" class="d-flex align-center">
          <v-card class="mx-auto py-5 text-center card-jadwal" min-width="100%">
            <span class="mb-5 part-title">Jadwal Misa</span>
            <v-list class="mx-5">Jumat : 17:00 WIB</v-list>
            <v-list class="mx-5">Sabtu : 18:00 WIB</v-list>
            <v-list class="mx-5">Minggu : 07:00 & 10:00 WIB</v-list>
            <v-divider class="my-5"></v-divider>
            <span class="mb-5 part-title">Sekolah Minggu</span>
            <v-list class="mx-5">Minggu : 06:00 WIB</v-list>
            <v-divider class="my-5"></v-divider>
            <span class="mb-5 part-title">Jadwal Sakramen Tobat</span>
            <v-list class="mx-5">20 Maret 2023, 17:00 WIB</v-list>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="6" class="text-center">
          <v-card
            class="mx-auto py-5 transparent-card"
            min-width="100%"
            elevation="0"
          >
            <div class="mb-3">
              <span class="text-center part-title">Kegiatan Paroki</span>
            </div>

            <v-carousel
              cycle
              :interval="2000"
              hide-delimiters
              show-arrows="hover"
              style="border-radius: 6px"
            >
              <v-carousel-item
                v-for="(item, index) in carouselItems"
                :key="index"
                :src="item.imageUrl"
                :alt="item.caption"
                cover
              >
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
          caption: "Keterangan Gambar 1",
        },
        {
          imageUrl:
            "https://news-id.gerejayesuskristus.org/media/960x720/tangerangcleanup-2.jpeg",
          caption:
            "Keterangan Gambar 2 Keterangan Gambar 2 Keterangan Gambar 2",
        },
      ],
    };
  },
};
</script>

<style>
@media only screen and (max-width: 599px) {
  .card-jadwal span {
    font-size: 120%;
  }
  .bg-section {
    font-size: 98%;
  }
}

.bg-section-180 {
  background: rgb(255, 244, 230);
  background: linear-gradient(
    180deg,
    rgba(255, 244, 230, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

.bg-title {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  border-radius: 10px;
  padding: 0px 30px;
  margin: 0% 10%;
}

.part-title {
  color: #808b96;
  font-size: 1.8rem;
}

.transparent-card {
  background-color: rgba(255, 255, 255, 0);
}
</style>
