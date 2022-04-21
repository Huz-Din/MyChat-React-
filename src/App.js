import React from "react";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Router from "./pages/Router";

const App = () => {
  return (
    <Box className={styles.wrapper__message}>
      <Router />
    </Box>
  );
};

export default App;
