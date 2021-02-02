<template>
  <v-card class="card">
    <div class="userinfo-top">
      <div class="name">
        <v-avatar :size="30" class="avatar">
          <img :src="avatar" :alt="name" />
        </v-avatar>
        <span class="caption">
          {{ name }}
        </span>
      </div>
      <v-rating
        background-color="grey lighten-2"
        length="5"
        size="24"
        readonly
        :value="rating"
      ></v-rating>
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
      dark: darkMode,
    }
  },
  mounted() {
    console.log(this.dark)
  },
}
</script>
