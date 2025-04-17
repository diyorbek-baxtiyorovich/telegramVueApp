import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { mdi, aliases } from 'vuetify/iconsets/mdi-svg' // ✅ To‘g‘ri import

// Optional: Custom theme (ixtiyoriy)
const myCustomTheme = {
  dark: false,
  colors: {
    primary: '#2196F3',
    secondary: '#03A9F4',
    accent: '#9C27B0',
    error: '#f44336',
    warning: '#ff9800',
    info: '#00bcd4',
    success: '#4caf50'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases, // ✅ MDI aliases
    sets: {
      mdi
    }
  }
})
