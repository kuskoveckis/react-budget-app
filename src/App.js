import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import logo from "./logo.svg";
import Loading from "./components/Loading";
import Savings from "./components/Savings";
import Cashflow from "./components/Cashflow";
import Income from "./components/Income";
import Expense from "./components/Expenses";
import "./App.css";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <Box className="App">
      <Container maxWidth="md" className="margin">
        <Typography style={{ fontSize: "3.5rem", fontWeight: 600, textAlign: "center" }} className="test">
          EASY BUDGET
        </Typography>
        <Box className="greetings">
          <h1>Hi User</h1>
          <h2>Here's your monthly Budget for</h2>
          <h2>2021 February</h2>
        </Box>
        <Savings />
        <Cashflow />
        <Income />
        <Expense />
      </Container>
    </Box>
  );
}

export default App;
