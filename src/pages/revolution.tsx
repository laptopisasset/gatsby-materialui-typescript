import React, { FC } from "react"

import { NormalLayout } from "../components/layouts"

import { PageProps } from "gatsby"

const Revolution: FC<PageProps> = props => (
  <NormalLayout {...props}>The Revoluition</NormalLayout>
)

export default Revolution
