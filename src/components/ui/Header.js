import React, {useEffect, useState} from "react";
import {AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar, useScrollTrigger} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import logo from "../../assets/ShahroozLogo.jpg"
import {Link} from "react-router-dom";

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
        ...theme.mixins.toolbar, marginBottom: "3em"
    }, logo: {
        height: "8em"
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
    }
}));

export function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEL, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }

    function handleMenuItemClick(i) {
        setAnchorEl(null)
        setOpen(false)
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

    return <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Button className={classes.logoContainer} component={Link} to={"/"} onClick={() => setValue(0)}
                            disableRipple>
                        <img alt="Company Logo" className={classes.logo} src={logo}/>
                    </Button>
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
                        open={open}
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
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
    </React.Fragment>
}