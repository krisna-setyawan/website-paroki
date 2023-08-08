<template>
  <div class="bg-section-180">
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <h1 class="headline">Berita</h1>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(brt, index) in news.articles"
          :key="brt.id"
        >
          <div v-if="index < 5">
            <BeritaCard :berita="brt" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { data: news } = await useFetch(
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=dc25dbc130d5420e9bc768a63ceb9edb"
);
</script>
