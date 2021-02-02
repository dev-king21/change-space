<template>
  <v-row>
    <v-col md="6" class="px-6 text-center" align-self="center" cols="12">
      <h2 class="display-2 text-center mb-6">Lorem Ipsum <br />Lorem Ipsum</h2>
      <div class="exchange-description text-left px-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus
        nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
        felis necerat. Aliquam egestas, velit at condimentum placerat, sem
        sapien laoreet mauris, dictum porttito
      </div>
      <div class="text-left px-6 mt-4">
        <v-btn class="ma-2" large outlined color="primary">Button1</v-btn>
        <v-btn class="ma-2" large outlined color="warning">Button2</v-btn>
      </div>
    </v-col>
    <v-col md="6" class="" cols="12">
      <v-tabs v-model="tab" align-with-title>
        <v-tabs-slider color="primary"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <div class="px-6 py-4">
            <coin-selector hintText="You Send" />
            <div class="exchange-help-text">
              <div>scing elit Nunc maxi Nunc maxi</div>
              <div class="text-gray">scing elit Nunc maxi Nunc maxi</div>
            </div>
            <coin-selector hintText="You Receive" />
            <div class="text-right mt-8">
              <v-btn class="ma-2" outlined color="primary">
                Visa/Mastercard Accepted Logo
              </v-btn>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>
<script>
import CoinSelector from './CoinSelector'
export default {
  components: {
    CoinSelector,
  },
  data() {
    return {
      tab: null,
      items: ['Classic Rate', 'Fixed Rate', 'Buy via Credit Card'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>
<style lang="scss">
.exchange-description {
  line-height: 2rem;
}
.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}
.v-tabs-items {
  background-color: transparent !important;
}
.exchange-help-text {
  margin: 2rem 2rem;
  font-size: 12px;
}
.text-gray {
  color: #666;
}
</style>
