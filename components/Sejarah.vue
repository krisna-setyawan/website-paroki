<template>
  <div class="bg-section-180">
    <div class="text-center mb-5">
      <h1 class="headline">Sejarah</h1>
    </div>
    <div class="section-sejarah" v-html="sejarah.content"></div>
  </div>
</template>

<script setup>
const { sejarah } = defineProps(["sejarah"]);
</script>
