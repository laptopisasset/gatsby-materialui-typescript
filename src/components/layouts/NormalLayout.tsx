import React, { FC } from "react"
import { Footer, Header } from "../ui"

export const NormalLayout: FC = props => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
}
