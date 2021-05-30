import React, { FC, ReactElement, useState } from "react"
import { PageProps } from "gatsby"
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  makeStyles,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/core"

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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const handleClick: React.MouseEventHandler = event => {
    setAnchorEl(event.currentTarget as HTMLElement)
    setOpen(true)
  }
  const handleClose: React.MouseEventHandler = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const handleEstimateClick: React.MouseEventHandler = () => {
    navigate("/estimate")
  }

  const tabs = (
    <>
      <Tabs
        value={decideActiveTab(location.pathname)}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />

        <Tab
          label="Services"
          className={classes.tab}
          component={Link}
          to="/services"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={handleClick}
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

      {/* Menu Component for Services Menu */}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/services">
          Services
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/services/customsoftware"
        >
          Custom Software Development
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/services/mobileapps"
        >
          Mobile App Development
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/services/websites"
        >
          Website Development
        </MenuItem>
      </Menu>
    </>
  )

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
            {matches ? null : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
