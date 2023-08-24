<template>
  <div style="padding-bottom: 50px;">
    <v-container min-height="500">
      <div class="text-center mb-5">
        <h1 class="headline">{{ jenisPost }}</h1>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col cols="12" sm="6" md="6" lg="4" v-for="post in posts.slice(0, 5)" :key="post.id">
          <div>
            <CardContent :post="post" :jenisPost="formattedJenisPost" />
          </div>
        </v-col>
      </v-row>

      <div class="d-flex justify-center mt-5">
        <NuxtLink :to="`/${formattedJenisPost}`" class="text-decoration-none text-grey-darken-4">
          <v-btn variant="outlined" rounded="xl" size="x-large">
            Lihat {{ jenisPost }} lainnya
          </v-btn>
        </NuxtLink>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const props = defineProps({
  posts: Array,
  jenisPost: String,
});
const formattedJenisPost = props.jenisPost.toLowerCase();
</script>
