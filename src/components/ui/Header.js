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

    let menuOptions = [{name: "Services", link: "/services"}, {
        name: "Custom Software Development", link: "/customsoftware"
    }, {
        name: "Mobile App Development", link: "/mobileapps"
    }, {name: "Website Development", link: "/websites"}]

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/services":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;
            case "/customsoftware":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(1)
                }
                break;
            case "/mobileapps":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(2)
                }
                break;
            case "/websites":
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(3)
                }
                break;
            case "/revolution":
                if (value !== 2) {
                    setValue(2);
                }
                break;
            case "/about":
                if (value !== 3) {
                    setValue(3);
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setValue(4);
                }
                break;
            case "/estimate":
                if (value !== 5) {
                    setValue(5);
                }
                break;
            default:
                break;
        }
    }, [value])

    const tabs = (<React.Fragment>
        <Tabs value={value} onChange={handleChange} indicatorColor={"primary"}
              className={classes.tabContainer}>
            <Tab className={classes.Tab} component={Link} to={"/"} label="Home"/>
            <Tab aria-owns={anchorEL ? "simple-menu" : undefined}
                 aria-haspopup={anchorEL ? "true" : undefined}
                 onMouseOver={event => handleClick(event)}
                 className={classes.Tab} component={Link} to={"/services"} label="Services"/>
            <Tab className={classes.Tab} component={Link} to={"/revolution"} label="The Revolution"/>
            <Tab className={classes.Tab} component={Link} to={"/about"} label="About Us"/>
            <Tab className={classes.Tab} component={Link} to={"/contact"} label="Contact Us"/>
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
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(0)
                        }
                        }
                        divider button component={Link} to={"/"}
                        selected={value === 0}
                    >
                        <ListItemText
                            className={value === 0 ?
                                [classes.drawerItem, classes.drawerItemSelected] :
                                classes.drawerItem}
                            disableTypography>
                            Home
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(1)
                        }
                        }
                        divider button component={Link}
                        to={"/services"}
                        selected={value === 1}
                    >
                        <ListItemText
                            className={value === 1 ?
                                [classes.drawerItem, classes.drawerItemSelected] :
                                classes.drawerItem} disableTypography>
                            Services
                        </ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(2)
                        }
                        }
                        divider button component={Link}
                        to={"/revolution"}
                        selected={value === 2}
                    >
                        <ListItemText
                            className={value === 2 ?
                                [classes.drawerItem, classes.drawerItemSelected] :
                                classes.drawerItem}
                            disableTypography>The Revolution</ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(3)
                        }
                        }
                        divider button component={Link}
                        to={"/about"}
                        selected={value === 3}
                    >
                        <ListItemText
                            className={value === 3 ?
                                [classes.drawerItem, classes.drawerItemSelected] :
                                classes.drawerItem}
                            disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(4)
                        }
                        }
                        divider button component={Link}
                        to={"/contact"}
                        selected={value === 4}
                    >
                        <ListItemText
                            className={value === 4 ?
                                [classes.drawerItem, classes.drawerItemSelected] :
                                classes.drawerItem}
                            disableTypography>Contact Us</ListItemText>
                    </ListItem>
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