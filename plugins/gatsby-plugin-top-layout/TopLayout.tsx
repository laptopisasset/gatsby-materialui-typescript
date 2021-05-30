import React, { FC } from "react"
import { Helmet } from "react-helmet"

import { ThemeProvider } from "@material-ui/core/styles"

import theme from "../../src/theme"

const TopLayout: FC = props => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
        />

        <title>Arc Development</title>
      </Helmet>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </React.Fragment>
  )
}

export default TopLayout
