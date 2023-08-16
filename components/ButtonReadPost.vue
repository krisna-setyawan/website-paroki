<template>
  <v-btn color="orange-lighten-3" class="m-3">
    <NuxtLink :to="`/${jenisPost}/${post.slug}`" class="text-decoration-none text-orange-darken-3">
      Baca {{ jenisPost }}
    </NuxtLink>
  </v-btn>
</template>

<script setup>
const props = defineProps({
  post: Array,
  jenisPost: String,
});
</script>