import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useEffect } from 'react'
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ArrowUpward, SupervisorAccount, Twitter, Facebook, Telegram, YouTube } from '@material-ui/icons';
import './Register.css'

const RegisterStep3Activation = () => {

    useEffect(() => {
        document.title = "RegisterStep3Activation"
    }, [])

    return (
        <div>
            <Container>

                <div style={{ marginTop: "50px" }} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Card className="card" raised={true} style={{ padding: "10px", borderRadius: "30px" }}>
                                <CardActionArea>
                                    <div style={{ padding: "15px" }}>
                                        <h1> USxD community</h1>

                                        <Grid item xs={12} sm={6}>
                                            <p style={{ fontSize: "20px", display: "inlineFlex" }}>
                                                <SupervisorAccount style={{ verticalAlign: "middle", padding: "10px" }} />
                                                Community
                                            </p>
                                            <p style={{ fontSize: "20px", display: "inlineFlex" }}>
                                                <Twitter style={{ verticalAlign: "middle", padding: "10px" }} />
                                                Twitter
                                            </p>
                                            <p style={{ fontSize: "20px", display: "inlineFlex" }}>
                                                <Facebook style={{ verticalAlign: "middle", padding: "10px" }} />
                                                Facebook
                                            </p>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <p style={{ fontSize: "20px", display: "inlineFlex" }}>
                                                <Telegram style={{ verticalAlign: "middle", padding: "10px" }} />
                                                Telegram
                                            </p>
                                            <p style={{ fontSize: "20px", display: "inlineFlex" }}>
                                                <YouTube style={{ verticalAlign: "middle", padding: "10px" }} />
                                                Youtube
                                            </p>
                                        </Grid>
                                    </div>
                                </CardActionArea>
                                <Grid container justify="center">

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
                            <Card className="card" raised={true} style={{ padding: "17px", borderRadius: "30px" }}>
                                <CardActionArea>

                                    <CardContent style={{ textAlign: "left" }}>
                                        <h1>Goes activation</h1>
                                        <p>
                                            Wait for your account to be activated. You can login to your personal account
                                            after confirming the transaction in the blockchain by clicking on the login button
                                        </p>

                                    </CardContent>
                                </CardActionArea>
                                <Button
                                    style={{

                                        borderRadius: " 12px 12px", padding: "10px 95px",
                                        fontSize: "16px", marginTop: "10px", textTransform: "capitalize", backgroundColor: "#DBDFE6"
                                    }}

                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    href="/RegisterStep3Activationdone"
                                    size="medium">
                                    Login To Your Account
                                </Button>
                                <h3 style={{ color: "#47C278" }}> Blockchain Transaction
                                    <ArrowUpward />
                                </h3>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>


    )
};

export default RegisterStep3Activation