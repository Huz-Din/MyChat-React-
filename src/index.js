import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";
import App from "./App";
import { orange } from "@mui/material/colors";
import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/index";
import persistor from "./store/index";
import { PersistGate } from "redux-persist/integration/react";

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
    <Provider store={store}>
      <PersistGate persistor={persistor} loadings={<CircularProgress />}>
        <ThemeProvider theme={theme}>
          <div className={styles.container}>
            <App />
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
