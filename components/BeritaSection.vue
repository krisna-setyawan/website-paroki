<template>
  <div class="bg-section-180">
    <v-container min-height="500" max-width="0%">
      <div class="text-center mb-5">
        <h1 class="headline">Berita</h1>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col cols="11" sm="6" md="6" lg="4" v-for="brt in news.slice(0, 5)" :key="brt.id">
          <div>
            <BeritaCard :berita="brt" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { data: news } = await useFetch(
  "https://api.imavi.org/imavi/news/get-all",
  {
    headers: {
      id: "618db358b9d7140e7025b86b",
      Secret: "38c8c32d-2774-4d3f-a016-c77f742f2d05",
      Partner: "parokiAll,general,smtb,smtbk3",
    },
  }
);
</script>
