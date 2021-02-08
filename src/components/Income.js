import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

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

const Income = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>Income</Typography>
        </Grid>
      </Grid>
      {/* row */}
      <form>
        <Grid container spacing={1} direction="row" justify="flex-start">
          <Grid item xs={7}>
            <TextField fullWidth id="outlined-basic" label="Description" variant="outlined"></TextField>
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth id="outlined-basic" label="Amount" variant="outlined"></TextField>
          </Grid>
          <Grid item xs={1}>
            <IconButton color="primary" aria-label="add income" component="span">
              <AddCircleOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </form>
      {/* row */}
      {/* row */}
      <Grid container spacing={2}>
        {/* row */}
        <Grid item xs={7}>
          <Typography>Income</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>50$</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton color="primary" aria-label="delete expense" component="span">
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        </Grid>
        {/* row */}
        <Grid item xs={7}>
          <Typography>Income</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>50$</Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton color="primary" aria-label="delete expense" component="span">
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Income;
