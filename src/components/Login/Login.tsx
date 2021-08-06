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
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {CheckBox} from '@material-ui/icons';
import {Close} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import  './Login.css'
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
  }),
);
const Login = () => {
    const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
    useEffect(() => {
        document.title = "Login"
    }, [])
    return (
        <div>
            <Container style={{padding:"40px"}}>
            <h4 className="log_in">Login</h4>
                <div>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={6}>
                        <Card className="card" raised={true} style={{ padding:"20px", borderRadius: "30px"  }}>
                            <CardActionArea>
                                <h1> Login to Personad USxB</h1>
                                <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging</p>
                            </CardActionArea>
                            <Grid container justify="center">
                                <Button
                                    style={{
                                        backgroundColor: "#47C278",
                                        color: "white", borderRadius: " 12px 12px", padding: "10px 45px",
                                        fontSize: "16px", marginTop: "60px",textTransform: "capitalize"
                                    }}
                                    type="submit"
                                    variant="outlined"
                                    fullWidth
                                    size="medium" color="primary">
                                    Connect a Wallet
                                </Button>
                            </Grid>
                            <Grid container className="link">
                                <Grid item sm={6} style={{padding:"20px"}} >


                                    <Link href="" variant="body2">
                                        {"Don't have an account? "}
                                    </Link>

                                </Grid>
                                <Grid item sm={6} style={{padding:"20px"}}>
                                    <Link href="" variant="body2" style={{color:"#47C278"}}>
                                        {"Registration in USxD"}
                                        
                                    </Link>

                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className="card" raised={true} style={{ padding:"45px", borderRadius: "30px"  }}>
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
                                    onClick={handleToggle}
                                    size="medium" color="primary">
                                   View
                                </Button>
                                
                        </Card>
                    </Grid>
                </Grid>
                </div>

                <div>
                  
                    <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                        <div className={classes.root}>
                            <Container>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                <Paper className={classes.paper} style={{borderRadius:"35px", margin:"155px"}}>
                                <Typography variant="h5" component="h2">
                                    <div style={{padding:"15px 60px", borderRadius:"40px"}}>
                                        <h3 style={{textAlign:"left", fontSize:"32px",color:"black"}}>Connect a wallet  </h3>
                                        <p style={{border:"1px solid lightgrey", borderRadius:"10px", padding:"25px"}}><CheckBox style={{padding:"10px",verticalAlign:"middle", color:"#47C278"}} />I have read, understand, and agree to the Terms of Service.<Close style={{float:"right"}} /> </p>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                            <p style={{border:"1px solid lightgrey", borderRadius:"10px", padding:"33px"}}>
                                                <img src="./dog.png" alt="dog" style={{marginRight:"20px", verticalAlign:"middle"}} />MetaMask</p>
                                            <p style={{border:"1px solid lightgrey", borderRadius:"10px", padding:"33px"}}>
                                            <img src="./dog.png"  alt="dog"  style={{marginRight:"20px", verticalAlign:"middle"}} />WalletConnect</p>
                                            <p style={{border:"1px solid lightgrey", borderRadius:"10px", padding:"33px"}}>
                                                <img src="./token.png"  alt="dog"  style={{marginRight:"20px", verticalAlign:"middle"}} />Tokenpocket Wallet</p>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                            <p style={{border:"1px solid lightgrey", borderRadius:"10px", padding:"33px"}}>
                                                <img src="./trust.png"  alt="dog"  style={{marginRight:"20px", verticalAlign:"middle"}} />Trust Wallet</p>
                                            <p style={{border:"1px solid lightgrey", borderRadius:"10px", padding:"33px"}}>
                                                <img src="./binance.png"  alt="dog"  style={{marginRight:"20px", verticalAlign:"middle"}} />Binance Chain Wallet</p>
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
export default Login