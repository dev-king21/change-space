<template>
  <v-card class="card">
    <div class="userinfo-top">
      <div class="name">
        <v-avatar :size="30" class="avatar">
          <img :src="avatar" :alt="name" />
        </v-avatar>
        <span class="caption ml-2">
          {{ name }}
          <v-rating
            v-if="isTablet"
            background-color="grey lighten-2"
            length="5"
            :size="rating_size"
            readonly
            :value="rating"
          />
        </span>
      </div>
      <v-rating
        v-if="!isTablet"
        background-color="grey lighten-2"
        length="5"
        :size="rating_size"
        readonly
        :value="rating"
      />
    </div>

    <v-divider :dark="dark"></v-divider>
    <p class="body1 mt-3">
      {{ text }} <br />
      {{ text }}
    </p>
  </v-card>
</template>

<style scoped lang="scss">
@import './card-styles';
</style>

<script>
let darkMode = false
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  darkMode = localStorage.getItem('darkMode') || false
}
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      dark: darkMode === 'true',
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
    rating_size() {
      const mdDown = this.$store.state.breakpoints.mdDown
      if (mdDown.indexOf(this.$mq) > -1) return 12
      else return 18
    },
  },
  mounted() {},
}
</script>
