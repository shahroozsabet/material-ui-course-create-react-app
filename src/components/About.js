import React from "react";
import {Avatar, Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";

import history from "../assets/history.svg";
import profile from "../assets/KalmarStreet.jpeg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic", fontWeight: 300, fontSize: "1.5rem", maxWidth: "50em", lineHeight: 1.4
    }, rowContainer: {
        paddingLeft: "5em", paddingRight: "5em", [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em", paddingRight: "1.5em"
        }
    }, avatar: {
        height: "25em", width: "25em", [theme.breakpoints.down("sm")]: {
            height: "20em", width: "20em", maxHeight: 300, maxWidth: 300
        }
    }
}))

export default function About(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    return (<Grid container direction={"column"}>
        <Grid
            item
            className={classes.rowContainer}
            style={{marginTop: matchesMD ? "1em" : "2em"}}
        >
            <Typography align={matchesMD ? "center" : undefined} variant={"h2"}>
                About Us
            </Typography>
        </Grid>
        <Grid
            item
            container
            justifyContent={"center"}
            className={classes.rowContainer}
            style={{marginTop: "3em"}}
        >
            <Typography
                variant={"h4"}
                align={"center"}
                className={classes.missionStatement}
            >
                Whether it is person to person, business to consumer, or an individual
                to their interests, technology is meant to bring us closer to what we
                care about in the best way possible. Shahrooz Development will use that
                principle to provide fast, modern, inexpensive, and aesthetic software
                to the Midwest and beyond.
            </Typography>
        </Grid>
        <Grid
            item
            container
            className={classes.rowContainer}
            style={{marginTop: "10em", marginBottom: "10em"}}
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
            justifyContent={"space-around"}
        >
            <Grid item>
                <Grid
                    item
                    container
                    direction={"column"}
                    lg
                    style={{maxWidth: "35em"}}
                >
                    <Grid item>
                        <Typography
                            align={matchesMD ? "center" : undefined}
                            variant={"h4"}
                            gutterBottom
                        >
                            History
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                            style={{fontWeight: 700, fontStyle: "italic"}}
                        >
                            We're a start up.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            Founded in 2022, we’re ready to get our hands on the world’s
                            business problems.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            It all started with one question: Why aren’t all businesses
                            using available technology? There are many different answers to
                            that question: economic barriers, social barriers, educational
                            barriers, and sometimes institutional barriers.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            We aim to be a powerful force in overcoming these obstacles.
                            Recent developments in software engineering and computing power,
                            compounded by the proliferation of smart phones, has opened up
                            infinite worlds of possibility. Things that have always been
                            done by hand can now be done digitally and automatically, and
                            completely new methods of interaction are created daily. Taking
                            full advantage of these advancements is our job.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            All this change can be a lot to keep up with, and that’s where
                            we come in.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    item
                    container
                    justifyContent={"center"}
                    lg
                >
                    <img
                        src={history}
                        alt="quill pen sitting on top of book"
                        style={{maxHeight: matchesMD ? 200 : "22em"}}
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid
            item
            container
            direction={"column"}
            alignItems={"center"}
            className={classes.rowContainer}
            style={{marginBottom: "15em"}}
        >
            <Grid item>
                <Typography align={"center"} variant={"h4"} gutterBottom>
                    Team
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={"body1"} paragraph align={"center"}>
                    Shahrooz Sabet, Founder
                </Typography>
                <Typography variant={"body1"} paragraph align={"center"}>
                    I have more than 9 years Software development experience.
                </Typography>
            </Grid>
            <Grid item>
                <Avatar
                    alt={"founder"}
                    src={profile}
                    className={classes.avatar}
                />
            </Grid>
            <Grid item style={{maxWidth: "45em", padding: "1.25em"}}>
                <Typography variant={"body1"} align={"center"} paragraph>
                    Shahrooz is a Software developer with +9 years experience in Banking, Fintech, and IT industries
                    more as a backend Java developer. He graduated in Master of software technology at Linnaeus
                    university in Sweden in 2012.
                </Typography>
                <Typography variant={"body1"} align={"center"} paragraph>
                    Skills: Java, Spring Boot, Microservices, Cloud native applications, Rest API, Backend
                    development, Spring Batch, SQL, Cost Accounting, Banking Solutions, ERP, Software Quality.
                </Typography>
            </Grid>
        </Grid>
        <Grid item>
            <CallToAction setValue={props.setValue}/>
        </Grid>
    </Grid>)
}