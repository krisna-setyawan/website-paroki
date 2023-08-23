<template>
  <PageListPost :posts="news" jenisPost="Berita" />
  <Footer class="section" />
</template>

<script setup>
const { data: news } = await useFetch(
  "https://api.imavi.org/imavi/news/get-all",
  {
    headers: {
      id: "618db358b9d7140e7025b86b",
      Secret: "38c8c32d-2774-4d3f-a016-c77f742f2d05",
      Partner: "parokiAll,general,smtb,smtbk3",
    },
  }
);
</script>