<template>
  <div class="wrapper-detail-post">
    <PageDetailProduk :produk="produk" />
  </div>
  <Footer class="section" :paroki="paroki" />
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
