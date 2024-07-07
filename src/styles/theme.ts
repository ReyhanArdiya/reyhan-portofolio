/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-presstart2p)",
    body: "var(--font-montserrat)"
  },
  styles: {
    global: {
      "p, header, h1, h2, h3, h4, h5, h6, small": {
        color: "brand.charcoal.0"
      },
      "p, small": {
        letterSpacing: "-0.02em",
        lineHeight: "1.4em !important"
      },
      "h1, h2, h3, h4, h5, h6": {
        letterSpacing: "-0.04em",
        lineHeight: "1.5em !important"
      }
    }
  },
  colors: {
    brand: {
      sage: {
        0: "hsla(146, 20%, 63.7%, 1)"
      },
      charcoal: {
        0: "#1b1b1b"
      },
      white: {
        0: "hsla(30, 57.1%, 97.3%, 1)"
      },
      orange: {
        0: "hsla(13, 87.9%, 54.5%, 1)"
      }
    }
  },
  shadows: {
    brand: {
      double: "8px 8px 0px rgba(144, 181, 160, 1), 4px 4px 0px rgba(27, 27, 27, 1)"
    }
  }
});
