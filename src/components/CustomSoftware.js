import React from "react";
import {Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import Lottie from 'react-lottie'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import lightBulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'
import roots from '../assets/root.svg'
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    }, arrowContainer: {
        marginTop: "0.5em"
    }, mainContainer: {
        paddingLeft: "5em", paddingRight: "5em", paddingTop: "2em", paddingBottom: "10em"
    }, itemContainer: {
        maxWidth: "40em"
    }
}))

export function CustomSoftware(props) {
    const classes = useStyles()

    const documentsOptions = {
        loop: true, autoplay: false, animationData: documentsAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const scaleOptions = {
        loop: true, autoplay: false, animationData: scaleAnimation, rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (<Grid
        container
        direction={"column"}
        className={classes.mainContainer}
    >
        <Grid item container direction={"row"}>
            <Grid
                item
                className={classes.arrowContainer}
                style={{
                    marginRight: "1em", marginLeft: "-3.5em"
                }}
            >
                <IconButton
                    style={{backgroundColor: "transparent"}}
                    component={Link}
                    to={"/services"}
                    onClick={() => props.setSelectedIndex(0)}
                >
                    <img src={backArrow} alt={"Back to Services Page"}/>
                </IconButton>
            </Grid>
            <Grid
                item
                container
                direction={"column"}
                className={classes.heading}
            >
                <Grid item>
                    <Typography variant={"h2"}>
                        Custom Software Development
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant={"body1"} paragraph>
                        Whether we’re replacing legacy system or inventing new solutions,
                        Shahrooz Development is here to help your business tackle technology.
                    </Typography>
                    <Typography variant={"body1"} paragraph>
                        Using regular commercial software leaves you with a lot of stuff
                        you don’t need, without some of the stuff you do need, and
                        ultimately controls the way you work. Without using any software
                        at all you risk falling behind competitors and missing out on huge
                        savings from increased efficiency.
                    </Typography>
                    <Typography variant={"body1"} paragraph>
                        Our custom solutions are designed from the ground up with your
                        needs, wants, and goals at the core. This collaborative process
                        produces finely tuned software that is much more effective at
                        improving your workflow and reducing costs than generalized
                        options.
                    </Typography>
                    <Typography variant={"body1"} paragraph>
                        We create exactly what you want, exactly how you want it.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item className={classes.arrowContainer}>
                <IconButton
                    style={{backgroundColor: "transparent"}}
                    component={Link}
                    to={"/mobileapps"}
                    onClick={() => props.setSelectedIndex(2)}
                >
                    <img
                        src={forwardArrow}
                        alt={"Forward to Mobile App Development Page"}
                    />
                </IconButton>
            </Grid>
        </Grid>
        <Grid
            item
            container
            direction={"row"}
            justifyContent={"center"}
            style={{marginTop: "15em", marginBottom: "20em"}}
        >
            <Grid
                item
                container
                direction={"column"}
                md
                alignItems={"center"}
                style={{maxWidth: "40em"}}
            >
                <Grid item>
                    <Typography variant={"h4"}>
                        Save Energy
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={lightBulb} alt={"lightBulb"}/>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={"column"}
                md
                alignItems={"center"}
                style={{maxWidth: "40em"}}
            >
                <Grid item>
                    <Typography variant={"h4"}>
                        Save Time
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={stopwatch} alt={"Stopwatch"}/>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction={"column"}
                md
                alignItems={"center"}
                style={{maxWidth: "40em"}}
            >
                <Grid item>
                    <Typography variant={"h4"}>
                        Save Money
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={cash} alt={"Cash"}/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container direction={"row"} justifyContent={"space-around"}>
            <Grid item container className={classes.itemContainer} md>
                <Grid item container direction={"column"} md>
                    <Grid item>
                        <Typography variant={"h4"}>
                            Digital Documents& Data
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} paragraph>
                            Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography variant={"body1"} paragraph>
                            Billions are spent annually on the purchasing, printing, and
                            distribution of paper. On top of the massive environmental
                            impact this has, it impacts on your overall cost as well.
                        </Typography>
                        <Typography variant={"body1"} paragraph>
                            By utilizing digital forms and documents you can remove these
                            obsolete expenses, accelerate your communication, and help the
                            Earth.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie
                        options={documentsOptions}
                        isStopped={true}
                        style={{maxHeight: 275, maxWidth: 275, minHeight: 250}}
                    />
                </Grid>
            </Grid>
            <Grid item container className={classes.itemContainer} md>
                <Grid item md>
                    <Lottie
                        options={scaleOptions}
                        isStopped={true}
                        style={{maxHeight: 260, maxWidth: 280}}
                    />
                </Grid>
                <Grid item container direction={"column"} md>
                    <Grid item>
                        <Typography variant={"h4"} align={"right"}>
                            Scale
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"} align={"right"} paragraph>
                            Whether you’re a large brand, just getting started, or taking
                            off right now, our application architecture ensures pain-free
                            growth and reliability.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item container direction={"row"}>
            <Grid item container direction={"column"} alignItems={"center"}>
                <Grid item>
                    <img
                        src={roots}
                        alt={"tree with roots extending out"}
                        height={"450em"}
                        width={"450em"}
                    />
                </Grid>
                <Grid item className={classes.itemContainer}>
                    <Typography variant={"h4"} align={"center"} gutterBottom>
                        Root-Cause Analysis
                    </Typography>
                    <Typography variant={"body1"} align={"center"} paragraph>
                        Many problems are merely symptoms of larger, underlying issues.
                    </Typography>
                    <Typography variant={"body1"} align={"center"} paragraph>
                        We can help you thoroughly examine all areas of your business to
                        develop a holistic plan for the most effective implementation of
                        technology.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Grid>)
}