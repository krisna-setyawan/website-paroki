<template>
  <nav class="navbar navbar-expand-lg sticky-top py-3 shadow-lg"
    style="background-color: #F8F9F9; border-bottom: 5px solid rgba(247, 80, 2, 0.5);;">
    <div class="container">
      <NuxtLink to="/" class="text-decoration-none header-brand">
        <div class="logo-container">
          <img src="../public/logo.jpg" alt="Logo" class="logo-image" />
        </div>
      </NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <span class="navbar-text me-auto"> </span>
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link to="/" class="nav-link text-orange-darken-1 fs-5 ms-5">
              Beranda
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/tentang" class="nav-link text-orange-darken-1 fs-5 ms-5">
              Tentang
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/sejarah" class="nav-link text-orange-darken-1 fs-5 ms-5">
              Sejarah
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/berita" class="nav-link text-orange-darken-1 fs-5 ms-5">
              Berita
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/artikel" class="nav-link text-orange-darken-1 fs-5 ms-5">
              Artikel
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/produk-umkm" class="nav-link text-orange-darken-1 fs-5 ms-5">
              Produk UMKM
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    const navLinks = document.querySelectorAll(".navbar-nav li");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }
}
</script>

<style>
.nav-link:hover {
  display: inline-block;
  border-bottom: 2px solid #FB8C00;
  padding-bottom: 2px;
}
</style>
<!-- 
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
</template> -->
