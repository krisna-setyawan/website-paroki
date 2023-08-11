<template>
  <v-app>
    <Header />
    <v-main>
      <NuxtLoadingIndicator color="linear-gradient(90deg, rgba(222,111,25,1) 0%, rgba(224,230,0,1) 100%)" :height="6"
        :duration="5000" />
      <NuxtPage />
    </v-main>
  </v-app>
</template>
