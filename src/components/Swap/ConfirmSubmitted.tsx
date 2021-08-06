import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/styles';
import {createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
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
    })
);
const ConfirmSubmitted = () => {
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
                <h1>Login</h1>
                <div >
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Card className="card" raised={true} style={{ padding: "45px", borderRadius: "30px" }}>
                                <CardActionArea>
                                    <h1> Login to Personad USxB</h1>
                                    <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging</p>
                                </CardActionArea>
                                <Grid container justify="center">
                                    <Button
                                        style={{
                                            backgroundColor: "#47C278",
                                            color: "white", borderRadius: " 12px 12px", padding: "10px 45px",
                                            fontSize: "16px", marginTop: "60px", textTransform: "capitalize"
                                        }}
                                        type="submit"
                                        variant="outlined"
                                        fullWidth
                                        size="medium" color="primary">
                                        Connect a Wallet
                                    </Button>
                                </Grid>
                                <Grid container className="link" style={{ display: "inlineflex" }}>
                                    <Grid item container>
                                        <Link href="" variant="body2">
                                            {"Registration in USxD"}
                                        </Link>
                                        <Link href="" variant="body2" style={{ textAlign: "right" }}>
                                            {"Don't have an account? "}
                                        </Link>
                                    </Grid>
                                    <Grid >
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="card" raised={true} style={{ padding: "45px", borderRadius: "30px" }}>
                                <CardActionArea>
                                    <CardContent>
                                        <h1> View account</h1>
                                    </CardContent>
                                </CardActionArea>
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    label="ID Wallet address"
                                    required
                                    fullWidth
                                    name="name"
                                    autoComplete="name"
                                />
                                <Button
                                    style={{
                                        color: "black", borderRadius: " 12px 12px", padding: "10px 95px",
                                        fontSize: "16px", textTransform: "capitalize"
                                    }}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    size="medium" color="primary">
                                    View
                                </Button>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Button variant="outlined" color="primary" onClick={handleToggle}>
                        Show backdrop
                    </Button>
                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        {/* <CircularProgress color="inherit" /> */}
                        <div className={classes.root}>
                            <Container>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} style={{ borderRadius: "35px", margin: "155px" }}>
                                            <Typography variant="h5" component="h2">
                                                <div style={{ padding: "15px 60px", borderRadius: "40px" }}>
                                                    <h3 style={{ textAlign: "left", fontSize: "32px", color: "black" }}>Select A Token</h3>
                                                    <TextField
                                                        margin="normal"
                                                        variant="outlined"
                                                        label="Search"
                                                        required
                                                        fullWidth
                                                        name="name"
                                                        autoComplete="name"
                                                    />
                                                    <Grid container spacing={3}>
                                                        <Grid item xs={12} sm={12}>
                                                            <p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./dog.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />USxD</p>
                                                            <p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./dog.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />BNB</p>
                                                            <p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./token.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />BUSD</p>
                                                            <p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./trust.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />ETH</p>
                                                            <p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./binance.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />BTC</p>

                                                            < p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./binance.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />XRP</p>
                                                            < p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./binance.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />1INCH</p>
                                                            <  p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./binance.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />PANCAKE</p>
                                                            < p style={{ borderRadius: "10px", textAlign: "left" }}>
                                                                <img src="./binance.png" alt="dog" style={{ marginRight: "20px", verticalAlign: "middle" }} />BIFI</p>

                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            </Typography>
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
export default ConfirmSubmitted