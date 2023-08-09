<template>
  <v-footer class="bg-orange-darken-1 text-center d-flex flex-column" style="padding: 30px 0px;">
    <div>
      <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
    </div>

    <div class="pt-4">
      <v-row class="px-5 d-flex justify-center">
        <v-col cols="12" md="4" class="text-left">
          <h2>Paroki Fransiskus Asis Resapombo</h2>
          <p class="mb-0">Alamat : Jln. S. Supriadi No. 25 Ds. Resapombo</p>
          <p class="mb-0">Kecamatan Doko, Kabupaten Blitar</p>
          <p class="mb-0">Jawa Timur 66186</p>
          <p class="mb-0">Telp : (0342) 6333504</p>
          <p class="mb-0">Whatsapp : (0342) 6333504</p>
        </v-col>
        <v-col cols="12" md="4" class="text-left" style="padding: 50px 0px;">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, accusantium minima expedita esse laboriosam et eius
          eligendi ut veritatis suscipit. Atque saepe perferendis ipsa provident
          magnam, laboriosam tenetur vel mollitia.
        </v-col>
      </v-row>
    </div>

    <v-divider class="my-5"></v-divider>

    <div>
      {{ new Date().getFullYear() }} —
      <strong>Gereja Katolik Keuskupan Surabaya</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-youtube", "mdi-instagram"],
  }),
};
</script>
