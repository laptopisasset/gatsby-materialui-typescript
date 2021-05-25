import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

/**
 * Type Augumentation for custom variables
 */
declare module "@material-ui/core/styles/createPalette" {
  interface CommonColors {
    blue: string
    orange: string
  }
}

/**
 * Theme Constants
 */
const blue = "#0B72B9"
const orange = "#FFBA60"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    common: {
      blue,
      orange,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
})

export default theme
