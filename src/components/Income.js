import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useGlobalContext } from "../context";
import { SettingsOverscanOutlined } from "@material-ui/icons";
import IncomeEntry from "./IncomeEntry";

const useStyles = makeStyles({
  root: {
    marginBottom: 25,
    padding: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
});

const Income = () => {
  const { incomeData, income, removeIncome } = useGlobalContext();
  const [textValue, setTextValue] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextValue("");
    setIncomeAmount("");
  };

  return (
    <Paper className={classes.root} elevation={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Income</Typography>
        </Grid>
      </Grid>
      {/* row */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} direction="row" justify="flex-start">
          <Grid item xs={12} sm={7}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              value={incomeAmount}
              type="number"
              onChange={(e) => setIncomeAmount(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button type="submit" onClick={() => incomeData(textValue, incomeAmount)}>
              <AddCircleOutlineIcon color="primary" />
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* {income.length ? <IncomeEntry /> : <></>} */}
      {income.map((entry) => {
        const { id, description, amount } = entry;
        return (
          <Grid container spacing={2} key={id}>
            <Grid item xs={7} sm={7}>
              <Typography>{description}</Typography>
            </Grid>
            <Grid item xs={3} sm={4}>
              <Typography>{amount}$</Typography>
            </Grid>
            <Grid item xs={2} sm={1}>
              <IconButton color="primary" aria-label="delete expense" component="span" onClick={() => removeIncome(id)}>
                <DeleteForeverIcon color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </Paper>
  );
};

export default Income;
