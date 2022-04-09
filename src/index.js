import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";
//стили подключил через module.
import App from "./App";
import { orange } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

//тема проекта
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
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
