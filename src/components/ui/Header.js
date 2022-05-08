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

    const handleChange = (e, value) => {
        setValue(value);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/about" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contact" && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5)
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
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                setValue(1)
                            }}
                            component={Link}
                            to={"/services"}
                            classes={{root: classes.menuItem}}
                        >Services</MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                setValue(1)
                            }}
                            component={Link}
                            to={"/customsoftware"}
                            classes={{root: classes.menuItem}}
                        >Custom Software</MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                setValue(1)
                            }}
                            component={Link}
                            to={"/mobileapps"}
                            classes={{root: classes.menuItem}}
                        >Mobile App Development</MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                setValue(1)
                            }}
                            component={Link}
                            to={"/websites"}
                            classes={{root: classes.menuItem}}
                        >Website Development</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
    </React.Fragment>
}