
import { useEffect } from 'react'
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles, } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';
import InputBase from '@material-ui/core/InputBase';
import './SelectToken.css'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        divider: {
            margin: theme.spacing(2, 0),
        },


    })

);
const SelectToken = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    useEffect(() => {
        document.title = "SelectToken"
    }, [])
    return (
        <div>
            <Container>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Grid item xs={7}>
                        <Paper style={{ borderRadius: "20px" }}>
                            <Typography variant="subtitle1" color="textSecondary">
                                <div style={{ padding: "120px" }}>

                                    <Grid container spacing={3}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <Paper
                                                    style={{ boxShadow: "none", textAlign: "left" }}
                                                    className={classes.paper}
                                                >
                                                    <h2
                                                        style={{
                                                            textAlign: "left",
                                                            fontSize: "40px",
                                                            color: "black",
                                                            lineHeight: "0px",
                                                        }}
                                                    >
                                                        {" "}
                                                        Swap
                                                    </h2>
                                                </Paper>

                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}

                                            >
                                                <Grid item xs={3}>

                                                </Grid>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper
                                                    style={{ boxShadow: "none", textAlign: "left" }}
                                                    className={classes.paper}
                                                >
                                                    From
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid item xs={3}>
                                                    <Paper
                                                        style={{ boxShadow: "none" }}
                                                        className={classes.paper}
                                                    >
                                                        Available:88,372 BNB
                                                    </Paper>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Select
                                            fullWidth
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            variant="outlined"
                                            style={{ borderRadius: "17px" }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                Register with 100 BUSD by ID address{" "}
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Then, convert a pixel value to em
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                convert an em value to pixels
                                            </MenuItem>
                                        </Select>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <Paper
                                                    style={{ boxShadow: "none", textAlign: "left" }}
                                                    className={classes.paper}
                                                >
                                                    To
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Grid item xs={3}>
                                                    <Paper
                                                        style={{ boxShadow: "none" }}
                                                        className={classes.paper}
                                                    >
                                                        Available:0
                                                    </Paper>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Select
                                            fullWidth
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            variant="outlined"
                                            style={{ borderRadius: "17px" }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>
                                                Register with 100 BUSD by ID address{" "}
                                            </MenuItem>
                                            <MenuItem value={20}>
                                                Then, convert a pixel value to em
                                            </MenuItem>
                                            <MenuItem value={30}>
                                                convert an em value to pixels
                                            </MenuItem>
                                        </Select>
                                        <Grid item xs={6}>
                                            <Box
                                                fontWeight="fontWeightBold"
                                                fontSize="h6.fontSize"
                                                m={1}
                                            ></Box>
                                        </Grid>
                                    </Grid>
                                    <Divider className={classes.divider} />

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleToggle}
                                        style={{
                                            padding: "16px",
                                            marginTop: "20px",
                                            width: "100%",
                                            borderRadius: "12px",
                                            backgroundColor: "#E7EAEE",
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                        }}
                                    >
                                        Eneter An Amount
                                    </Button>
                                </div>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <div>

                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        {/* <CircularProgress color="inherit" /> */}
                        <div className={classes.root}>
                            <Container>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <InputBase

                                        />
                                        <Paper className={classes.paper} style={{ borderRadius: "35px", margin: "155px" }}>
                                            <div className="pd">
                                                <h1> Select A Token</h1>
                                                <TextField
                                                    label="Search input"
                                                    margin="normal"
                                                    variant="outlined"
                                                    fullWidth
                                                    InputProps={{ type: 'search' }}
                                                />
                                                <p> <img src="/trust.png" alt="currencyimg" style={{width: "11px"}} />USxd</p>
                                                <p > <img src="/Vector.png" alt="currencyimg" style={{width: "11px"}} />BNB</p>
                                                <p><img src="/trust.png" alt="currencyimg" style={{width: "11px"}} />BUSD</p>
                                                <p> <img src="/trust.png" alt="currencyimg" style={{width: "11px"}} />ETH</p>
                                                <p> <img src="/trust.png" alt="currencyimg" style={{width: "11px"}} />BTC</p>
                                                <p> <img src="/Vector.png" alt="currencyimg" style={{width: "11px"}} />XRP</p>
                                                <p> <img src="/trust.png" alt="currencyimg"  style={{width: "11px"}}/>1INCH</p>
                                                <p> <img src="/trust.png" alt="currencyimg" style={{width: "11px"}} />PANCAKE</p>
                                                <p> <img src="/trust.png" alt="currencyimg"  style={{width: "11px"}}/>BIFI</p>
                                                
                                            </div>
                                        
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Backdrop>
                </div>
            </Container>
            
        </div>
    )
};

export default SelectToken