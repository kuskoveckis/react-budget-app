import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useGlobalContext } from "../context";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    // maxWidth: 1050,
    marginBottom: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Savings = () => {
  const classes = useStyles();
  const { savingsYTD, currentSavings, cashflowValue } = useGlobalContext();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2} direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <Typography>Savings</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>YTD</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Current</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>Total</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={3}>
          <Typography>Total Savings</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{savingsYTD}$</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{currentSavings}$</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{cashflowValue}$</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Savings;
