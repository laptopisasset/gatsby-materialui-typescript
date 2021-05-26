import React, { FC, ReactElement } from "react"
import { PageProps } from "gatsby"
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
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
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
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

  const handleEstimateClick: React.MouseEventHandler = () => {
    navigate("/estimate")
  }

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo} />
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
              />
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
