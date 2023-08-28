<template>
  <div>
    <div class="bg-section-180">

      <div class="wrapper-detail-post">
        <div class="text-center mb-5">
          <h1 class="headline">Profil Paroki</h1>
        </div>

        <div style="font-size: larger;" v-html="paroki.description"></div>

        <div style="margin: 100px 0px;">
          <h1 class="headline">Pastor</h1>

          <v-row class="d-flex justify-center">
            <v-col cols="5" md="5" v-for="pastor in paroki.pastors">
              <v-img style="width: 100%;" height="350" cover :src="pastor.profilePicture">
              </v-img>
              <div class="text-center">
                <h4>{{ pastor.pastorName }}</h4>
                <h5 class="text-blue-grey-lighten-1">{{ pastor.jabatan }}</h5>
              </div>
            </v-col>
          </v-row>
        </div>

      </div>
    </div>
    <Footer class="section" :paroki="paroki" />
  </div>
</template>


<script setup>

// info paroki
const { data: paroki } = await useFetch(
  "https://api.imavi.org/imavi/parokis/view/032.045",
  {
    headers: {
      id: "6147f10d33abc530a445fe84",
      Secret: "88022467-0b5c-4e61-8933-000cd884aaa8",
      Partner: "imavi",
    },
  }
);

</script>