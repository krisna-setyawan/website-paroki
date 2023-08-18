<template>
  <v-card class="mx-5" style="padding: 20px 0px; margin-bottom: 40px; position: relative;" elevation="3">
    <v-row class="d-flex justify-center">
      <v-col cols="10" sm="6" md="5" xl="5">
        <v-img class="align-end text-white rounded bg-grey-lighten-2 text-center"
          :lazy-src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          :src="post.imageLink ? post.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          height="270" cover>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="10" sm="6" md="6" xl="6" style="text-align: left;">
        <h4>{{ post.title }}</h4>

        <!-- <div>{{ }}</div> -->

        <div v-if="post.excerpt">
          {{ post.excerpt ? post.excerpt : '-' }}
        </div>
        <div v-else>
          {{ extractFirstSentence(post.content) }}
        </div>

        <br>
        <p style="font-size: 13px;" class="mb-1">Author : {{ post.author }}</p>
        <p style="font-size: 13px;" class="mb-1">Sumber : {{ post.originalUrl }}</p>


        <ButtonReadPost :jenisPost="jenisPost" :post="post" style="position: absolute ; bottom: 25px;" />
        <small style="position: absolute ; bottom: 35px; right: 30px; color: grey;">Published : {{
          formatDate(post.publishDate) }}
        </small>
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