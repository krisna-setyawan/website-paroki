<template>
  <v-row class="d-flex justify-space-between">
    <v-col cols="12" sm="9">
      <h1 class="judul-content">{{ berita.title }}</h1>
      <p class="mb-1">Author : {{ berita.author }}</p>
      <small>Published : {{ formatDate(berita.publishDate) }}</small>
    </v-col>
    <v-col cols="12" sm="3" class="text-end">
      <v-btn prepend-icon="mdi-search-web" class="mx-3 mb-3" v-if="berita.originalUrl">
        <NuxtLink :to="`https://${berita.originalUrl}`" target="_blank" class="text-decoration-none"
          style="color: inherit;">
          Lihat Sumber
        </NuxtLink>
      </v-btn>
      <v-btn prepend-icon="mdi-whatsapp" class="mx-3 mb-3" @click="bagikanWhatsApp">
        Bagikan
      </v-btn>
    </v-col>
  </v-row>

  <v-divider class="my-5"></v-divider>

  <div v-if="berita.imageLink">
    <v-img :width="600" cover :src="berita.imageLink"></v-img>
  </div>

  <div class="isi-content" v-html="berita.content"></div>
</template>

<script setup>
const { berita } = defineProps(["berita"]);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const locale = "id-ID";
  return new Date(dateString).toLocaleDateString(locale, options);
};

const bagikanWhatsApp = () => {
  const currentPageURL = window.location.href;
  const pesanTambahan = 'Hallo guys, tak kasih info nih. coba cek di ';
  const fullMessage = `${pesanTambahan} ${currentPageURL}`;
  const encodedURL = encodeURIComponent(fullMessage);
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodedURL}`;
  window.open(whatsappURL, '_blank');
};
</script>
