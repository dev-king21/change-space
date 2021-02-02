<template>
  <div class="testimonial-wrap">
    <div class="carousel" v-if="loaded">
      <slick ref="slick" :options="slickOptions">
        <div v-for="(item, index) in testiContent" :key="index" class="item">
          <testi-card
            :text="item.text"
            :avatar="item.avatar"
            :name="item.name"
            :rating="item.rating"
          />
        </div>
      </slick>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './testimonials-style';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import TestiCard from '../Cards/TestiCard'

export default {
  components: {
    Slick: () => import('vue-slick'),
    TestiCard,
  },
  data() {
    return {
      loaded: false,
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'Alex Tebalek - CTO La Lieur',
          rating: 1,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe - VP Company',
          rating: 2,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[2],
          name: 'Jena Doe - Graphic Designer',
          rating: 3,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[3],
          name: 'Jovelin - Senior Graphic Designer',
          rating: 3,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[4],
          name: 'Jihan Doe - CEO Software House',
          rating: 3,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[6],
          name: 'Jovelin - Senior Graphic Designer',
          rating: 2,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[7],
          name: 'Jovelin - Senior Graphic Designer',
          rating: 5,
        },
      ],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
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
