<template>
  <v-card class="mx-auto" min-height="350">
    <v-img class="align-end text-white" height="200" :src="berita.imageLink
      ? berita.imageLink
      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysFdX_G4jpBhsF48Jpdoil4Y7A3yNV4T6SzzXmGPySk-N9hISAB9mPcqXdTc1mMRTJEs&usqp=CAU'
      " cover>
    </v-img>

    <v-card-text>
      <b>{{ berita.title }}</b>
      <br />
      <small>{{ formatDate(berita.publishDate) }}</small>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange">
        <NuxtLink :to="`/berita/${berita.slug}`" class="text-decoration-none text-orange-darken-3">
          Baca berita
        </NuxtLink>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const { berita } = defineProps(["berita"]);

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const locale = "id-ID";
  return new Date(dateString).toLocaleDateString(locale, options);
};
</script>
