<template>
  <div class="bg-section-180">
    <v-container class="wrapper-produk">
      <DetailProduk :produk="produk" />
    </v-container>
  </div>
  <Footer class="section" />
</template>

<script setup>
const { id } = useRoute().params
const uri = "https://api.imavi.org/pse/shops/products/view/" + id

const { data: produk } = await useFetch(uri,
  {
    headers: {
      id: "63be7a23ee53c61a24efc736",
      Secret: "deb5568f-bb12-4d69-8a44-a8cad4be41c3",
      Partner: "smtb",
    },
  }
);
</script>
