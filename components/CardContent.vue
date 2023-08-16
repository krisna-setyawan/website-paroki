<template>
  <v-card class="mx-auto">
    <v-img class="align-end text-white" height="200"
      :lazy-src="post.imageLink
        ? post.imageLink
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
      :src="post.imageLink
        ? post.imageLink
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'" cover>
    </v-img>

    <v-card-text>
      <b class="card-content-title">{{ post.title }}</b>
      <br />
      <small>{{ formatDate(post.publishDate) }}</small>
    </v-card-text>

    <ButtonReadPost :jenisPost="jenisPost" :post="post" />
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
