import React, { FC } from "react"

import { NormalLayout } from "../../components/layouts"

import { PageProps } from "gatsby"

const Websites: FC<PageProps> = props => (
  <NormalLayout {...props}>Websites</NormalLayout>
)

export default Websites
