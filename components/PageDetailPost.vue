<template>
  <h1 class="judul-content">{{ post.title }}</h1>
  <p class="mb-1">Penulis : {{ post.author }}</p>
  <p class="mb-1">Sumber : {{ post.originalUrl ? post.originalUrl : '-' }}</p>
  <small>{{ formatDate(post.publishDate) }}</small>

  <v-divider class="my-5"></v-divider>

  <div v-if="post.imageLink">
    <v-img :width="600" cover :src="post.imageLink"></v-img>
  </div>

  <div class="isi-content" v-html="post.content"></div>

  <div class="d-flex justify-end">
    <v-btn prepend-icon="mdi-search-web" class="mx-3 mb-3" v-if="post.originalUrl">
      <NuxtLink :to="`https://${post.originalUrl}`" target="_blank" class="text-decoration-none" style="color: inherit;">
        Lihat Sumber
      </NuxtLink>
    </v-btn>
    <v-btn prepend-icon="mdi-whatsapp" class="mx-3 mb-3" @click="bagikanWhatsApp">
      Bagikan
    </v-btn>
  </div>
</template>

<script setup>
const { post } = defineProps(["post"]);

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
