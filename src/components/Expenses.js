import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useGlobalContext } from "../context";

const useStyles = makeStyles({
  root: {
    marginBottom: 15,
    padding: 15,
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
  margin: {
    marginBottom: 32,
  },
});

const Expense = () => {
  const classes = useStyles();
  const { expenseData, expenses, removeExpense, alert, editItem, edit, editId, refTextE, refAmountE } = useGlobalContext();
  const [expenseDesc, setExpenseDesc] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [outlined, setOutlined] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenseDesc("");
    setExpenseAmount("");
  };

  const editTextAreas = async (id) => {
    const expenseToEdit = await expenses.find((expense) => expense.id === id);
    setExpenseDesc(expenseToEdit.description);
    setExpenseAmount(expenseToEdit.amount);
    editItem(id);
  };

  return (
    <Paper
      className={classes.root}
      elevation={2}
      variant={outlined ? "outlined" : "elevation"}
      elevation={4}
      onMouseOver={() => setOutlined(false)}
      onMouseLeave={() => setOutlined(true)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Expense</Typography>
        </Grid>
      </Grid>
      {/* row */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1} direction="row" justify="flex-start" className={classes.root}>
          <Grid item xs={12} sm={7}>
            <TextField
              fullWidth
              id="outlined-basic"
              label={alert.show && alert.type === "expense_text" ? alert.msg : "Description"}
              variant="outlined"
              value={expenseDesc}
              onChange={(e) => setExpenseDesc(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="outlined-basic"
              label={alert.show && alert.type === "expense_amount" ? alert.msg : "Amount"}
              variant="outlined"
              value={expenseAmount}
              type="number"
              onChange={(e) => setExpenseAmount(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Button type="submit" onClick={() => expenseData(expenseDesc, expenseAmount)}>
              <AddCircleOutlineIcon color="primary" />
            </Button>
          </Grid>
        </Grid>
      </form>
      {expenses.map((entry) => {
        const { id, description, amount } = entry;
        if (edit) {
          if (editId === id) {
            return (
              <Grid container spacing={2} key={id}>
                <Grid item xs={2} sm={1}>
                  <IconButton aria-label="edit expense" component="span" onClick={() => editTextAreas(id)}>
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
                  <IconButton color="primary" aria-label="delete expense" component="span" onClick={() => removeExpense(id)}>
                    <DeleteForeverIcon color="secondary" />
                  </IconButton>
                </Grid>
              </Grid>
            );
          } else {
            return (
              <Grid container spacing={2} key={id}>
                <Grid item xs={2} sm={1}>
                  <IconButton aria-label="edit expense" component="span" onClick={() => editTextAreas(id)}>
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
                  <IconButton color="primary" aria-label="delete expense" component="span" onClick={() => removeExpense(id)}>
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
                <IconButton aria-label="edit expense" component="span" onClick={() => editTextAreas(id)}>
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
                <IconButton color="primary" aria-label="delete expense" component="span" onClick={() => removeExpense(id)}>
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

export default Expense;
