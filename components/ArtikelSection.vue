<template>
  <div class="bg-section-360">
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <h1 class="headline">Artikel</h1>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col
          cols="12"
          sm="6"
          md="4"
          v-for="(art, index) in articles.articles"
          :key="art.id"
        >
          <div v-if="index < 5">
            <ArtikelCard :artikel="art" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { data: articles } = await useFetch(
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dc25dbc130d5420e9bc768a63ceb9edb"
);
</script>
