import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useGlobalContext } from "../context";
import { SportsRugbySharp } from "@material-ui/icons";

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
  title: {},
  total: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cashflow = () => {
  const classes = useStyles();
  const { totalIncome, totalExpenses, cashflowValue } = useGlobalContext();
  return (
    <Paper className={classes.root} elevation={3}>
      <Grid container spacing={2}>
        {/* row */}
        <Grid item xs={3}>
          <Typography variant="h4" color="primary">
            Cash Flow
          </Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Typography>Monthly</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={3}>
          <Typography>Total Income</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Typography>{totalIncome}$</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={3}>
          <Typography>Total Expenses</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Typography>{totalExpenses}$</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={3}>
          <Typography>Total Cash Flow</Typography>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Typography className={classes.total}>{cashflowValue}$</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Cashflow;
