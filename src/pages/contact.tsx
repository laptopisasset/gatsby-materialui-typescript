import React, { FC } from "react"

import { NormalLayout } from "../components/layouts"

import { PageProps } from "gatsby"

const Contact: FC<PageProps> = props => (
  <NormalLayout {...props}>Contact</NormalLayout>
)

export default Contact
