<template>
  <div class="bg-section-180">
    <v-container class="wrapper-produk">
      <ContentDetailProduk :produk="produk" />
    </v-container>
  </div>
  <Footer class="section" />
</template>

<script setup>
const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

const { data: produk } = await useFetch(uri);
</script>
