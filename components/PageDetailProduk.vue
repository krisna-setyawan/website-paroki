<template>
  <v-row class="d-flex justify-center">

    <v-col cols="12" sm="3">
      <div class="bg-white py-4" style="border-radius: 10px;">
        <v-img class="my-5 mx-5"
          :lazy-src="produk.images ? produk.images : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'"
          :src="produk.images ? produk.images : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
    </v-col>

    <v-col cols="12" sm="5">
      <h1 class="text-brown-darken-4 mb-5">{{ produk.name }}</h1>
      <p class="mb-1"> <b>Deskripsi : </b></p>
      <div v-html="produk.description"></div>

      <table style="width: 100%;">
        <tr>
          <td class="td-judul">Kategori</td>
          <td class="td-titik2">:</td>
          <td class="td-nilai">{{ produk.categoryName }}</td>
        </tr>
        <tr>
          <td class="td-judul;">Harga</td>
          <td class="td-titik2">:</td>
          <td class="td-nilai">{{ formatRupiah(parseInt(produk.price)) }}</td>
        </tr>
        <tr>
          <td class="td-judul;">Produk</td>
          <td class="td-titik2">:</td>
          <td class="td-nilai">{{ produk.weight }} {{ produk.unit }}</td>
        </tr>
        <tr>
          <td class="td-judul;">Paroki</td>
          <td class="td-titik2">:</td>
          <td class="td-nilai">{{ produk.parokiName }}</td>
        </tr>
        <tr>
          <td class="td-judul;">Keuskupan</td>
          <td class="td-titik2">:</td>
          <td class="td-nilai">{{ produk.keuskupanName }}</td>
        </tr>
        <tr>
          <td class="td-judul;">Toko</td>
          <td class="td-titik2">:</td>
          <td class="td-nilai">{{ produk.shopName }}</td>
        </tr>
      </table>
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

const formatRupiah = (number) => {
  const formatted = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
  });

  const withoutDecimalZeros = formatted.replace(/(\.|,)00$/, '');

  return withoutDecimalZeros;
};
</script>