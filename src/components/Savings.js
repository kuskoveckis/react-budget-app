import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useGlobalContext } from "../context";

const useStyles = makeStyles({
  root: {
    marginBottom: 35,
    padding: 15,
  },
  title: {
    fontSize: 25,
  },
  pos: {
    marginBottom: 12,
  },
});

const theme = createMuiTheme();
theme.typography.h3 = {
  fontSize: "1.3rem",
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
  },
};

theme.typography.h6 = {
  fontSize: "1rem",
  "@media (min-width:600px)": {
    fontSize: "1.9rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
};

const Savings = () => {
  const classes = useStyles();
  const { savingsYTD, currentSavings, cashflowValue } = useGlobalContext();
  return (
    <Paper className={classes.root} elevation={10}>
      <Grid container spacing={2} direction="row" justify="center" alignItems="center">
        <Grid item xs={3}>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" style={{ color: "forestgreen", fontWeight: 700 }}>
              Savings
            </Typography>
          </ThemeProvider>
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
          <ThemeProvider theme={theme}>
            <Typography
              // className={classes.title}
              variant="h6"
              fontWeight="fontWeightBold"
              style={currentSavings >= savingsYTD ? { color: "forestgreen", fontWeight: 800 } : { color: "red" }}
            >
              {currentSavings}$
            </Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Savings;
