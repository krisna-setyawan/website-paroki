<template>
  <div class="bg-section-180">
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <h1 class="headline">{{ slug }}</h1>
        asd
      </div>
      <!-- <div class="section-sejarah" v-html="sejarah.content"></div> -->
    </v-container>
  </div>
</template>

<script setup>
const { slug } = useRoute().params
// console.log(slug)
</script>
