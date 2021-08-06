import './Home.css'
import { Typography, } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
      },
      
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: ' #191D24',
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    
      media: {
        height: 0,
        paddingTop: '80%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
  }),
);


const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        document.title = "Home"
    }, [])

    // const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
    return (
        
        <div className="body">
            <div className={classes.root} style={{ backgroundImage: "url(/section1-blur-bg.png)",paddingTop:"100px",backgroundRepeat: 'no-repeat' }}>
                <Container maxWidth="lg" >
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={6} lg={6} style={{alignSelf:"center"}}>
                            <div style={{position:'relative'}}>
                            <p className="title_home"> Create in Decentralized Economy</p>
                            <img src="/section1-title-line.png" alt="currencyimg" width="100%" className="section-1" />
                            </div>
                            <Typography variant="subtitle1" color="textSecondary" className="maincontent">
                                <p style={{paddingTop:"40px", color: "#6D7F9C"}}>
                                    Our partners will launch later also ATM, POS, Visa and
                                    Mastercard, NFC p2p wallet, which will allow USxD to enter the
                                    real economy. They want to create a network of merchants that
                                    will accept USxD.
                                </p>
                            </Typography>
                        </Grid>
                        <Grid item xs={12}  sm={6}>
                            <img src="/section1-currency.png" alt="currencyimg" width="100%" />
                        </Grid>
                    </Grid>
                </Container>

                <Container style={{paddingTop:"140px",textAlign:"center"}}>         
                    <div>
                        <Grid container spacing={3} style={{position:"relative"}}>
                            <p className="features_sec"> Features of Dexconomy Platform and USxd Stablecoin</p>
                            <img src="/section1-title-line.png" alt="currencyimg" width="100%" className="section-2" style={{position:"absolute"}} />
                            <Typography className="section_2">
                                
                                
                            </Typography>

                        <Grid item xs={12} sm={4} >
                            <Box  bgcolor="background.paper" height="100%"  >
                            <div className="box">
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/section2-currency.png"
                                    title="Paella dish"
                                    
                                />
                                <CardContent>
                                <Typography component="p" style={{fontSize:"18px", lineHeight:"28px", color:"#191D24"}}>
                                Issuing Visa, Mastercard can withdraw money at ATMs. The system will automatically convert from USxD to Fiat
                                        </Typography>
                                </CardContent>
                            </Card>
                            </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box  bgcolor="background.paper" height="100%"  >
                            <div  className="box">
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/section2-global.png"
                                    title="Paella dish"
                                    
                                />
                                <CardContent>
                                <Typography component="p" style={{fontSize:"18px", lineHeight:"28px"}}>
                                            Global payment method
                                        </Typography>
                                </CardContent>
                            </Card>
                            </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box  bgcolor="background.paper" height="100%"  >
                            <div className="box">
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/section2-nfc.png"
                                    title="Paella dish"
                                    
                                />
                                <CardContent>
                                <Typography component="p" style={{fontSize:"18px", lineHeight:"28px"}}>
                                            GTouchless payments with NFC
                                        </Typography>
                                </CardContent>
                            </Card>
                            </div>
                            </Box>
                        </Grid>
                        </Grid>
                    </div>
                    <div style={{ display: "flex", marginTop: "50px" }}>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} >
                            <Box  bgcolor="background.paper" height="100%"  >
                            <div className="box">
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/section2-wallet.png"
                                    title="Paella dish"
                                    
                                />
                                <CardContent>
                                <Typography component="p" style={{fontSize:"18px", lineHeight:"28px"}}>
                                p2p wallet
                                        </Typography>
                                </CardContent>
                            </Card>
                            </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box  bgcolor="background.paper" height="100%"  >
                            <div className="box">
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/section2-package.png"
                                    title="Paella dish"
                                    
                                />
                                <CardContent>
                                <Typography component="p" style={{fontSize:"18px", lineHeight:"28px"}}>
                                Activate packages to earn daily, monthly and yearly
                                        </Typography>
                                </CardContent>
                            </Card>
                            </div>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Box  bgcolor="background.paper" height="100%"  >
                            <div className="box">
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/section2-network.png"
                                    title="Paella dish"
                                    
                                />
                                <CardContent>
                                <Typography component="p" style={{fontSize:"18px", lineHeight:"28px"}}>
                                Multi-Level Network Building,with 8 levels
                                        </Typography>
                                </CardContent>
                            </Card>
                            </div>
                            </Box>
                        </Grid>
                        </Grid>
                    </div>
                    
                </Container>
            </div>

            <div style={{ backgroundImage: "url()",paddingTop:"140px",backgroundRepeat: 'no-repeat' }}>
                <Container>  
                    <div style={{paddingBottom:"40px"}}>
                    <h1 style={{ fontSize: "50px", color: "black", position:"relative",marginBottom:"0px",textAlign:"center" }}>Coining Package</h1>
                    <img src="/section3-title-line.png" className="section-3" alt="currencyimg" width="100%"  />
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <img src="/section2-package.png" alt="packageimg" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Paper style={{borderRadius:"20px"}} >
                            <Typography variant="subtitle1" color="textSecondary">
                                
                                <Box style={{padding:"20px", borderRadius:"24px"}} boxShadow={3}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        <h2 style={{ textAlign: "left", fontSize: "40px", color: "black", lineHeight: "0px" }}> 500 BUSD<span style={{fontSize:"20px"}}>/Pakage</span></h2>
                                    </Typography>
                                    <Grid container spacing={3}>
                                        
                                        <Grid item xs={6}>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Daily Profit (APY)</Paper>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Duration</Paper>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Claim Lockup</Paper>
                                            
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
                                                <Paper  style={{boxShadow:"none"}} className={classes.paper}><img src="/Group.png" style={{paddingRight:"10px"}} alt="group" />0,25%</Paper>
                                                <Paper style={{boxShadow:"none",color:"#47C278",borderRadius:"50px 50px",border:" 2px solid #47C278", margin:"0px 47px", fontSize:"15px"}} className={classes.paper}>30 days</Paper>
                                                <Paper style={{boxShadow:"none"}} className={classes.paper}>48 Hour(s)</Paper>
                                            </Box>
                                        
                                        </Grid>
                                        
                                    </Grid>
                                    <Divider className={classes.divider} />
                                    <Grid container spacing={3}>
                                        
                                        <Grid item xs={6}>
                                        <Paper style={{boxShadow:"none", textAlign:"left"}} className={classes.paper}>Earned</Paper>
                                        <Paper style={{boxShadow:"none", textAlign:"left", fontWeight:700,fontSize:"18px"}} className={classes.paper}>--USxD</Paper>
                                        
                                            
                                        </Grid>
                                        <Grid item xs={6}  style={{borderRadius:"50px 50px",border:" 2px solid #DBDFE6"}}>
                                        
                                            <Grid item xs={3}>
                                            <Paper style={{boxShadow:"none"}} className={classes.paper}>Quantity to purchase</Paper>
                                            <Paper  style={{boxShadow:"none"}} className={classes.paper}>2</Paper>
                                        
                                            </Grid>

                                            
                                        </Grid>
                                        
                                    </Grid>
                                    <Button variant="contained" color="primary" style={{padding:"16px", marginTop:"20px", width:"100%",
                                    borderRadius:"12px", backgroundColor:"#47C278", fontSize:"16px",lineHeight:"24px", fontWeight:700}}>Authorize BUSD</Button>
                                    
                                    
                                </Box>
                                </Typography>
                            </Paper>    
                        </Grid>

                    </Grid>
                </Container>
            </div>  

            <div style={{ backgroundImage: "url()",paddingTop:"100px", paddingBottom:"100px",backgroundRepeat: 'no-repeat' }}>
                <Container> 
                    <div style={{position:"relative"}}>
                        <h1 style={{ fontSize: "60px",lineHeight:"84px",textAlign:"center", letterSpacing:"0em",fontWeight:700, color: "black" }}>Network Building</h1>
                        <img src="/section3-title-line.png" className="section-4" alt="currencyimg" width="100%"  />
                        <p className="get_subtitle">Get access to thousands of partners and exponential profits from infinite referrals</p>
                    </div>
                    <Grid container spacing={3} >
                        <Grid item xs={12} sm={4}>
                            <div className="box-2">
                            <Card className="card">
                                <CardMedia>
                                    <img src="/section3-network-1.png" className="card_img" alt="package" height="140" />
                                    <CardContent>
                                        <h4>Network License </h4>
                                        <h1 className="threehundred"> 300 <span className="busd">BUSD</span></h1>
                                    <p className="para"> Make aprafit with <strong style={{color:"black"}}>two</strong> Network layers</p>
                                    <p className="para">Ex: Earn 0,03% Daily of 1,000 BUSD</p>

                                    </CardContent>
                                </CardMedia>
                                <Button variant="contained"  fullWidth color="primary" className="active_btn"  >
                                    Active License
                                </Button>
                            </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="box-2">
                            <Card className="card">
                                <CardMedia>
                                    <img src="/section3-network-2.png" className="card_img" alt="package" height="140" />
                                    <CardContent>
                                        <h4>Growth Hacking License </h4>
                                        <h1 className="threehundred"> 1,200 <span className="busd">BUSD</span></h1>
                                    <p className="para"> Make aprafit with <strong style={{color:"black"}}>four</strong> Network layers</p>
                                    <p className="para">Ex: Earn 0,03% Daily of 2,000 BUSD</p>

                                    </CardContent>
                                </CardMedia>
                                <Button variant="contained"  fullWidth color="primary" className="active_btn"  >
                                    Active License
                                </Button>
                            </Card>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className="box-2">
                            <Card className="card">
                                <CardMedia>
                                    <img src="/section3-network-3.png" className="card_img" alt="package" height="140" />
                                    <CardContent>
                                        <h4>Network License </h4>
                                        <h1 className="threehundred"> 300 <span className="busd">BUSD</span></h1>
                                    <p className="para"> Make aprafit with <strong style={{color:"black"}}>eight</strong> Network layers</p>
                                    <p className="para">Ex: Earn 0,03% Daily of 4,000 BUSD</p>

                                    </CardContent>
                                </CardMedia>
                                <Button variant="contained"  fullWidth color="primary" className="active_btn"  >
                                    Active License
                                </Button>
                            </Card>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            {/* <Footer /> */}
        </div>
        
    )
};

export default Home