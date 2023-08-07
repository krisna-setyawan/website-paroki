<template>
  <div class="bg-section-180">
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <span class="section-title"> Artikel </span>
      </div>
      <v-row class="d-flex justify-center row-berita-artikel">
        <v-col cols="12" sm="6" md="4" v-for="berita in news" :key="berita.id">
          <v-card class="mx-auto">
            <v-img
              class="align-end text-white"
              height="200"
              :src="berita.src"
              cover
            >
              <!-- <v-card-title>{{ berita.judul }}</v-card-title> -->
            </v-img>

            <v-card-text>
              <b>{{ berita.judul }}</b>
              <div>{{ berita.deskripsi }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange"> Baca selengkapnya </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          judul: "Top western road trips",
          deskripsi:
            "Embark on a scenic journey through the American West, with breathtaking landscapes and historic landmarks. A road trip to remember",
          src: "https://theodorus.org/wp-content/uploads/2022/03/IMG_1472-scaled.jpg",
        },
        {
          id: 2,
          judul: "Christmas tales to read",
          deskripsi:
            "Spread joy and cheer this holiday season with festive decor, warm gatherings, and meaningful gifts. Make memories to cherish forever.",
          src: "https://www.infopublik.id/assets/upload/headline//IMG_20181226_080803.jpg",
        },
        {
          id: 3,
          judul: "20 movies not to miss in 2020",
          deskripsi:
            "Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",
          src: "https://parokilangsep.org/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-25-at-21.34.03-1024x634.jpeg",
        },
        {
          id: 4,
          judul: "Tahbisan Diakonat & Presbiterat Keuskupan Sufragan Bogor",
          deskripsi:
            "Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",
          src: "https://i.ytimg.com/vi/NEMXWtjH22k/maxresdefault.jpg",
        },
        {
          id: 5,
          judul: "Berita Paroki - Paroki St. Vincentius a Paulo",
          deskripsi:
            "Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",
          src: "https://parokilangsep.org/wp-content/uploads/2023/03/WhatsApp-Image-2023-02-25-at-21.34.03-1024x634.jpeg",
        },
      ],
    };
  },
};
</script>

<style>
@media only screen and (min-width: 927px) {
  .row-berita-artikel {
    padding: 0 10%;
  }
}

@media only screen and (min-width: 599px) {
  .row-berita-artikel {
    padding: 0 6%;
  }
}
</style>
