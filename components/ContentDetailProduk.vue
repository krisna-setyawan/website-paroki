<template>
  <v-row class="d-flex justify-center">

    <v-col cols="12" sm="3">
      <div class="bg-white py-4" style="border-radius: 10px;">
        <v-img class="my-5 mx-5" height="600" :src="produk.image" :lazy-src="produk.image">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-col>

    <v-col cols="12" sm="5">
      <h1 class="text-brown-darken-4 mb-5">{{ produk.title }}</h1>
      <p class="mb-1"> <b>Deskripsi : </b></p>
      <p>{{ produk.description }}</p>
      <p class="mb-1"> <b>Kategori : </b></p>
      <p>{{ produk.category }}</p>
      <p class="mb-1"> <b>Harga : </b></p>
      <p>${{ produk.price }}</p>
      <br>

      <v-btn prepend-icon="mdi-shopping-outline" color="brown" variant="outlined" class="mx-2">
        Beli
      </v-btn>
      <v-btn prepend-icon="mdi-whatsapp" color="brown" variant="outlined" class="mx-2"
        @click="bagikanWhatsApp(produk.id)">
        Bagikan
      </v-btn>
    </v-col>

  </v-row>
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
}
</script>