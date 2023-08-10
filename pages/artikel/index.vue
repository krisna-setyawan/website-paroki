<template>
  <div>
    <div class="bg-section-180">

      <div class="text-center mb-5">
        <h1 class="headline">Artikel</h1>
      </div>

      <div class="wrapper-artikel">
        <div v-for="brt in news.slice(0, displayedNewsCount)" :key="brt.id">

          <CardArtikelInList :artikel="brt" />

        </div>
      </div>
      <div class="d-flex justify-center mb-5">
        <v-btn variant="outlined" rounded="xl" size="x-large" @click="loadMore">Load more ..</v-btn>
      </div>

    </div>
    <Footer class="section" />
  </div>
</template>

<script setup>
const displayedNewsCount = ref(5); // load pertama 5

const loadMore = () => {
  displayedNewsCount.value += 5; // lalu tambah 5
};

const { data: news } = await useFetch(
  "https://api.imavi.org/imavi/articles/get-all",
  {
    headers: {
      id: "618db358b9d7140e7025b86b",
      Secret: "38c8c32d-2774-4d3f-a016-c77f742f2d05",
      Partner: "parokiAll,general,smtb,smtbk3",
    },
  }
);
</script>