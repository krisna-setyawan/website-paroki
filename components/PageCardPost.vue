<template>
  <v-card class="mx-5 card-post-in-list" style="padding: 20px 0px; margin-bottom: 40px; " elevation="3">
    <v-row class="d-flex justify-center">
      <v-col cols="10" lg="5">
        <v-img class="align-end text-white rounded bg-grey-lighten-2 text-center"
          :lazy-src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          :src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          height="300" cover>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
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
        <p style="font-size: 13px;" class="mb-1">Author : {{ post.author }}</p>
        <p style="font-size: 13px;" class="mb-1">Sumber : {{ post.originalUrl }}</p>
        <p style="font-size: 13px;" class="mb-1">Published : {{ formatDate(post.publishDate) }}</p>
        <br>

        <ButtonReadPost class="btn-baca-post-in-list" :jenisPost="jenisPost" :post="post" />

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
  }
}
</style>



<!-- Sorry Backup -->
<!-- <v-card class="mx-auto mb-5" max-width="98%">
    <v-img
      :lazy-src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
      :src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
      height="270px" cover>
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

    <div class="mx-5">
      <small>Author : {{ post.author }}</small>
      <br>
      <small>Sumber : {{ post.originalUrl }}</small>
      <br>

      <div class="card-content-title" v-if="post.excerpt">
        {{ post.excerpt ? post.excerpt : '-' }}
      </div>
      <div class="card-content-title" v-else>
        {{ extractFirstSentence(post.content) ? extractFirstSentence(post.content) : '-' }}
      </div>
    </div>

    <div style="position: relative; height: 80px;">
      <ButtonReadPost :jenisPost="jenisPost" :post="post" style="position: absolute ; bottom: 0px;" />
      <small style="position: absolute ; bottom: 25px; right: 25px; color: grey;">Published : {{
        formatDate(post.publishDate) }}
      </small>
    </div>

  </v-card> -->