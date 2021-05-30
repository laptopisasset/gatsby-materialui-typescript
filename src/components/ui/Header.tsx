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
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import clsx from "clsx"

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
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    ...theme.typography.tab,
  },
  menuItem: {
    color: "white",
    opacity: 0.7,
  },
  menuItemSelected: {
    opacity: 1,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
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
  const iOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)

  const classes = useStyles()
  const [openMenu, setOpenMenu] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  const handleClick: React.MouseEventHandler = event => {
    setAnchorEl(event.currentTarget as HTMLElement)
    setOpenMenu(true)
  }
  const handleClose: React.MouseEventHandler = () => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleEstimateClick: React.MouseEventHandler = () => {
    navigate("/estimate")
  }

  const ariaOwns = anchorEl ? "simple-menu" : undefined
  const ariaHasPopup = anchorEl ? "true" : undefined

  const tabList = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Services",
      to: "/services",
      "aria-owns": ariaOwns,
      "aria-haspopup": ariaHasPopup,
      onMouseOver: handleClick,
    },
    {
      label: "The Revolution",
      to: "/revolution",
    },
    {
      label: "About Us",
      to: "/about",
    },
    {
      label: "Contact Us",
      to: "/contact",
    },
  ]

  const menuList = [
    {
      name: "Services",
      to: "/services",
    },
    {
      name: "Custom Software",
      to: "/services/customsoftware",
    },
    {
      name: "Mobile App Development",
      to: "/services/mobileapps",
    },
    {
      name: "Website",
      to: "/services/websites",
    },
  ]

  const tabs = (
    <>
      <Tabs
        value={decideActiveTab(location.pathname)}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {tabList.map((tab: any, index) => (
          <Tab {...tab} key={index} component={Link} className={classes.tab} />
        ))}
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
        open={openMenu}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        classes={{ paper: classes.menu }}
      >
        {menuList.map((menu, index) => (
          <MenuItem
            onClick={handleClose}
            key={index}
            component={Link}
            to={menu.to}
            selected={menu.to === location.pathname}
            classes={{
              root: classes.menuItem,
              selected: classes.menuItemSelected,
            }}
          >
            {menu.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const mobileList = [
    {
      name: "Home",
      to: "/",
      onClick: () => setOpenDrawer(false),
    },
    {
      name: "Services",
      to: "/services",
      onClick: () => setOpenDrawer(false),
    },
    {
      name: "The Revolution",
      to: "/revolution",
      onClick: () => setOpenDrawer(false),
    },
    {
      name: "About Us",
      to: "/about",
      onClick: () => setOpenDrawer(false),
    },
    {
      name: "Contact Us",
      to: "/contact",
      onClick: () => setOpenDrawer(false),
    },
    {
      name: "Free Estimate",
      to: "/estimate",
      onClick: () => setOpenDrawer(false),
      className: classes.drawerItemEstimate,
    },
  ]

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{
          paper: classes.drawer,
        }}
      >
        <List>
          {mobileList.map(({ to, onClick, name, className }, index) => (
            <ListItem
              key={index}
              divider
              button
              component={Link}
              to={to}
              onClick={onClick}
              className={className}
              selected={to === location.pathname}
            >
              <ListItemText
                disableTypography
                className={clsx({
                  [classes.drawerItem]: true,
                  [classes.drawerItemSelected]: to === location.pathname,
                })}
              >
                {name}
              </ListItemText>
            </ListItem>
          ))}
          {/* <ListItem
            divider
            button
            component={Link}
            to="/"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/services"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/about"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/contact"
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            onClick={() => setOpenDrawer(false)}
            className={classes.drawerItemEstimate}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem> */}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(open => !open)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
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
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
