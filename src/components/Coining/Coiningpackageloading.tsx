import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

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
  })
);

const Coiningpackageloading = () => {
  const classes = useStyles();

  useEffect(() => {
    document.title = "Coiningpackageloading";
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
        <Button
          variant="contained"
          href="#contained-buttons"
         
          style={{  backgroundColor: "black",color:"#FFFFF0", textTransform: "capitalize",borderRadius: "12px",padding: "10px", }}
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
          style={{ margin: "2px", textTransform: "capitalize",borderRadius: "12px", padding: "10px",}}
        >
          Retirement Wallet
        </Button>
        
        
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
                              color: "#47C278",
                              borderRadius: "50px 50px",
                              border: " 2px solid #47C278",
                              margin: "0px 47px",
                              fontSize: "15px",
                            }}
                            className={classes.paper}
                          >
                            30 days
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
                          --USxD
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
                        backgroundColor: "#47C278",
                        fontSize: "16px",
                        lineHeight: "24px",
                      }}
                    >
                      Authorize BUSD
                    </Button>
                  </div>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Coiningpackageloading;
