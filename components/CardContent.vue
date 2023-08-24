<template>
  <v-card class="mx-auto" height="360" style="position: relative;">

    <div v-if="post.imageLink">
      <v-img class="align-end text-white" height="200" :lazy-src="post.imageLink" :src="post.imageLink" cover></v-img>
    </div>

    <div v-else class="text-center">
      <img class="align-end text-white" height="200" lazy-src="../public/logo.jpg" src="../public/logo.jpg">
    </div>

    <hr class="mt-0">

    <v-card-text>
      <b class="card-content-title">{{ post.title }}</b>
      <br />
      <small>{{ formatDate(post.publishDate) }}</small>
    </v-card-text>

    <div class="m-3" style="position: absolute; bottom: 0; right: 0;">
      <ButtonReadPost :jenisPost="jenisPost" :post="post" />
    </div>
  </v-card>
</template>

<script setup>
const props = defineProps({
  post: Array,
  jenisPost: String,
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const locale = "id-ID";
  return new Date(dateString).toLocaleDateString(locale, options);
};
</script>
