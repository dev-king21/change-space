<template>
  <v-row :class="{ 'prepend-summary': isDesktop }">
    <v-col md="10" class="px-6 text-center" align-self="center" cols="12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, Nunc maxi
      nsectetur adipiscing elit. Nun
    </v-col>
    <v-col
      md="2"
      class="px-6"
      :class="{ 'button-wrapper': isDesktop }"
      cols="12"
    >
      <v-btn block :text="!isTablet" color="primary">Button</v-btn>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.prepend-summary {
  border: 1px solid #e2e2e2;
}

.button-wrapper {
  border-left: 1px solid #e2e2e2;
}
</style>
<script>
export default {
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