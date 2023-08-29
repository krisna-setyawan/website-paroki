<template>
  <v-app>
    <Header :paroki="paroki" />
    <v-main>
      <NuxtLoadingIndicator color="linear-gradient(90deg, rgba(222,111,25,1) 0%, rgba(224,230,0,1) 100%)" :height="6"
        :duration="5000" />
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
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
