<template>
  <div>
    <v-toolbar
      flat
      style="padding: 0px 100px"
      color="white"
      dark
      elevation="6"
      elevate-on-scroll
    >
      <v-toolbar-tittle>
        <NuxtLink to="/" class="text-decoration-none header-brand">
          <div class="logo-container">
            <img src="../public/logo.jpg" alt="Logo" class="logo-image" />
          </div>
        </NuxtLink>
      </v-toolbar-tittle>

      <v-spacer />

      <v-toolbar-items class="hidden-xs-only">
        <v-list class="d-flex">
          <v-list-item>
            <NuxtLink to="/profil" class="text-decoration-none">
              <v-list-item-tittle
                class="mx-5 nav-menu"
                style="font-size: 1.1rem"
                >Profil</v-list-item-tittle
              >
            </NuxtLink>

            <NuxtLink to="/sejarah" class="text-decoration-none">
              <v-list-item-tittle
                class="mx-5 nav-menu"
                style="font-size: 1.1rem"
                >Sejarah</v-list-item-tittle
              >
            </NuxtLink>

            <NuxtLink to="/berita" class="text-decoration-none">
              <v-list-item-tittle
                class="mx-5 nav-menu"
                style="font-size: 1.1rem"
                >Berita</v-list-item-tittle
              >
            </NuxtLink>

            <NuxtLink to="/artikel" class="text-decoration-none">
              <v-list-item-tittle
                class="mx-5 nav-menu"
                style="font-size: 1.1rem"
                >Artikel</v-list-item-tittle
              >
            </NuxtLink>

            <NuxtLink to="/produk-umkm" class="text-decoration-none">
              <v-list-item-tittle
                class="mx-5 nav-menu"
                style="font-size: 1.1rem"
                >Produk UMKM</v-list-item-tittle
              >
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style></style>
