import colors from 'vuetify/lib/util/colors'

let darkMode = true
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('darkMode') || true
}

const palette = {
  greenLeaf: {
    primary: '#0083ff', //colors.green.base, // primary main
    primarylight: colors.green.lighten4, // primary light
    primarydark: '#04144c',//colors.green.darken4, // primary dark
    secondary: colors.blueGrey.base, // secondary main
    secondarylight: colors.blueGrey.lighten4, // secondary light
    secondarydark: colors.blueGrey.darken3, // secondary dark
    anchor: colors.green.base // link
  }
}

export const theme = {
  ...palette.greenLeaf
}


export default {
  rtl: false,
  theme: {
    dark: darkMode == 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme,
        background: '#04144c'
      }
    },
    options: {
      customProperties: true
    }
  }
}
