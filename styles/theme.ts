import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#072227',
    800: '#35858B',
    700: '#4FBDBA',
    600: '#AEFEFF',
    500:'#e6f1ff',
  },
}

const fonts= {
  heading: "'Space Mono', monospace",
  body: 'Roboto',
}

export const theme = extendTheme({ colors,fonts })

