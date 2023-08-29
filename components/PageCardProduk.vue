<template>
  <v-card :loading="loading" class="mx-auto" max-width="100%">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img class="my-5 mx-5" height="200"
      :lazy-src="produk.images ? produk.images : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
      :src="produk.images ? produk.images : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-item>
      <v-card-title>{{ produk.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <div class="d-flex justify-space-between">
        <v-sheet>
          <table style="width: 100%;">
            <tr>
              <td class="td-judul">Kategori</td>
              <td class="td-titik2">:</td>
              <td class="td-nilai">{{ produk.categoryName }}</td>
            </tr>
            <tr>
              <td colspan="3" class="td-nilai"> <b> {{ formatRupiah(parseInt(produk.price)) }} </b> </td>
            </tr>
          </table>
        </v-sheet>

        <v-sheet>
          <NuxtLink :to="`/produk-umkm/${produk._id}`" style="color: inherit; text-decoration: none;">
            <v-btn icon="mdi-eye-outline" color="brown" variant="text"></v-btn>
          </NuxtLink>
        </v-sheet>
      </div>
    </v-card-text>

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

const formatRupiah = (number) => {
  const formatted = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
  });

  const withoutDecimalZeros = formatted.replace(/(\.|,)00$/, '');

  return withoutDecimalZeros;
};
</script>