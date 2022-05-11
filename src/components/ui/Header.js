import React, {useEffect, useState} from "react";
import {
    AppBar,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import logo from "../../assets/ShahroozLogo.jpg"
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true, threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar, marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }, [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    }, logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        }, [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    }, logoContainer: {
        padding: 0, "&:hover": {
            backgrounColor: "transparent"
        }
    }, tabContainer: {
        marginLeft: "auto"
    }, Tab: {
        ...theme.typography.tab, minWidth: 10, marginLeft: "25px"
    }, Button: {
        ...theme.typography.estimate, borderRadius: "50px", marginLeft: "50px", marginRight: "25px", height: "45px"
    }, menu: {
        backgroundColor: theme.palette.common.blue, color: "white", borderRadius: "0px"
    }, menuItem: {
        ...theme.typography.tab, opacity: 0.7, "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    }, drawer: {
        backgroundColor: theme.palette.common.blue
    }, drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    }, drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    }, drawerItemSelected: {
        opacity: 1
    }
}));

export function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [openDrawer, setOpenDrawer] = useState(false)
    const [value, setValue] = useState(0);
    const [anchorEL, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    function handleMenuItemClick(i) {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)
    }

    let menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1},
        {name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}]

    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {
            name: "Services", link: "/services", activeIndex: 1,
            ariaOwns: anchorEL ? "simple-menu" : undefined,
            ariaPopup: anchorEL ? "true" : undefined,
            mouseOver: event => handleClick(event)
        },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3},
        {name: "Contact Us", link: "/contact", activeIndex: 4}]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, menuOptions, selectedIndex, routes])

    const tabs = (<React.Fragment>
        <Tabs value={value} onChange={handleChange} indicatorColor={"primary"}
              className={classes.tabContainer}>
            {routes.map((route, index) => (
                <Tab
                    key={`${route}${index}`}
                    className={classes.Tab}
                    component={Link}
                    to={route.link}
                    label={route.name}
                    aria-owns={route.ariaOwns}
                    aria-haspopup={route.ariaPopup}
                    onMouseOver={route.mouseOver}/>
            ))}
        </Tabs>
        <Button className={classes.Button} variant={"contained"} color={"secondary"}>Free Estimate</Button>
        <Menu
            open={openMenu}
            id={"simple-menu"}
            anchorEl={anchorEL}
            onClose={handleClose}
            classes={{paper: classes.menu}}
            MenuListProps={{onMouseLeave: handleClose}}
            elevation={0}
            keepMounted
        >
            {menuOptions.map((option, i) => (<MenuItem
                key={option}
                component={Link}
                to={option.link}
                classes={{root: classes.menuItem}}
                onClick={() => {
                    handleClose();
                    setValue(1)
                    handleMenuItemClick(i)
                }}
                selected={i === selectedIndex && value === 1}
            >
                {option.name}
            </MenuItem>))}
        </Menu>
    </React.Fragment>)

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                open={openDrawer}
                classes={{paper: classes.drawer}}
            >
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            key={`${route}${route.activeIndex}`}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                            onClick={() => {
                                setOpenDrawer(false);
                                setValue(route.activeIndex)
                            }}>
                            <ListItemText className={value === route.activeIndex ?
                                [classes.drawerItem, classes.drawerItemSelected] :
                                classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(5)
                        }
                        }
                        divider button component={Link}
                        className={value === 5 ?
                            [classes.drawerItem, classes.drawerItemSelected] :
                            classes.drawerItemEstimate}
                        to={"/estimate"}
                        selected={value === 5}
                    >
                        <ListItemText
                            className={classes.drawerItem}
                            disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Button className={classes.logoContainer} component={Link} to={"/"} onClick={() => setValue(0)}
                            disableRipple>
                        <img alt="Company Logo" className={classes.logo} src={logo}/>
                    </Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
    </React.Fragment>
}