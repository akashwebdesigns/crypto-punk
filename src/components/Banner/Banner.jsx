import { makeStyles,Typography,Container } from '@material-ui/core';
import React from 'react';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
    banner: {
        backgroundImage: "url(./banner3.png)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}))

const Banner = () => {
    const classes = useStyles();
    return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
                <Typography
                    variant="h3"
                    style={{
                        color:"#2c3e50",
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                    }}
                >
                    CryptoPunk
                </Typography>
                <Typography
                    variant="subtitle2"
                    style={{
                        color: "darkgrey",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                        fontSize:"20px"
                    }}
                >
                    Get all the info regarding your favorite Crypto Currencies
                </Typography>
            </div>
            <Carousel />
        </Container>
    </div>
    )

};

export default Banner;
