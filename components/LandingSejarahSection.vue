<template>
  <div>
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <h1 class="headline">Sejarah</h1>
      </div>
      <v-row class="d-flex justify-center">
        <v-col cols="11" sm="9" md="6" lg="6" xl="4">
          <v-img height="90%" cover style="border-radius: 6px" :src="paroki.images[0]"></v-img>
        </v-col>
        <v-col cols="11" sm="10" md="6" lg="6" xl="4">
          <p class="text-desc fs-xs-5 fs-sm-4 fs-md-3">
          <div v-html="extractFirst100Characters(paroki.description)"></div>
          <NuxtLink to="/sejarah" class="text-decoration-none nav-menu">
            <b> Baca selengkapnya ... </b>
          </NuxtLink>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { paroki } = defineProps(["paroki"]);

const extractFirst100Characters = (htmlContent) => {
  const div = document.createElement('div');
  div.innerHTML = htmlContent;

  const text = div.textContent || div.innerText || '';
  const first100Characters = text.substr(0, 1200); // Mengambil 100 karakter pertama

  return first100Characters;
};

</script>
