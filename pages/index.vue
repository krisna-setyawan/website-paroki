<template>
  <div>
    <HeroSection />
    <SejarahSection class="section" />
    <BeritaSection class="section" />
    <ArtikelSection class="section" />
    <Footer class="section" />
  </div>
</template>

<style>
.section {
  margin: 0px 0px;
  padding: 00px 0px;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid black;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
}

.logo-image {
  max-width: 100%;
  display: block;
}

.header-brand {
  color: #dc7633;
  font-size: 2rem;
  font-weight: bold;
}

.nav-menu {
  font-weight: bold;
  color: #2e4053;
}

.nav-menu:hover {
  color: #dc7633;
}

.welcome-text {
  color: #2e4053;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

/* headline */
.headline {
  font-family: sans-serif;
  margin: 30px auto;
  color: #566573;
  text-align: center;
  font-size: 30px;
  max-width: 400px;
  position: relative;
}

.headline:before {
  content: "";
  display: block;
  width: 80px;
  height: 5px;
  background: #2e4053;
  left: 0;
  top: 50%;
  position: absolute;
}

.headline:after {
  content: "";
  display: block;
  width: 80px;
  height: 5px;
  background: #2e4053;
  right: 0;
  top: 50%;
  position: absolute;
}

/* responsive */
@media only screen and (max-width: 599px) {
  .card-jadwal span {
    font-size: 120%;
  }

  .bg-section {
    font-size: 98%;
  }

  .row-berita-artikel {
    padding: 0 6%;
  }
}

@media only screen and (min-width: 927px) {
  .row-berita-artikel {
    padding: 0 10%;
  }
}

.bg-section-180 {
  background: rgb(2, 0, 36);
  background: linear-gradient(180deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 231, 198, 1) 0%,
      rgba(255, 216, 165, 1) 0%,
      rgba(255, 255, 255, 1) 100%);
  padding: 10px 0px;
}

.bg-section-360 {
  background: rgb(2, 0, 36);
  background: linear-gradient(360deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(255, 231, 198, 1) 0%,
      rgba(255, 216, 165, 1) 0%,
      rgba(255, 255, 255, 1) 100%);
  padding: 10px 0px;
}

.bg-title {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  border-radius: 10px;
  padding: 0px 30px;
  margin: 0% 10%;
}

.part-title {
  color: #566573;
  font-size: 1.8rem;
}

.transparent-card {
  background-color: rgba(255, 255, 255, 0);
}

.section-title {
  color: #808b96;
  font-size: 2rem;
}

.text-desc {
  color: #283747;
  text-align: justify;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.judul-content {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.isi-content {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
