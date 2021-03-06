import React, { FC } from "react"

import { NormalLayout } from "../components/layouts"

import { PageProps } from "gatsby"

const Index: FC<PageProps> = props => (
  <NormalLayout {...props}>Home</NormalLayout>
)

export default Index
