import React, { FC } from "react"
import { PageProps } from "gatsby"

import { NormalLayout } from "../components/layouts"

const About: FC<PageProps> = props => (
  <NormalLayout {...props}>About</NormalLayout>
)

export default About
