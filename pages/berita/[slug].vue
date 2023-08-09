<template>
  <div class="bg-section-180">
    <v-container min-height="500" max-width="50%">
      <ContentDetailBerita :berita="berita" />
    </v-container>
  </div>
  <Footer class="section" />
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
</script>
