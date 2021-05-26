import React, { FC } from "react"

import { NormalLayout } from "../components/layouts"

import { PageProps } from "gatsby"

const Index: FC<PageProps> = props => {
  return <NormalLayout {...props}>Hello</NormalLayout>
}

export default Index
