<template>
  <fragment>
    <v-navigation-drawer
      v-if="isTablet"
      v-model="openNavMobile"
      fixed
      temporary
      class="mobile-nav"
    >
      <mobile-menu />
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="handleScroll"
      :class="{ fixed: fixed }"
      class="header"
      fixed
      app
      height="auto"
    >
      <v-container>
        <div class="header-content">
          <nav class="nav-menu">
            <v-btn v-if="isTablet" text icon @click.stop="handleToggleOpen">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
            <div class="mobile-logo" v-if="isTablet">
              <a href="#home" class="logo-dark">
                <img :src="logo_dark" alt="logo" />
              </a>
              <a href="#home" class="logo-light">
                <img :src="logo_light" alt="logo" />
              </a>
            </div>
            <div class="logo" v-if="!isTablet">
              <a href="#home" class="logo-dark">
                <img :src="logo_dark" alt="logo" />
              </a>
              <a href="#home" class="logo-light">
                <img :src="logo_light" alt="logo" />
              </a>
            </div>
            <div v-if="loaded">
              <scrollactive
                v-if="isDesktop"
                :offset="navOffset"
                active-class="active"
                tag="div"
              >
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="dropdown-menu" text v-bind="attrs" v-on="on">
                      Language <span class="icon"></span>
                    </v-btn>
                  </template>

                  <v-list class="lang-menu">
                    <v-subheader>{{
                      $t('starter.header_language')
                    }}</v-subheader>
                    <v-list-item
                      v-for="locale in $i18n.locales"
                      :key="locale.code"
                      class="lang-list"
                      @click="switchLang(locale.code)"
                    >
                      <v-list-item-avatar class="flag">
                        <i :class="locale.code" />
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="lang-opt">
                          {{ $t('common.' + locale.code) }}
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-icon
                          v-if="locale.code === $i18n.locale"
                          color="primary"
                        >
                          mdi-check
                        </v-icon>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-btn
                  v-for="(item, index) in menuList"
                  :key="index"
                  :href="item.url"
                  class="anchor-link scrollactive-item"
                  text
                  @click="setOffset(item.offset)"
                >
                  {{ item.name }}
                </v-btn>
              </scrollactive>
            </div>
          </nav>
          <nav class="user-menu">
            <!--v-btn v-if="isDesktop" text> Login </v-btn-->
            <v-btn color="primary">Button</v-btn>
            <!--v-spacer v-if="isDesktop" class="vertical-divider" /-->
            <setting-menu />
          </nav>
        </div>
      </v-container>
    </v-app-bar>
  </fragment>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import logoDark from '~/static/images/logo-dark.png'
import logoLignt from '~/static/images/logo-light.png'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset,
  }
}

export default {
  components: {
    'setting-menu': Settings,
    MobileMenu,
  },
  data() {
    return {
      logo_dark: logoDark,
      logo_light: logoLignt,
      section: 0,
      fixed: false,
      loaded: false,
      openNavMobile: null,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40),
        createData(navMenu[4], '#' + navMenu[4], -40),
      ],
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleScroll: function () {
      if (window.scrollY > 280) {
        return (this.fixed = true)
      }
      return (this.fixed = false)
    },
    setOffset: function (offset) {
      this.navOffset = offset
    },
    handleToggleOpen: function () {
      this.openNavMobile = !this.openNavMobile
    },
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
