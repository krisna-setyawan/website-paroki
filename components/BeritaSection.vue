<template>
  <div class="bg-section-180">
    <v-container min-height="500">
      <div class="text-center mb-5">
        <h1 class="headline">Berita</h1>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col cols="12" sm="6" md="6" lg="4" v-for="brt in news.slice(0, 5)" :key="brt.id">
          <div>
            <BeritaCard :berita="brt" />
          </div>
        </v-col>
      </v-row>

      <div class="d-flex justify-center mt-5">
        <v-btn variant="outlined" rounded="xl" size="x-large">
          <NuxtLink to="/berita" class="text-decoration-none text-grey-darken-4">
            Berita lainnya
          </NuxtLink>
        </v-btn>
      </div>
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
