<template>
  <div>
    <Sejarah :sejarah="sejarah" />
    <Galeri :galeri="galeri" />
    <Footer class="section" />
  </div>
</template>

<script setup>
const { data: sejarah } = await useFetch(
  "https://api.imavi.org/imavi/pages/view/tentang-imavi",
  {
    headers: {
      id: "6147f10d33abc530a445fe84",
      Secret: "88022467-0b5c-4e61-8933-000cd884aaa8",
      Partner: "imavi",
    },
  }
);

const { data: galeri } = await useFetch('https://api.slingacademy.com/v1/sample-data/photos');
</script>

