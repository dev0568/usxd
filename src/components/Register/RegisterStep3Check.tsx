import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { ErrorOutlineRounded } from '@material-ui/icons';
import {CheckCircleOutline} from '@material-ui/icons'
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

const  RegisterStep3Check = () => {

    useEffect(() => {
        document.title = " RegisterStep3Check"
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
                <h1>Register</h1>
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
                                        fullWidth
                                        size="medium" color="primary">
                                        Read All About Registration
                                    </Button>
                                </Grid>
                                <Grid container className="link">
                                    <Grid item container justify="center" style={{ marginTop: "20px", color: "#191D24" }}>


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
                                                <h1 style={{ display: "inlineFlex" }}>Create an account
                                                <CheckCircleOutline style={{ color: "#5DD591",paddingRight: "10px", verticalAlign: "middle",fontSize: "40px",padding:"10px"}}/>
                                                </h1>
                                                <p>Sending 100 BUSD for registration, as well as paying network commission to BNB. After confirming the transaction, you will be registered on the platform</p>
                                                <p style={{ display: "inlineFlex" }}>
                                                <ErrorOutlineRounded style={{ paddingRight: "10px", verticalAlign: "middle" }} />
                                                    Sending BUSD directly to the contract without prior approval in the previous step will cause an error and the transaction will not go through
                                                </p>

                                            </CardContent>
                                        </CardActionArea>



                                        <Button
                                            style={{

                                                color: "#FFFFFF", borderRadius: " 12px 12px", padding: "10px 95px",
                                                fontSize: "16px", marginTop: "10px", textTransform: "capitalize", backgroundColor: "#47C278"
                                            }}

                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                            type="submit"
                                            fullWidth
                                            href="/RegisterStep3Activation"
                                            size="medium">
                                            Register Now
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

export default RegisterStep3Check