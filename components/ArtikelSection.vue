<template>
  <div class="bg-section-360" style="padding-bottom: 30px;">
    <v-container min-height="500">
      <div class="text-center mb-5">
        <h1 class="headline">Artikel</h1>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col cols="12" sm="6" md="6" lg="4" v-for="art in articles.slice(0, 5)" :key="art.id">
          <ArtikelCard :artikel="art" />
        </v-col>
      </v-row>
      <div class="d-flex justify-center mt-5">
        <v-btn variant="outlined" rounded="xl" size="x-large">
          <NuxtLink to="/artikel" class="text-decoration-none text-grey-darken-4">
            Artikel lainnya
          </NuxtLink>
        </v-btn>
      </div>

    </v-container>
  </div>
</template>

<script setup>
const { data: articles } = await useFetch(
  "https://api.imavi.org/imavi/articles/get-all",
  {
    headers: {
      id: "618db358b9d7140e7025b86b",
      Secret: "38c8c32d-2774-4d3f-a016-c77f742f2d05",
      Partner: "parokiAll,general,smtb,smtbk3",
    },
  }
);
</script>
