import React, { FC } from "react"

import { NormalLayout } from "../components/layouts"

import { PageProps } from "gatsby"

const Estimate: FC<PageProps> = props => (
  <NormalLayout {...props}>Free Estimate</NormalLayout>
)

export default Estimate
