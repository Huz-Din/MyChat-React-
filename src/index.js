import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styles from "./index.module.css";
//стили подключил через module.
import Clock from "./clock";
import Counter from "./counter";
import Toggle from "./toggle";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.container}>
      <App />
      <Clock />
      <Counter />
      <Toggle />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
