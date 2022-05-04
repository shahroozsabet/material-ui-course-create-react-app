import React from "react";
import {AppBar, Button, Tab, Tabs, Toolbar, useScrollTrigger} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import logo from "../../assets/logo.svg"

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
        height: "7em"
    }, tabContainer: {
        marginLeft: "auto"
    }, Tab: {
        ...theme.typography.tab, minWidth: 10, marginLeft: "25px"
    }, Button: {
        ...theme.typography.estimate, borderRadius: "50px", marginLeft: "50px", marginRight: "25px", height: "45px"
    }
}));

export function Header(props) {
    const classes = useStyles();

    return (<React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <img alt="Company Logo" className={classes.logo} src={logo}/>
                    <Tabs className={classes.tabContainer}>
                        <Tab className={classes.Tab} label="Home"/>
                        <Tab className={classes.Tab} label="Services"/>
                        <Tab className={classes.Tab} label="The Revolution"/>
                        <Tab className={classes.Tab} label="About Us"/>
                        <Tab className={classes.Tab} label="Contact Us"/>
                    </Tabs>
                    <Button className={classes.Button} variant={"contained"} color={"secondary"}>Free Estimate</Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
    </React.Fragment>)
}