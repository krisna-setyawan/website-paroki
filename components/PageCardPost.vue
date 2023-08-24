<template>
  <v-card class="mx-5 card-post-in-list" style="padding: 20px 0px; margin-bottom: 40px; " elevation="3">
    <v-row class="d-flex justify-center">
      <v-col cols="10" lg="5">

        <div v-if="post.imageLink">
          <v-img class="align-end text-white rounded bg-grey-lighten-2 text-center" height="300" cover
            :lazy-src="post.imageLink" :src="post.imageLink">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>

        <div v-else class="text-center post-default-img">
          <img style="width: 100%;" class="align-end text-white rounded bg-grey-lighten-2 text-center" height="300"
            lazy-src="../public/logo.jpg" src="../public/logo.jpg">
        </div>

      </v-col>
      <v-col cols="10" lg="6" style="text-align: left;">
        <h5>{{ post.title }}</h5>

        <div v-if="post.excerpt">
          {{ post.excerpt ? post.excerpt : '-' }}
        </div>
        <div v-else>
          {{ extractFirstSentence(post.content) }}
        </div>

        <br>
        <p style="font-size: 13px;" class="mb-1">Penulis : {{ post.author }}</p>
        <p style="font-size: 13px;" class="mb-1">Sumber : {{ post.originalUrl ? post.originalUrl : '-' }}</p>
        <p style="font-size: 13px;" class="mb-1">{{ formatDate(post.publishDate) }}</p>
        <br>

        <div class="row justify-end">
          <div class="col-6 text-end">
            <ButtonReadPost class="btn-baca-post-in-list" :jenisPost="jenisPost" :post="post" />
          </div>
        </div>

      </v-col>
    </v-row>
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



<style>
@media (min-width: 1280px) {
  .card-post-in-list {
    position: relative;
  }

  .btn-baca-post-in-list {
    position: absolute;
    bottom: 25px;
    right: 25px;
  }
}

@media (max-width: 1279px) {
  .post-default-img {
    display: none;
  }
}
</style>