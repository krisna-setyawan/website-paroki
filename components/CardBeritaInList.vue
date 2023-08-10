<template>
  <v-card class="mx-5" style="padding: 20px 0px; margin-bottom: 40px; " elevation="3">
    <v-row class="d-flex justify-center">
      <v-col cols="10" sm="5" md="5" xl="5">
        <v-img class="align-end text-white rounded bg-grey-lighten-2" height="300"
          :lazy-src="berita.imageLink ? berita.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          :src="berita.imageLink ? berita.imageLink : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          cover>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>

      <v-col cols="10" sm="6" md="6" xl="6">
        <h4>{{ berita.title }}</h4>
        <div>{{ extractFirstSentence(berita.content) }}</div>
        <br>
        <p class="mb-1">Author : {{ berita.author }}</p>
        <p class="mb-1">Sumber : {{ berita.originalUrl }}</p>
        <p class="mb-1">Published : {{ formatDate(berita.publishDate) }}</p>
        <v-btn color="orange-lighten-3" class="mt-4">
          <NuxtLink :to="`/berita/${berita.slug}`" class="text-decoration-none text-orange-darken-3">
            Baca berita
          </NuxtLink>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const { berita } = defineProps(["berita"]);

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
