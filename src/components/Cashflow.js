import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useGlobalContext } from "../context";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: 35,
    padding: 15,
  },
  total: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const themeC = createMuiTheme();
themeC.typography.h3 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [themeC.breakpoints.up("md")]: {
    fontSize: "2.3rem",
  },
};

const Cashflow = () => {
  const classes = useStyles();
  const { totalIncome, totalExpenses, cashflowValue } = useGlobalContext();
  return (
    <Paper className={classes.root} elevation={8}>
      <Grid container spacing={2}>
        {/* row */}
        <Grid item xs={3}>
          <ThemeProvider theme={themeC}>
            <Typography variant="h3" style={{ color: "lightseagreen", fontWeight: 500 }}>
              Cash Flow
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          <Typography>Monthly</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={5} sm={3}>
          <Typography>Total Income</Typography>
        </Grid>
        <Grid item xs={4} sm={6}></Grid>
        <Grid item xs={3} sm={3}>
          <Typography>{totalIncome}$</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={5} sm={3}>
          <Typography>Total Expenses</Typography>
        </Grid>
        <Grid item xs={4} sm={6}></Grid>
        <Grid item xs={3}>
          <Typography>{totalExpenses}$</Typography>
        </Grid>
        {/* row */}
        <Grid item xs={5} sm={3}>
          <Typography>Total Cash Flow</Typography>
        </Grid>
        <Grid item xs={4} sm={6}></Grid>
        <Grid item xs={3}>
          <Typography className={classes.total} style={totalIncome >= totalExpenses ? { color: "forestgreen" } : { color: "red" }}>
            {cashflowValue}$
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Cashflow;
