<template>
  <v-card class="mx-auto mb-5" max-width="98%">
    <v-img
      :lazy-src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
      :src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
      height="200px" cover>
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title>
      {{ post.title }}
    </v-card-title>

    <div v-if="post.excerpt">
      <v-card-subtitle>
        {{ post.excerpt }}
      </v-card-subtitle>
    </div>

    <div class="ms-5">
      <small>Author : {{ post.author }}</small>
      <br>
      <small>Sumber : {{ post.originalUrl }}</small>
    </div>

    <v-card-actions>
      <!-- <ButtonReadPost :jenisPost="jenisPost" :post="post" /> -->
      <v-btn color="orange-lighten-3" class="m-3">
        <NuxtLink :to="`/${jenisPost}/${post.slug}`" class="text-decoration-none text-orange-darken-3">
          Baca {{ jenisPost }}
        </NuxtLink>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ extractFirstSentence(post.content) }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
const props = defineProps({
  post: Array,
  jenisPost: String,
  show: false
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const locale = "id-ID";
  return new Date(dateString).toLocaleDateString(locale, options);
};

const extractFirstSentence = (htmlContent) => {
  const div = document.createElement('div');
  div.innerHTML = htmlContent;

  const text = div.textContent || div.innerText || '';
  const firstSentence = text.split(/\.|\!|\?/)[0]; // Mengambil kalimat pertama

  return firstSentence;
};
</script>
