<template>
  <div class="page-section" v-if="loaded">
    <h2 class="display-2 text-center mb-6">
      Lorem Ipsum Lorem Ipsum <br />
      Lorem Ipsum Lorem Ipsum
    </h2>
    <slick ref="slick" :options="slickOptions">
      <div class="feature-list">
        <v-icon color="primary" class="icon">mdi-anchor</v-icon>
        <h5 class="headline">Lorem ipsum dolor</h5>
        <p class="body-1">
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </p>
      </div>
      <div class="feature-list">
        <v-icon color="primary" class="icon">mdi-tennis</v-icon>
        <h5 class="headline">Lorem ipsum dolor</h5>
        <p class="body-1">
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </p>
      </div>
      <div class="feature-list">
        <v-icon color="primary" class="icon">mdi-google-controller</v-icon>
        <h5 class="headline">Lorem ipsum dolor</h5>
        <p class="body-1">
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </p>
      </div>
      <div class="feature-list">
        <v-icon color="primary" class="icon">mdi-anchor</v-icon>
        <h5 class="headline">Lorem ipsum dolor</h5>
        <p class="body-1">
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </p>
      </div>
      <div class="feature-list">
        <v-icon color="primary" class="icon">mdi-tennis</v-icon>
        <h5 class="headline">Lorem ipsum dolor</h5>
        <p class="body-1">
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </p>
      </div>
      <div class="feature-list">
        <v-icon color="primary" class="icon">mdi-google-controller</v-icon>
        <h5 class="headline">Lorem ipsum dolor</h5>
        <p class="body-1">
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus.
        </p>
      </div>
    </slick>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>
<script>
export default {
  components: {
    Slick: () => import('vue-slick'),
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
  },
}
</script>
