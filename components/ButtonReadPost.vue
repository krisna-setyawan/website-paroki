<template>
  <NuxtLink :to="`/${jenisPost}/${post.slug}`" class="text-decoration-none text-orange-darken-3">
    <v-btn color="orange-lighten-3" class="">
      Baca {{ jenisPost }}
    </v-btn>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: Array,
  jenisPost: String,
});
</script>