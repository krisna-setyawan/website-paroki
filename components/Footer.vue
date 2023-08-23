<template>
  <v-footer absolute="true" app="true" class="bg-orange-darken-1 text-center">
    <div class="d-flex flex-column" style="padding: 30px 0px;">
      <div>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="text"></v-btn>
      </div>

      <div class="pt-4">
        <v-row class="px-5 d-flex justify-center">
          <v-col cols="12" md="4" class="text-left">
            <h2>Paroki Fransiskus Asisi Resapombo</h2>
            <p class="mb-0">Alamat : Jln. S. Supriadi No. 25 Ds. Resapombo</p>
            <p class="mb-0">Kecamatan Doko, Kabupaten Blitar</p>
            <p class="mb-0">Jawa Timur 66186</p>
            <p class="mb-0">Telp : (0342) 6333504</p>
            <p class="mb-0">Whatsapp : (0342) 6333504</p>
          </v-col>
          <v-col cols="12" md="4" class="text-left" style="padding: 50px 0px;">
            {{ randomQuote }}
          </v-col>
        </v-row>
      </div>

      <v-divider class="my-5"></v-divider>

      <div>
        {{ new Date().getFullYear() }} —
        <strong>Gereja Katolik Keuskupan Surabaya</strong>
      </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-youtube", "mdi-instagram"],
    quotes: [
      '"Buah keheningan adalah doa. Buah doa adalah iman. Buah iman adalah cinta. Buah cinta adalah pelayanan. Buah pelayanan adalah damai." - Santa Teresa',
      '"Roh kudus berarti kuasa Yesus yang tak terlihat, kudus karena Ia adalah kudus. Kekuatan Yesus ini menggerakkan pikiran orang-orang jujur, yang mengasihi dan yang berbakti kepada kebenaran, mengarahkan mereka dalam penulisan Alkitab.” - Joseph Franklin Rutherford',
      '"Hendaknya pedang Roh, yaitu firman Allah, diam berlimpah-limpah dalam mulut dan hatimu, dan segala sesuatu yang harus kamu lakukan, lakukanlah itu dalam Sabda Tuhan."',
      '"Dirimu sungguh berharga karena tidak pernah ada orang yang sama seperti dirimu, baik di masa lalu, masa sekarang, dan masa depan." - Suster M. Fransita, FCh',
      ' "Oleh karena engkau berharga di mata-Ku dan mulia, dan Aku ini mengasihi engkau, maka Aku memberikan manusia sebagai gantimu, dan bangsa-bangsa sebagai ganti nyawamu." - Yesaya 43:4',
      '"Jadilah dirimu sendiri karena engkau berharga, tidak pernah ada orang yang sama seperti dirimu dan engkau selalu dikasihi-Nya dengan cinta yang sama!” - Sr. M Fransita, FCh',
      '"Semangat Kerendahan Hati lebih manis daripada madu, dan mereka yang menyuburkan dirinya dengan madu akan menghasilkan buah yang manis.” - St. Antonius dari Padua',
      '"Dia tetap bersama kita hingga akhir dunia. Dia begitu banyak berdiam di Altar, meskipun begitu sering dihina dan dicela." - Maximilianus Kolbe ',
      '"Jangan pernah takut untuk selalu mencintai, meskipun engkau terluka dengan beberapa orang dalam hidupmu karena setiap orang berbeda, dan selalu ada orang yang sungguh mencintai dan mengasihimu.” - Sr. M. Fransita, Fch',
      '"Cintai Bunda kita. Dan Ia akan memperoleh rahmat yang berlimbah-limpah untuk membantumu untuk mengalahkan pergumulanmu sehari-hari.” - St. Josemaria Escriva',
      '"Janganlah engkau gelisah karena timbulnya gagasan-gagasan yang bukan-bukan mengenai apa yang ada di dalam hatimu. Teguhkanlah pada apa yang kamu putuskan sendiri dan arahkan selalu perhatianmu kepada Tuhan." - Thomas A Kempis',
      '"Ketika kamu melihat salib, kamu memahami betapa Yesus mencintaimu. Ketika kamu memandang Hosti Suci, kamu memahami betapa Yesus mencintaimu sekarang.” – St. Teresa',
      '"Jangan takut untuk menjadi kudus! Milikilah keberanian dan kerendahan hati untuk menunjukkan kepada dunia tekad untuk menjadi kudus, karena kebebasan sejati yang penuh lahir dari kekudusan." - Paus Yohanes Paulus II',
      '"Di dalam dunia yang penuh dengan kebisingan, dan penuh dengan kekacauan, ada suatu kebutuhan untuk menyembah dalam keheningan kepada Yesus yang tersembunyi dalam Hosti. Bertekunlah dalam doa adorasi dan ajarkanlah ini kepada umat beriman. Hal ini adalah suatu sumber penghiburan dan terang, terutama bagi mereka yang menderita.” - Paus Benediktus XVI'
    ],
  }),

  computed: {
    randomQuote() {
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      return this.quotes[randomIndex];
    },
  },
};
</script>
