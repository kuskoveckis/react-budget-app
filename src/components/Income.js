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
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { useGlobalContext } from "../context";

const useStyles = makeStyles({
  root: {
    marginBottom: 25,
    padding: 15,
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  margin: {
    marginBottom: 32,
  },
});

const Income = () => {
  const { incomeData, income, removeIncome, alert, editItem, edit, editId } = useGlobalContext();
  const [textValue, setTextValue] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const [outlined, setOutlined] = useState(true);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextValue("");
    setIncomeAmount("");
  };

  const editTextAreas = async (id) => {
    const incomeToEdit = await income.find((income) => income.id === id);
    setTextValue(incomeToEdit.description);
    setIncomeAmount(incomeToEdit.amount);
    editItem(id);
  };

  return (
    <Paper
      className={classes.root}
      variant={outlined ? "outlined" : "elevation"}
      elevation={4}
      onMouseOver={() => setOutlined(false)}
      onMouseLeave={() => setOutlined(true)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Income</Typography>
        </Grid>
      </Grid>
      {/* row */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} direction="row" className={classes.margin}>
          <Grid item xs={12} sm={7}>
            <TextField
              fullWidth
              id="outlined-basic"
              label={alert.show && alert.type === "income_text" ? alert.msg : "Description"}
              variant="outlined"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label={alert.show && alert.type === "income_amount" ? alert.msg : "Amount"}
              variant="outlined"
              value={incomeAmount}
              type="number"
              onChange={(e) => setIncomeAmount(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button type="submit" onClick={() => incomeData(textValue, incomeAmount)}>
              {edit ? <CheckCircleOutlineIcon style={{ color: "green" }} /> : <AddCircleOutlineIcon color="primary" />}
            </Button>
          </Grid>
        </Grid>
      </form>
      {income.map((entry) => {
        const { id, description, amount } = entry;
        if (edit) {
          if (id === editId) {
            return (
              <Grid container spacing={2} key={id}>
                <Grid item xs={2} sm={1}>
                  <IconButton aria-label="edit income" component="span" onClick={() => editTextAreas(id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={7} sm={6}>
                  <Typography style={{ color: "red" }}>{description}</Typography>
                </Grid>
                <Grid item xs={3} sm={4}>
                  <Typography style={{ color: "red" }}>{amount}$</Typography>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <IconButton aria-label="delete income" component="span" onClick={() => removeIncome(id)}>
                    <DeleteForeverIcon color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>
            );
          } else {
            return (
              <Grid container spacing={2} key={id}>
                <Grid item xs={2} sm={1}>
                  <IconButton aria-label="edit income" component="span" onClick={() => editTextAreas(id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </Grid>
                <Grid item xs={7} sm={6}>
                  <Typography>{description}</Typography>
                </Grid>
                <Grid item xs={3} sm={4}>
                  <Typography>{amount}$</Typography>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <IconButton aria-label="delete income" component="span" onClick={() => removeIncome(id)}>
                    <DeleteForeverIcon color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>
            );
          }
        } else {
          return (
            <Grid container spacing={2} key={id}>
              <Grid item xs={2} sm={1}>
                <IconButton aria-label="edit income" component="span" onClick={() => editTextAreas(id)}>
                  <EditIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs={4} sm={6}>
                <Typography noWrap>{description}</Typography>
              </Grid>
              <Grid item xs={3} sm={4}>
                <Typography>{amount}$</Typography>
              </Grid>
              <Grid item xs={2} sm={1}>
                <IconButton aria-label="delete income" component="span" onClick={() => removeIncome(id)}>
                  <DeleteForeverIcon color="secondary" />
                </IconButton>
              </Grid>
            </Grid>
          );
        }
      })}
    </Paper>
  );
};

export default Income;
