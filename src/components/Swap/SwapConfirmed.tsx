import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Settings, HelpOutlineOutlined, WatchLaterOutlined } from '@material-ui/icons';
import Backdrop from "@material-ui/core/Backdrop";
import { Close } from "@material-ui/icons";
import Card from "@material-ui/core/Card";


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

export default function SwapConfirmed() {
    const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

    return (
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
                                                style={{ boxShadow: "none", }}
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
                                            <Grid item xs={3} style={{ padding: "30px" }}>

                                                <Settings style={{ fontSize: "20px", color: '#47C278' }} />
                                                <WatchLaterOutlined style={{ fontSize: "20px", color: '#47C278' }} />

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
                                <Grid container spacing={3}>
                                    <Grid item xs={6}>
                                        <Paper
                                            style={{ boxShadow: "none", textAlign: "left" }}
                                            className={classes.paper}
                                        >
                                            Price
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Grid item xs={3}>
                                            <Paper
                                                style={{ boxShadow: "none", color: 'black' }}
                                                className={classes.paper}
                                            >
                                                0.0030505 BNB per USxD
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>


                                <Button
                                    variant="contained"
                                    onClick={handleToggle}
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
                                    Swap
                                </Button>
                            </div>
                        </Typography>
                    </Paper>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper
                                style={{ boxShadow: "none", }}
                                className={classes.paper}
                            >
                                Minimum received<HelpOutlineOutlined />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={3}>
                                <Paper
                                    style={{ boxShadow: "none", color: 'black' }}
                                    className={classes.paper}
                                >
                                    326.492 USxD
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper
                                style={{ boxShadow: "none", }}
                                className={classes.paper}
                            >
                                Price Impact<HelpOutlineOutlined />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={3}>
                                <Paper
                                    style={{ boxShadow: "none", color: "#47C278" }}
                                    className={classes.paper}
                                >
                                    0.01%
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper
                                style={{ boxShadow: "none", }}
                                className={classes.paper}
                            >
                                Liquidity Provider Fee<HelpOutlineOutlined />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid item xs={3}>
                                <Paper
                                    style={{ boxShadow: "none", color: 'black' }}
                                    className={classes.paper}
                                >
                                    0.0025 BNB
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>


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
                <Container style={{ width: "32%" }}>
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
                            <h2>Confirm Swap</h2>
                            </Grid>
                            <Grid item xs={6} style={{alignSelf:"center"}}>
                              <Close style={{ float:"right" }} />
                            </Grid>
                          </Grid>
                          
                        </Grid>
                        <h2 style={{float:"left"}}>From</h2>
                        <p >
                        to
                        </p>
                        <p>Output is estimated. If the price changes by more than 0.5% your transaction will revert.</p>
                        <p style={{float:"left"}}>Price</p>
                        <p style={{float:"right"}}>0.0030505 BNB per USxD</p>
                        <Paper>
                        <p style={{float:"left"}}>Price Impact</p>
                        </Paper>
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
                                lineHeight:"40px",
                                fontWeight:700
                              }}
                              type="submit"
                              variant="outlined"
                              fullWidth
                              size="medium"
                            >
                                Confirm 
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
    );
}
