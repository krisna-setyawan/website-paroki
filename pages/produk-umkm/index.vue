<template>
  <div>
    <div class="bg-section-180">

      <div class="text-center mb-5">
        <h1 class="headline">Produk UMKM</h1>
      </div>

      <div class="wrapper-produk">

        <v-row class="d-flex justify-center">
          <v-col v-for="prd in produk.slice(1, displayedProduk)" :key="prd.id" cols="12" sm="6" md="4">

            <PageCardProduk :produk="prd" />

          </v-col>
        </v-row>

      </div>

      <div class="d-flex justify-center my-5">
        <v-btn variant="outlined" rounded="xl" size="x-large" @click="loadMore">Load more ..</v-btn>
      </div>

    </div>
    <Footer class="section" />
  </div>
</template>

<script setup>
const displayedProduk = ref(7); // load pertama 6

const loadMore = () => {
  displayedProduk.value += 6; // lalu tambah 6
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
</script>