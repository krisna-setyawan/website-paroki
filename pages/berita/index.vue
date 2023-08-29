<template>
  <div style="position: relative;">

    <div style="position: absolute; right: 50px; top: 40px; width: 200px;">
      <v-select v-model="selectedItem" :items="['Semua Paroki', `Paroki ${paroki.churchName}`]" density="compact"
        variant="solo-filled"></v-select>
    </div>

    <PageListPost :posts="news" jenisPost="Berita" :paroki="paroki" />

  </div>

  <Footer class="section" :paroki="paroki" />
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

const selectedItem = ref('Semua Paroki');

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