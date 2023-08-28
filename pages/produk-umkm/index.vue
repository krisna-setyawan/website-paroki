<template>
  <div class="wrapper-list-produk">

    <div class="text-center mb-5">
      <h1 class="headline">Produk UMKM</h1>
    </div>

    <div class="container-fluid">

      <v-row class="d-flex justify-center">
        <v-col v-for="prd in produk.slice(0, displayedProduk)" :key="prd.id" cols="12" sm="6" lg="4" xl="2">

          <PageCardProduk :produk="prd" />

        </v-col>
      </v-row>

    </div>

    <div class="d-flex justify-center my-5">
      <v-btn variant="outlined" rounded="xl" size="x-large" @click="loadMore">muat lebih ..</v-btn>
    </div>

  </div>
  <Footer class="section" :paroki="paroki" />
</template>

<script setup>
const displayedProduk = ref(12); // load pertama 6

const loadMore = () => {
  displayedProduk.value += 12; // lalu tambah 6
};

// const { data: produk } = await useFetch("https://fakestoreapi.com/products");

const { data: produk } = await useFetch(
  "https://api.imavi.org/pse/shops/products/get-all",
  {
    headers: {
      id: "63be7a23ee53c61a24efc736",
      Secret: "deb5568f-bb12-4d69-8a44-a8cad4be41c3",
      Partner: "smtb",
    },
  }
);

// info paroki
const { data: paroki } = await useFetch(
  "https://api.imavi.org/imavi/parokis/view/032.045",
  {
    headers: {
      id: "6147f10d33abc530a445fe84",
      Secret: "88022467-0b5c-4e61-8933-000cd884aaa8",
      Partner: "imavi",
    },
  }
);
</script>