<template>
  <div class="wrapper-detail-post">
    <PageDetailPost :post="berita" />
  </div>
  <Footer class="section" :paroki="paroki" />
</template>

<script setup>
const { slug } = useRoute().params
const uri = "https://api.imavi.org/imavi/news/view/" + slug

const { data: berita } = await useFetch(uri,
  {
    headers: {
      id: "618db358b9d7140e7025b86b",
      Secret: "38c8c32d-2774-4d3f-a016-c77f742f2d05",
      Partner: "parokiAll,general,smtb,smtbk3",
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
