import React, { FC, ReactElement } from "react"

import { AppBar, Toolbar, useScrollTrigger } from "@material-ui/core"

const ElevationScroll: FC = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children as ReactElement, {
    elevation: trigger ? 4 : 0,
  })
}

export const Header: FC = () => {
  return (
    <ElevationScroll>
      <AppBar>
        <Toolbar>Arc Development</Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}
