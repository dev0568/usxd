import { Typography } from "@material-ui/core";
import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Backdrop from "@material-ui/core/Backdrop";
import { Close } from "@material-ui/icons";
import Card from "@material-ui/core/Card";
import { CheckCircleOutline } from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    root: {
      flexGrow: 1,
    },

  })
);

const CoinPakageClaimSuccess = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };



  useEffect(() => {
    document.title = "CoinPakageClaimSuccess";
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url()",
          paddingTop: "140px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src="/section2-package.png" alt="packageimg" width="100%" />
            </Grid>
            <Grid item xs={6}>
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
                      <Grid item xs={6}>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Daily Profit (APY)
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Duration
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Claim Lockup
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          fontWeight="fontWeightBold"
                          fontSize="h6.fontSize"
                          m={1}
                        >
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            0,25%
                          </Paper>
                          <Paper
                            style={{
                              boxShadow: "none",
                              margin: "0px 47px",
                              fontSize: "15px",
                            }}
                            className={classes.paper}
                          >
                            30 days left
                          </Paper>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            48 Hour(s)
                          </Paper>
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Earned
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          1,250 --USxD
                        </Paper>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{
                          borderRadius: "50px 50px",
                          border: " 2px solid #DBDFE6",
                        }}
                      >
                        <Grid item xs={3}>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            Quantity to purchase
                          </Paper>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            2
                            ≈1,000 BUSD
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        padding: "16px",
                        marginTop: "20px",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "#F3F4F7",
                        color: "black",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Claim 47 : 59 : 56
                    </Button>
                  </div>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
                      <Grid item xs={6}>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Daily Profit (APY)
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Duration
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Claim Lockup
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          fontWeight="fontWeightBold"
                          fontSize="h6.fontSize"
                          m={1}
                        >
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            0,25%
                          </Paper>
                          <Paper
                            style={{
                              boxShadow: "none",
                              margin: "0px 47px",
                              fontSize: "15px",
                            }}
                            className={classes.paper}
                          >
                            10 days left
                          </Paper>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            48 Hour(s)
                          </Paper>
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Earned
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          2,632--USxD
                        </Paper>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{
                          borderRadius: "50px 50px",
                          border: " 2px solid #DBDFE6",
                        }}
                      >
                        <Grid item xs={3}>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            Quantity to purchase
                          </Paper>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            4
                            ≈2,000 BUSD
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleToggle}
                      style={{
                        padding: "16px",
                        marginTop: "20px",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "#47C278",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Claim
                    </Button>
                  </div>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
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
                      <Grid item xs={6}>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Daily Profit (APY)
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Duration
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Claim Lockup
                        </Paper>
                      </Grid>
                      <Grid item xs={6}>
                        <Box
                          fontWeight="fontWeightBold"
                          fontSize="h6.fontSize"
                          m={1}
                        >
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            0,25%
                          </Paper>
                          <Paper
                            style={{
                              boxShadow: "none",

                              borderRadius: "50px 50px",

                              margin: "0px 47px",
                              fontSize: "15px",
                            }}
                            className={classes.paper}
                          >
                            3 days left
                          </Paper>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            48 Hour(s)
                          </Paper>
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid container spacing={3}>
                      <Grid item xs={6}>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          Earned
                        </Paper>
                        <Paper
                          style={{ boxShadow: "none", textAlign: "left" }}
                          className={classes.paper}
                        >
                          0--USxD
                        </Paper>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        style={{
                          borderRadius: "50px 50px",
                          border: " 2px solid #DBDFE6",
                        }}
                      >
                        <Grid item xs={3}>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            Quantity to purchase
                          </Paper>
                          <Paper
                            style={{ boxShadow: "none" }}
                            className={classes.paper}
                          >
                            2
                            ≈500 BUSD
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        padding: "16px",
                        marginTop: "20px",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: " #F3F4F7",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Claim
                    </Button>
                  </div>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <div>
           
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              {/* <CircularProgress color="inherit" /> */}

              <div className={classes.root}>
                <Container style={{ width: "45%" }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Card
                        className="card"
                        raised={true}
                        style={{ padding: "45px", borderRadius: "30px" }}
                      >
                        <Grid>
                          <Grid container spacing={10}>
                            <Grid item xs={6}>
                              <h1> Claim Successfully</h1>
                            </Grid>
                            <Grid item xs={6} style={{ alignSelf: "center" }}>
                              <Close style={{ float: "right" }} />
                            </Grid>
                          </Grid>
                          <CheckCircleOutline
                            style={{ fontSize: "155px", color: "#47C278" }}
                          />
                        </Grid>
                        <h2>Successfully</h2>
                        <p>
                          You received 70% of what you claim and 30% went into your retirement wallet.
                        </p>
                        <Grid container spacing={3}>
                          <Grid item container xs={12}>
                            <Button
                              style={{
                                backgroundColor: "#EDF9F1",
                                color: "#47C278",
                                borderRadius: " 12px 12px",
                                padding: "10px 45px",
                                fontSize: "18px",
                                marginTop: "60px",
                                textTransform: "capitalize",
                                lineHeight: "40px",
                                fontWeight: 700
                              }}
                              type="submit"
                              variant="outlined"
                              fullWidth
                              size="medium"
                            >
                              View Retirement Wallet
                            </Button>
                          </Grid>

                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </div>
            </Backdrop>
          </div>

        </Container>
      </div>
    </div>
  );
};

export default CoinPakageClaimSuccess;
