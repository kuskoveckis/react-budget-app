import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useGlobalContext } from "../context";

const useStyles = makeStyles({
  root: {
    marginBottom: 35,
    padding: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

const Savings = () => {
  const classes = useStyles();
  const { savingsYTD, currentSavings, cashflowValue } = useGlobalContext();
  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container spacing={2} direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <Typography variant="h4">Savings</Typography>
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
          <Typography variant="subtitle1">Total Savings</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{savingsYTD}$</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography>{cashflowValue}$</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.title}>{currentSavings}$</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Savings;
