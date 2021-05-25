import React, { FC, ReactElement } from "react"

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  makeStyles,
} from "@material-ui/core"

const ElevationScroll: FC = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children as ReactElement, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
}))

export const Header: FC = () => {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography>Arc Development</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
