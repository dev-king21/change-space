<template>
  <div class="px-6 my-4">
    <v-row class="coin-selector">
      <v-col cols="8" class="px-4">
        <v-text-field v-model="last" :label="hintText" />
      </v-col>
      <v-col
        class="coin-type-selector d-flex align-items-center justify-content-center"
        cols="4"
      >
        <v-menu class="coin-menu" :offset-y="offset">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="coin-select-menu"
              block
              large
              color="transparent"
              v-bind="attrs"
              v-on="on"
            >
              <span>{{ items[active_index].title }}</span>
              <span class="dropdown-icon ion-android-arrow-dropdown icon" />
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              @click="selectCoin(index)"
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss">
.coin-selector {
  background: #e2e2e2;
  border-radius: 6px;

  .coin-type-selector {
    background: var(--v-primary-base);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .coin-select-menu {
    background-color: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
    &:hover {
      background-color: transparent !important;
    }
    span {
      color: white !important;
    }
  }
  .v-btn:before {
    background-color: transparent !important;
  }
  .v-input__slot {
    margin-top: 8px;
  }
  .v-text-field {
    margin: 0 !important;
    padding: 0 !important;
  }

  .v-text-field__details {
    display: none !important;
  }

  .v-text-field > .v-input__control > .v-input__slot:before {
    border: none;
  }

  .v-text-field > .v-input__control > .v-input__slot:after {
    border: none;
    background: transparent;
  }

  .dropdown-icon {
    transform: translateX(1rem);
  }
}

.theme--dark .coin-selector {
  background: #1e1e1e !important;
  .coin-type-selector {
    /* background: #323232 !important; */
  }
}
.v-application .v-menu__content {
  border-radius: 0 !important;
}
</style>
<script>
export default {
  props: {
    hintText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      last: '',
      items: [
        { title: 'BTC' },
        { title: 'ETH' },
        { title: 'USDT' },
        { title: 'XRP' },
        { title: 'LTC' },
      ],
      active_index: 0,
      offset: false,
    }
  },
  methods: {
    selectCoin(index) {
      this.active_index = index
    },
  },
}
</script>