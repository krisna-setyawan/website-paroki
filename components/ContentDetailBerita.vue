<template>
  <div class="bg-section-180">
    <v-container min-height="500" max-width="50%">
      <v-row class="d-flex justify-space-between">
        <v-col cols="9">
          <h1 class="judul-content">{{ berita.title }}</h1>
          <p>Author : {{ berita.author }}</p>
          <small>Published : {{ formatDate(berita.publishDate) }}</small>
        </v-col>
        <v-col cols="3" class="text-end">
          <v-btn prepend-icon="mdi-search-web" class="mx-3 mb-3">
            <a v-bind:href="berita.originalUrl">
              Lihat Sumber
            </a>
          </v-btn>
          <v-btn prepend-icon="mdi-whatsapp" class="mx-3 mb-3">
            Bagikan
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-5"></v-divider>

      <div class="isi-content" v-html="berita.content"></div>
    </v-container>
  </div>
</template>

<script setup>
const { berita } = defineProps(["berita"]);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const locale = "id-ID";
  return new Date(dateString).toLocaleDateString(locale, options);
};
</script>
