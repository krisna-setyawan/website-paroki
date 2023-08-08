<template>
  <v-card class="mx-auto" min-height="370">
    <v-img
      class="align-end text-white"
      height="200"
      :src="berita.urlToImage"
      cover
    >
    </v-img>

    <v-card-text>
      <b>{{ berita.title ? berita.title.slice(0, 80) : "" }}</b>
      <div>
        {{ berita.description ? berita.description.slice(0, 100) : "" }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Baca selengkapnya </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const { berita } = defineProps(["berita"]);
</script>
