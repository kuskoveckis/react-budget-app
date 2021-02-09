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

const IncomeEntry = () => {
  const { income } = useGlobalContext();

  return (
    <>
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
              <IconButton color="primary" aria-label="delete expense" component="span">
                <DeleteForeverIcon color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default IncomeEntry;
