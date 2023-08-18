<template>
  <div class="bg-section-360">
    <v-container min-height="500" max-width="50%">
      <div class="text-center mb-5">
        <h1 class="headline">Sejarah</h1>
      </div>
      <v-row class="d-flex justify-center">
        <v-col cols="11" sm="9" md="6" lg="6" xl="4">
          <v-img cover style="border-radius: 6px"
            src="https://2.bp.blogspot.com/-mFtmNSIDHDM/VbxoGWkk94I/AAAAAAAAE0A/wzgve8To-P8/s1600/IMG_9155.JPG"></v-img>
        </v-col>
        <v-col cols="11" sm="10" md="6" lg="6" xl="4">
          <p class="text-desc fs-xs-5 fs-sm-4 fs-md-3">{{ sejarah1 }}</p>
          <br />
          <p class="text-desc fs-xs-5 fs-sm-4 fs-md-3">
            {{ sejarah2 }}
            <NuxtLink to="/sejarah" class="text-decoration-none nav-menu">
              <b> Baca selengkapnya ... </b>
            </NuxtLink>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sejarah1:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempora rem sit earum nesciunt nulla nisi consequuntur cupiditate amet assumenda eligendi, harum voluptatibus reiciendis sapiente libero pariatur soluta velit in distinctio laudantium. Quos sapiente obcaecati, iste consequatur nam voluptate beatae voluptas sit perspiciatis quia dolorum eaque, ullam possimus corrupti sunt suscipit? Quis facere quod corporis tempore praesentium illum inventore architecto commodi? Ullam reiciendis beatae obcaecati error vero soluta nulla unde ipsa dolor neque tempore dolorem nemo amet ducimus accusamus at consequatur sunt, itaque numquam, repudiandae dignissimos. Veritatis perferendis praesentium dolore non dolor quod quaerat reprehenderit voluptatem enim. Amet, aperiam labore!",
      sejarah2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima consectetur labore provident, molestias impedit voluptate quidem facere accusantium ratione totam ducimus iste officia animi! Dignissimos velit similique voluptate expedita.",
    };
  },
};
</script>
