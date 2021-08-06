import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, calories: number, fat: number, carbs: number) {
  return { name, calories, fat, carbs,  };
}

const rows = [
  createData('Jul 04 2021, 12:27 AM', 1250, 875, 24),
  createData('Jun 12 2021, 08:14 PM', 237, 900, 345),
  createData('Mar 10 2021, 11:53 PM', 262, 160, 24),
  createData('Jan 28 2021, 07:41 AM', 305, 37, 67),
  
];

export default function CoiningPackageRetirementWallet() {
  const classes = useStyles();

  return (
      <Container>
           <Button
          variant="contained"
          disabled
          style={{
            margin: "2px",
            textTransform: "capitalize",
            padding: "10px",
            borderRadius: "12px",
          }}
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
           backgroundColor:"",
            borderRadius: "12px",
          }}
        >
         Package Activated
        </Button>
        <Button
          variant="contained"
         
          style={{
            margin: "2px",
            textTransform: "capitalize",
            backgroundColor: "black",
            borderRadius: "12px",
            color: "white",
            padding: "10px",
          }}
        >
          License activated
        </Button>
          <Grid container spacing={3}>
              <Grid item>
                  <div style={{display: "flex"}}>
               <p style={{fontSize: "30px",padding:"10px"}}>546 </p>
               <p style={{padding:"10px",marginTop: "38px"}}>Weeks</p>
              <p style={{fontSize: "30px",padding:"10px"}}> 03 </p>
              <p style={{padding:"10px",marginTop: "38px"}}>Days</p>
               <p style={{fontSize: "30px",padding:"10px"}}>06 </p>
               <p style={{padding:"10px",marginTop: "38px"}}>Hours</p>
               <p style={{fontSize: "30px",padding:"10px"}}>15 </p>
               <p style={{padding:"10px",marginTop: "38px"}}>Minutes</p>
               <p style={{fontSize: "30px",padding:"10px"}}>45 </p>
               <p style={{padding:"10px",marginTop: "38px"}}> Seconds</p>
              
               </div>
               <p>10 Years to unlocked</p>
              </Grid>
          </Grid>
          <Grid container spacing={3}>
          <Grid item xs={6}>
           <TextField id="outlined-basic"
            label="Total Claimed"
            margin="normal"
            fullWidth
             variant="outlined" 
             />
             </Grid>
             <Grid item xs={6}>
           <TextField id="outlined-basic" 
           label="Total Locked" 
           margin="normal"
           fullWidth
           variant="outlined" />
           </Grid>
           </Grid>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <p style={{textAlign:"left"}}>Claim History</p>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Total Claimed (USxD)</TableCell>
            <TableCell align="right">Reveived (USxD)</TableCell>
            <TableCell align="right">Locked (USxD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}