<template>
  <v-card class="mx-auto" style="padding: 30px 0px; margin-bottom: 20px; background-color: rgba(255, 255, 255, 0);"
    elevation="0">
    <v-row class="d-flex justify-center">
      <v-col cols="10" sm="6" md="5" xl="4">
        <v-img class="align-end text-white rounded bg-grey-lighten-2" height="200" :src="berita.imageLink
          ? berita.imageLink
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'
          " cover>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="10" sm="6" md="6" xl="5">
        <h3>{{ berita.title }}</h3>
        <div>{{ extractFirstSentence(berita.content) }}</div>
        <h5>Author :{{ berita.author }}</h5>
        <small>{{ formatDate(berita.publishDate) }}</small>
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
