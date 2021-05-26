import React, { FC } from "react"
import { Footer, Header } from "../ui"

import { PageProps } from "gatsby"

export const NormalLayout: FC<{ location: PageProps["location"] }> = ({
  children,
  ...rest
}) => {
  return (
    <div>
      <Header {...rest} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
