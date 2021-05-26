import React, { FC, ReactElement } from "react"

import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Typography,
  makeStyles,
} from "@material-ui/core"

import logo from "../../images/logo.svg"

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
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
  },
}))

export const Header: FC = () => {
  const classes = useStyles()

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
