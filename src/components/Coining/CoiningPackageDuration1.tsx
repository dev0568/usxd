import { Typography } from "@material-ui/core";
import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


const CoiningPackageDuration = () => {

    useEffect(() => {
        document.title = "CoiningPackageDuration1";
    }, []);

    return (
        <div>
            <div
                style={{

                    paddingTop: "140px",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Container>
                    <Button
                        variant="contained"
                        href="#contained-buttons"

                        style={{ backgroundColor: "black", color: "#FFFFF0", textTransform: "capitalize", borderRadius: "12px", padding: "10px", }}
                    >
                        Coining Package
                    </Button>
                    <Button
                        variant="contained"
                        disabled
                        href="#contained-buttons"
                        style={{
                            textTransform: "capitalize",
                            padding: "10px",

                            borderRadius: "12px",
                        }}
                    >
                        Package Activated
                    </Button>
                    <Button
                        variant="contained"
                        disabled
                        style={{ margin: "2px", textTransform: "capitalize", borderRadius: "12px", padding: "10px", }}
                    >
                        Retirement Wallet
                    </Button>


                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <img src="/section2-package.png" alt="packageimg" width="50%" />
                        </Grid>
                        <Grid item xs={8}>
                            <Paper style={{ borderRadius: "20px" }}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    <div style={{ padding: "20px" }}>
                                        <Typography variant="subtitle1" gutterBottom>
                                            <h2
                                                style={{
                                                    textAlign: "left",
                                                    fontSize: "40px",
                                                    color: "black",
                                                    lineHeight: "0px",
                                                }}
                                            >
                                                {" "}
                                                500 BUSD
                                                <span style={{ fontSize: "20px" }}>/Pakage</span>
                                            </h2>
                                        </Typography>
                                        <Grid container spacing={3}>
                                            <Grid item>
                                                <div style={{ display: "flex" }}>

                                                    <p style={{ padding: "10px", }}>Daily Profit (APY)</p>

                                                    <p style={{ padding: "10px", }}>Duration</p>

                                                    <p style={{ padding: "10px", }}>Claim lockup</p>

                                                    <p style={{ padding: "10px", }}>Quantity to purchase</p>

                                                    <p style={{ padding: "10px", }}>Earned</p>


                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={3}>
                                            <Grid item>
                                                <div style={{ display: "flex" }}>
                                                    <p style={{ fontSize: "20px", padding: "10px" }}>0,25% </p>
                                                    <Autocomplete
                                                        freeSolo
                                                        id="free-solo-2-demo"
                                                        disableClearable
                                                        options={top100Films.map((option) => option.title)}
                                                        renderInput={(params) => (
                                                            <TextField
                                                                {...params}
                                                                label="30 day"
                                                                margin="normal"
                                                                fullWidth
                                                                variant="outlined"
                                                                InputProps={{ ...params.InputProps, type: 'search' }}
                                                            />
                                                        )}
                                                    />

                                                    <p style={{ fontSize: "20px", padding: "10px" }}>48 Hour(s)</p>

                                                    <p style={{ fontSize: "20px", padding: "10px" }}>2  ≈1,000 BUSD </p>

                                                    <p style={{ fontSize: "20px", padding: "10px" }}>--USxD </p>

                                                    <Button
                                                        variant="contained"
                                                        href="#contained-buttons"

                                                        style={{ backgroundColor: "#47C278", textTransform: "capitalize", borderRadius: "12px", padding: "10px", }}
                                                    >
                                                        Coining Package
                                                    </Button>


                                                </div>

                                            </Grid>
                                        </Grid>
                                    </div>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <div>

                    </div>

                </Container>
            </div>
        </div>
    );
};
const top100Films = [
    { title: '30day',  },
    { title: '90dy' },
    { title: '180day' },
    { title: '365'},
    
  
];

export default CoiningPackageDuration;
