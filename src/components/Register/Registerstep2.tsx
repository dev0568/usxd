import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { ErrorOutlineRounded } from '@material-ui/icons';
import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import './Register.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        button: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }),
);

function getSteps() {
    return ['Step1', 'Step2', 'Step3'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return 'Step1';
        case 1:
            return 'Step2';
        case 2:
            return 'Step3';
        default:
            return 'Unknown step';
    }
}
const Registerstep2 = () => {

    useEffect(() => {
        document.title = "Register-step2"
    }, [])
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
    const steps = getSteps();

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };



    return (
        <div>
            <Container>
                <h2 className="title">Register</h2>
                <div >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Card className="card" raised={true} style={{ padding: "10px", borderRadius: "30px" }}>
                                <CardActionArea>
                                    <div style={{ textAlign: "left", padding: "15px" }}>
                                        <h1> Checklist before registration</h1>
                                        <p >1.Create a cruptocurrency wallet on the Smart Chain. Recommended wallets: Metamask, Tokenpocket,Trust.</p>
                                        <p>2. Top up your wallet with at least:</p>
                                        <p>.100 BUSD with ID address</p>
                                        <p>.200 BUSD without ID address</p>
                                        <p>It is recommended to buy cryptocurrency on Binance.com or use PancakeSwap.finance for exchange.</p>
                                        <p>3. For mobile devices: make sure you are accessing the USxD website using the Dapp browser.</p>
                                        <p> 4. For PC: go to the USxD website with the MetaMask extension installed.</p>

                                        <p>5. Before completing the registration, check your referral address</p>
                                    </div>
                                </CardActionArea>
                                <Grid container justify="center">
                                    <Button
                                        style={{
                                            color: "#47C278",
                                            borderRadius: " 12px 12px", padding: "10px 45px",
                                            fontSize: "16px", marginTop: "60px", textTransform: "capitalize"
                                        }}

                                        type="submit"
                                        variant="outlined"
                                        href="/Registerstep2dropdown"
                                        fullWidth
                                        size="medium" color="primary">
                                        Read All About Registration
                                    </Button>
                                </Grid>
                                <Grid container className="link">
                                    <Grid item container justify="center" style={{ marginTop: "20px" }}>


                                        <Link href="" variant="body2">
                                            {"Need help singing up? Write to us in support"}
                                        </Link>

                                    </Grid>

                                </Grid>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.root}>
                                <Stepper activeStep={activeStep}>
                                    {steps.map((label, index) => {
                                        const stepProps: { completed?: boolean } = {};
                                        const labelProps: { optional?: React.ReactNode } = {};
                                        if (isStepOptional(index)) {
                                            labelProps.optional = <Typography variant="caption"></Typography>;
                                        }
                                        if (isStepSkipped(index)) {
                                            stepProps.completed = false;
                                        }
                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                                <div>
                                    {activeStep === steps.length ? (
                                        <div>


                                        </div>
                                    ) : (
                                        <div>
                                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>

                                        </div>
                                    )}
                                    <Card className="card" raised={true} style={{ padding: "17px", borderRadius: "30px" }}>
                                        <CardActionArea>

                                            <CardContent>
                                                <h1> BUSD authorization</h1>
                                                <p>Confirmation of the BUSD token to interact with the USxD contract. At this step,
                                                    you do not spen BUSD yet, but only give permission that BUSD form your wallet can be spent on the contract
                                                </p>
                                                <p style={{ display: "inlineFlex" }}>
                                                    <ErrorOutlineRounded style={{ paddingRight: "10px", verticalAlign: "middle" }} />
                                                    A BNB transaction requires BNB to pay network fees
                                                </p>

                                            </CardContent>
                                        </CardActionArea>
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
                                            <MenuItem value={10}>Register with 100 BUSD by ID address </MenuItem>
                                            <MenuItem value={20}>Then, convert a pixel value to em</MenuItem>
                                            <MenuItem value={30}>convert an em value to pixels</MenuItem>
                                        </Select>
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

                                                color: "#DBDFE6", borderRadius: " 12px 12px", padding: "10px 95px",
                                                fontSize: "16px", marginTop: "10px", textTransform: "capitalize", backgroundColor: "#F3F4F7"
                                            }}

                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                            type="submit"
                                            fullWidth
                                            size="medium">
                                           
                                            Authorize BUSD
                                        </Button>
                                    </Card>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>


    )
};

export default Registerstep2