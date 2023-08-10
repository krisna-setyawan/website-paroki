<template>
  <v-card :loading="loading" class="mx-auto" max-width="100%">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img class="my-5 mx-5" height="200" :src="produk.image" :lazy-src="produk.image">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-item>
      <v-card-title>{{ produk.title }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating :model-value="produk.rating.rate" color="amber" density="compact" half-increments readonly
          size="small"></v-rating>

        <div class="text-grey ms-4">
          {{ produk.rating.rate }} ({{ produk.rating.count }})
        </div>
      </v-row>

      <div class="mt-4 mb-1">
        <div>{{ produk.category }}</div>
        <div>$ {{ produk.price }}</div>
      </div>
    </v-card-text>

    <v-card-actions class="d-flex fill-height justify-end align-self-end mb-4">
      <v-btn density="comfortable" prepend-icon="mdi-eye-outline" color="brown" variant="outlined">
        <NuxtLink :to="`/produk-umkm/${produk.id}`" style="color: inherit; text-decoration: none;">
          Detail
        </NuxtLink>
      </v-btn>
      <v-btn density="comfortable" prepend-icon="mdi-shopping-outline" color="brown" variant="outlined">
        Beli
      </v-btn>
      <v-btn density="comfortable" prepend-icon="mdi-whatsapp" color="brown" variant="outlined"
        @click="bagikanWhatsApp(produk.id)">
        Bagikan
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script setup>
const { produk } = defineProps(["produk"]);

const bagikanWhatsApp = (id) => {
  const currentPageURL = window.location.href + '/' + + id;
  const pesanTambahan = 'Hallo guys, ada produk yang menarik nih. coba cek ';
  const fullMessage = `${pesanTambahan} ${currentPageURL}`;
  const encodedURL = encodeURIComponent(fullMessage);
  const whatsappURL = `https://api.whatsapp.com/send?text=${encodedURL}`;
  window.open(whatsappURL, '_blank');
};
</script>