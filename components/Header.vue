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
          Paroki
        </NuxtLink>
      </v-toolbar-tittle>

      <v-spacer />

      <v-toolbar-items class="hidden-xs-only">
        <v-list class="d-flex">
          <v-list-item>
            <NuxtLink to="/profil" class="text-decoration-none link-menu">
              <v-list-item-tittle class="mx-5">Profil</v-list-item-tittle>
            </NuxtLink>

            <NuxtLink to="/sejarah" class="text-decoration-none link-menu">
              <v-list-item-tittle class="mx-5">Sejarah</v-list-item-tittle>
            </NuxtLink>

            <NuxtLink to="/berita" class="text-decoration-none link-menu">
              <v-list-item-tittle class="mx-5">Berita</v-list-item-tittle>
            </NuxtLink>

            <NuxtLink to="/artikel" class="text-decoration-none link-menu">
              <v-list-item-tittle class="mx-5">Artikel</v-list-item-tittle>
            </NuxtLink>

            <NuxtLink to="/produk-umkm" class="text-decoration-none link-menu">
              <v-list-item-tittle class="mx-5">Produk UMKM</v-list-item-tittle>
            </NuxtLink>
          </v-list-item>
        </v-list>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<style>
.link-menu {
  color: rgb(10, 10, 10);
}

.link-menu:hover {
  color: #dc7633;
}

.header-brand {
  color: #dc7633;
  font-size: 2rem;
  font-weight: bold;
}
</style>
