<template>
  <div class="bg-section-360">
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <h1 class="headline">Galeri</h1>
      </div>
      <v-row class="px-5 d-flex justify-center section-sejarah">
        <v-col v-for="n in galeri.photos" :key="n" class="d-flex child-flex" cols="12" sm="6" md="4">
          <v-card width="100%">
            <v-img :src="n.url" :lazy-src="n.url" aspect-ratio="1" cover class="bg-grey-lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-title class="text-h6">
              {{ n.title }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const { galeri } = defineProps(["galeri"]);
</script>
