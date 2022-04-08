import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";
//стили подключил через module.
import Clock from "./clock";
import Counter from "./counter";
import Toggle from "./toggle";
import App from "./App";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    text: "disabled",
  },
  status: {
    danger: orange[500],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        <App />
        <Clock />
        <Counter />
        <Toggle />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
