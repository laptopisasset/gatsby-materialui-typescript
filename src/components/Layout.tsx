import React, { FC } from "react"
import { Footer, Header } from "./ui"

const Layout: FC = props => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
