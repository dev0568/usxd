import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { createStyles, Theme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {Settings} from '@material-ui/icons';

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

export default function OutlinedCard() {
  const classes = useStyles();

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
                        style={{ boxShadow: "none", textAlign: "left" }}
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
                      <Grid item xs={3}>
                        
                          <Settings style={{ fontSize: "30px"}}/>
                        
                        
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
                <Divider className={classes.divider} />

                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    padding: "16px",
                    marginTop: "20px",
                    width: "100%",
                    borderRadius: "12px",
                    backgroundColor: "#E7EAEE",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  Eneter An Amount
                </Button>
              </div>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}