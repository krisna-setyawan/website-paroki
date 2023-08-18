<template>
  <div class="bg-section-180">

    <div class="text-center mb-5">
      <h1 class="headline">{{ jenisPost }}</h1>
    </div>

    <div class="wrapper-berita">

      <v-row class="d-flex justify-center">
        <v-col cols="12" sm="11" lg="6" v-for="post in posts.slice(0, displayedPostsCount)" :key="post.id">
          <PageCardPost :post="post" :jenisPost="formattedJenisPost" />
        </v-col>
      </v-row>

    </div>

    <div class="d-flex justify-center my-5">
      <v-btn variant="outlined" rounded="xl" size="x-large" @click="loadMore">Load more ..</v-btn>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  posts: Array,
  jenisPost: String,
});

const formattedJenisPost = props.jenisPost.toLowerCase();

const displayedPostsCount = ref(6); // load pertama 6

const loadMore = () => {
  displayedPostsCount.value += 6; // lalu tambah 6
};
</script>