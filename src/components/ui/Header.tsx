import React, { FC, ReactElement, useState, useRef, useEffect } from "react"
import { PageProps } from "gatsby"
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuItem,
  MenuList,
} from "@material-ui/core"

import { Link } from "../ui"

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
    marginBottom: "4em",
  },
  logo: {
    height: "8em",
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",

    "&:hover": {
      textDecoration: "none",
    },
  },
  logoContainer: {
    padding: 0,

    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",

    "&:hover": {
      textDecoration: "none",
    },
  },
}))

const decideActiveTab = (curentPath: string) => {
  switch (curentPath) {
    case "/":
      return 0

    case "/services":
    case "/services/mobileapps":
    case "/services/websites":
    case "/services/customsoftware":
      return 1

    case "/revolution":
      return 2

    case "/about":
      return 3

    case "/contact":
      return 4

    default:
      return 0
  }
}

export const Header: FC<{
  location: PageProps["location"]
  navigate: PageProps["navigate"]
}> = ({ location, navigate }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef<HTMLAnchorElement>(null)

  const handleEstimateClick: React.MouseEventHandler = () => {
    navigate("/estimate")
  }

  const handleMouseOver: React.MouseEventHandler = () => {
    setOpen(true)
  }

  const handleMouseOut: React.MouseEventHandler = () => {
    setOpen(false)
  }

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              disableRipple
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            <Tabs
              value={decideActiveTab(location.pathname)}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                label="Home"
                className={classes.tab}
                component={Link}
                to="/"
              />

              <Tab
                label="Services"
                className={classes.tab}
                component={Link}
                to="/services"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
              />
              {/* Poper for services Tab */}

              <Tab
                label="The Revolution"
                className={classes.tab}
                component={Link}
                to="/revolution"
              />
              <Tab
                label="About Us"
                className={classes.tab}
                component={Link}
                to="/about"
              />
              <Tab
                label="Contact Us"
                className={classes.tab}
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleEstimateClick}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
