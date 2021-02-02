<template>
  <div class="feature-more">
    <v-container>
      <u-animate-container>
        <scroll-wrap target="feature1">
          <v-row id="feature1">
            <v-col md="8" class="px-6" cols="12">
              <div class="feature-item">
                <u-animate name="fadeInLeft" duration="0.6s">
                  <h4 class="title-app display-2">Lorem ipsum dolor</h4>
                </u-animate>
                <u-animate name="fadeInLeft" delay="0.3s" duration="0.6s">
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </u-animate>
              </div>
            </v-col>
            <v-col md="4" class="px-6" cols="12">
              <div class="feature-item">
                <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                  <div class="deco1" />
                </u-animate>
                <u-animate name="fadeInRight" delay="0.5s" duration="0.6s">
                  <figure class="img">
                    <img :src="imgAPI.photo[5]" alt="img" />
                  </figure>
                </u-animate>
              </div>
            </v-col>
          </v-row>
        </scroll-wrap>
      </u-animate-container>
      <u-animate-container>
        <v-row>
          <v-col v-if="isDesktop" md="4" class="px-6" cols="12">
            <div class="feature-item">
              <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                <div class="deco1" />
              </u-animate>
              <u-animate name="fadeInLeft" delay="0.5s" duration="0.6s">
                <figure class="img">
                  <img :src="imgAPI.photo[0]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
          <v-col md="8" class="px-6" cols="12">
            <div class="feature-item">
              <u-animate name="fadeInLeft" duration="0.6s">
                <h4 class="title-app display-2">Lorem ipsum dolor</h4>
              </u-animate>
              <u-animate name="fadeInRight" delay="0.5s" duration="0.6s">
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </u-animate>
            </div>
          </v-col>
          <v-col v-if="isTablet" md="4" class="px-6" cols="12">
            <div class="feature-item">
              <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                <div class="deco1" />
              </u-animate>
              <u-animate name="fadeInLeft" delay="0.5s" duration="0.6s">
                <figure class="img">
                  <img :src="imgAPI.photo[0]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
      <u-animate-container>
        <scroll-wrap target="feature3">
          <v-row id="feature3">
            <v-col md="8" class="px-6" cols="12">
              <div class="feature-item">
                <u-animate name="fadeInLeft" duration="0.6s">
                  <h4 class="title-app display-2">Lorem ipsum dolor</h4>
                </u-animate>
                <u-animate name="fadeInLeft" delay="0.3s" duration="0.6s">
                  <p class="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </u-animate>
              </div>
            </v-col>
            <v-col md="4" class="px-6" cols="12">
              <div class="feature-item">
                <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                  <div class="deco1" />
                </u-animate>
                <u-animate name="fadeInRight" delay="0.5s" duration="0.6s">
                  <figure class="img">
                    <img :src="imgAPI.photo[5]" alt="img" />
                  </figure>
                </u-animate>
              </div>
            </v-col>
          </v-row>
        </scroll-wrap>
      </u-animate-container>
      <u-animate-container>
        <v-row>
          <v-col md="4" v-if="isDesktop" class="px-6" cols="12">
            <div class="feature-item">
              <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                <div class="deco1" />
              </u-animate>
              <u-animate name="fadeInLeft" delay="0.5s" duration="0.6s">
                <figure class="img">
                  <img :src="imgAPI.photo[0]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
          <v-col md="8" class="px-6" cols="12">
            <div class="feature-item">
              <u-animate name="fadeInLeft" duration="0.6s">
                <h4 class="title-app display-2">Lorem ipsum dolor</h4>
              </u-animate>
              <u-animate name="fadeInRight" delay="0.5s" duration="0.6s">
                <p class="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </u-animate>
            </div>
          </v-col>
          <v-col md="4" v-if="isMbile" class="px-6" cols="12">
            <div class="feature-item">
              <u-animate name="zoomIn" delay="0.3s" duration="0.6s">
                <div class="deco1" />
              </u-animate>
              <u-animate name="fadeInLeft" delay="0.5s" duration="0.6s">
                <figure class="img">
                  <img :src="imgAPI.photo[0]" alt="img" />
                </figure>
              </u-animate>
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
      <div>
        <h4 class="title-app display-2 text-center">Lorem ipsum Lorem ipsum</h4>
        <v-row>
          <v-col md="6" class="px-6" cols="12">
            <figure class="img-full">
              <img :src="imgAPI.photo[1]" alt="img" />
            </figure>
          </v-col>
          <v-col md="6" class="px-6" cols="12">
            <Testimonials />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import ScrollWrap from '../ScrollWrap'
import imgAPI from '~/static/images/imgAPI'
import Testimonials from '~/components/Testimonials'

export default {
  components: {
    ScrollWrap,
    Testimonials,
  },
  data() {
    return {
      imgAPI,
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      return mdDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
  },
}
</script>
