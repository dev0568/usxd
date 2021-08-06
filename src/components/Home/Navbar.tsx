import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Home from '../Home/Home';
import RegisterStep2 from '../Register/Registerstep2';
import RegisterStepLoading from '../Register/RegisterStepLoading';
import Register from '../Register/Register';
import RegisterStepCheck from '../Register/RegisterStepCheck'
import RegisterStep3 from '../Register/RegisterStep3'
import RegisterStep3Loading from '../Register/RegisterStep3Loading'
import RegisterStep3Check from '../Register/RegisterStep3Check'
import RegisterStep3Activation from '../Register/RegisterStep3Activation'
import Registerstep2dropdown from '../Register/Registerstep2dropdown';
import './Navbar.css'
import RegisterStep3Activationdone from '../Register/RegisterStep3Activationdone';
import Swap from '../Swap/Swap';
import LoginConnectWallet from '../Login/LoginConnectWallet';
import RegisterConnectWallet from '../Register/RegisterConnectWallet';
import RegisterConnectWalletagree from '../Register/RegisterConnectWalletagree';
import SelectToken from '../Swap/SelectToken';
import SwapAmount from '../Swap/SwapAmount';
import SwapSetting from '../Swap/SwapSetting';
import Networkbuildinglicenseactive from '../Network/Networkbuildinglicenseactive';
import Networkbuildinglicense from '../Network/Networkbuildinglicense';
import Networkbuildinglicenseloading from '../Network/Networkbuildinglicenseloading';
import Networkbuildingactivated from '../Network/Networkbuildingactivated';
import Coiningpackage from '../Coining/Coiningpackage';
import Coiningpackageloading from '../Coining/Coiningpackageloading';
import Coiningpackageactive from '../Coining/Coiningpackageactive';
import NetworkBuildingLicenceAuthorise from '../Network/NetworkBuildingLicenceAuthorise';
import NetworkBuildingLicenceSuccess from '../Network/NetworkBuildingLicenceSuccess';
import ConfirmSubmitted from '../Swap/ConfirmSubmitted';
import CoiningPackageActivated from '../Coining/CoiningPackageActivated';
import CoiningPackageCountdownFinish from '../Coining/CoiningPackageCountdownFinish';
import CoiningPackageDurationFinish from '../Coining/CoiningPackageDurationFinish';
import CoinPakageClaimSuccess from '../Coining/CoinPakageClaimSuccess';
import CoinPakageSuccess from '../Coining/CoinPakageSuccess';
import CoiningPackageRetirementWallet from '../Coining/CoiningPackageRetirementWallet';
import CoinPakageClaim from '../Coining/CoinPakageClaim';
import CoiningPackageDuration from '../Coining/CoiningPackageDuration';
import CoiningPackageDuration1 from '../Coining/CoiningPackageDuration1';
import SwapConfirmed from '../Swap/SwapConfirmed';
import Sidebar from './Sidebar';
import SidebarFooter from './SidebarFooter';
import CardTest from '../CardTest';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <div className="typo">
                    <AppBar position="static" style={{ backgroundColor: "#ffffff", color: "black" }}>
                        <Toolbar>
                            <Grid  spacing={4} container>
                                <Grid item lg={4} style={{textAlign:"right", paddingRight:"8%" }}>
                                    <IconButton edge="start"  className={classes.menuButton} color="inherit" aria-label="menu" href="/home">
                                        <img src="/logo.png" alt="logo"  />
                                    </IconButton>
                                </Grid>  
                                <Grid item style={{alignSelf:"center"}}>
                                    <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                        <Link className="id" to=""><ListItem button key={'Home'}><ListItemText primary={'What is USxD?'} style={{ color: "#122a4d", fontSize: "20px" }} /></ListItem >
                                        </Link>
                                    </Typography>
                                </Grid>

                                <Grid item className="grid">
                                    <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                        <Link className="id" to="/">
                                            <ListItem button key={'Memberships'}>
                                                <ListItemText primary={'Features of USxD'} style={{ color: "#122a4d", textDecoration: "nome" }} />
                                            </ListItem>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item className="grid">
                                    <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                        <Link className="id" to="">
                                            <ListItem button key={'Activity'}>
                                                <ListItemText primary={'Coining Package'} style={{ color: "#122a4d" }} />
                                            </ListItem>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item className="grid">
                                    <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                        <Link className="id" to="">
                                            <ListItem button key={' Engage'}>
                                                <ListItemText primary={'Network Building'} style={{ color: "#122a4d" }} />
                                            </ListItem>
                                        </Link>
                                    </Typography>
                                </Grid>
                              
                                <Grid item className="grid">
                                    
                                    <Typography className={classes.title} style={{ fontSize: "14px" }}>
                                        <Link className="id" to="/Register">
                                        <Button variant="contained" color="primary" style={{ backgroundColor: "#47C278", borderRadius: "12px",padding:"12px 16px", fontSize:"16px", fontWeight:700, lineHeight:"24px" }}>Launch App 
                                                
                                                </Button>
                                        </Link>
                                    </Typography>
                                </Grid>
                                <Grid item className="grid" style={{ paddingLeft: "0px" }}>
                                    <Button className={classes.menuButton} href="/Login" >
                                        <img src="/Vector.png" 
                                        alt="Vector" />
 
                                    </Button>
                                </Grid>
                            </Grid>

                        </Toolbar>
                    </AppBar>
                </div>
            </div>
            <Switch>
                <Route path="/Home">
                    <Home />
                    <Footer />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Registerstep2">
                    <RegisterStep2 />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/RegisterStepLoading">
                    <RegisterStepLoading />
                </Route>
                <Route path="/RegisterStepCheck">
                    <RegisterStepCheck />
                </Route>
                <Route path="/RegisterStep3">
                    <RegisterStep3 />
                </Route>
                <Route path="/RegisterStep3Loading">
                    <RegisterStep3Loading />
                </Route>
                <Route path="/RegisterStep3Check">
                    <RegisterStep3Check />
                </Route>
                <Route path="/RegisterStep3Activation">
                    <RegisterStep3Activation />
                </Route>
                <Route path="/Registerstep2dropdown">
                    <Registerstep2dropdown />
                </Route>
                <Route path="/RegisterStep3Activationdone">
                    <RegisterStep3Activationdone />
                </Route>
                <Route path="/Swap">
                    <Swap />
                </Route>
                <Route path="/LoginConnectWallet">
                    <LoginConnectWallet />
                </Route>
                <Route path="/RegisterConnectWallet">
                    <RegisterConnectWallet />
                </Route>
                <Route path="/RegisterConnectWalletagree">
                    <RegisterConnectWalletagree />
                </Route>
                <Route path="/SelectToken">
                    <SelectToken />
                </Route>
                <Route path="/SwapAmount">
                    <SwapAmount />
                </Route>
                <Route path="/SwapSetting">
                    <SwapSetting />
                </Route>
                <Route path="/Networkbuildinglicenseactive">
                    <Networkbuildinglicenseactive />
                </Route>
                <Route path="/Networkbuildinglicense">
                    <Networkbuildinglicense />
                </Route>
                <Route path="/Networkbuildinglicenseloading">
                    <Networkbuildinglicenseloading />
                </Route>
                <Route path="/Networkbuildingactivated">
                    <Networkbuildingactivated />
                </Route>
                <Route path="/Coiningpackage">
                    <Coiningpackage />
                </Route>
                <Route path="/Coiningpackageloading">
                    <Coiningpackageloading />
                </Route>
                <Route path="/Coiningpackageactive">
                    <Coiningpackageactive />
                </Route>
                <Route path="/NetworkBuildingLicenceAuthorise">
                    <NetworkBuildingLicenceAuthorise />
                </Route>
                <Route path="/NetworkBuildingLicenceSuccess">
                    <NetworkBuildingLicenceSuccess />
                </Route>
                <Route path="/ConfirmSubmitted">
                    <ConfirmSubmitted />
                </Route>
                <Route path="/CoiningPackageActivated">
                    <CoiningPackageActivated />
                </Route>
                <Route path="/CoiningPackageCountdownFinish">
                    <CoiningPackageCountdownFinish />
                </Route>
                <Route path="/CoiningPackageDurationFinish">
                    <CoiningPackageDurationFinish />
                </Route>
                <Route path="/CoinPakageClaimSuccess">
                    <CoinPakageClaimSuccess />
                </Route>
                <Route path="/CoinPakageSuccess">
                    <CoinPakageSuccess />
                </Route>
                <Route path="/CoinPakageClaim">
                    <CoinPakageClaim />
                </Route>
                <Route path="/CoiningPackageRetirementWallet">
                    <CoiningPackageRetirementWallet />
                </Route>
                <Route path="/CoiningPackageDuration">
                    <CoiningPackageDuration />
                </Route>
                <Route path="/CoiningPackageDuration1">
                    <CoiningPackageDuration1 />
                </Route>
                <Route path="/SwapConfirmed">
                    <SwapConfirmed />
                </Route>
                <Route path="/Sidebar">
                    <Sidebar />
                </Route>
                <Route path="/SidebarFooter">
                    <SidebarFooter />
                </Route>
            </Switch>
        </Router>
    );
}