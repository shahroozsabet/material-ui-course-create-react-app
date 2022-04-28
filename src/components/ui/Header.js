import React from "react";
import {AppBar, makeStyles, Toolbar, useScrollTrigger, Zoom} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed', bottom: theme.spacing(2), right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const {children} = props;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true, threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (<Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
            {children}
        </div>
    </Zoom>);
}


export function Header(props) {
    return (<ScrollTop>
        <AppBar position={"fixed"}>
            <Toolbar>
                Arc Development
            </Toolbar>
        </AppBar>
    </ScrollTop>)
}