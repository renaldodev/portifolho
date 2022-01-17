import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      900: "#072227",
      800: "#35858B",
      700: "#4FBDBA",
      600: "#AEFEFF",
      500: "#a8b2d1",
      400: "#e6f1ff",
      300:"#064635"
    },
  },
  styles: {
    global: {
      'html, body': {
        color: 'brand.500',
        lineHeight: 'tall',
        background:'brand.900',
      },
      a: {
        color: 'brand.600',
      },
    },
  },
  fonts: {
    heading: "'Space Mono', monospace",
    body: "Roboto",
  },
});

