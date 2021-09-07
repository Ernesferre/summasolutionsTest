// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: '#0A8CD1',
    secondary: "#D10D0A",
    accent: "#D1920A",
  },
}

const styles = {
    global: {
        'html, body': {
            color: "black",
            bg: "#E8F0E7"
        }
    }
}

export const theme = extendTheme({colors, styles})