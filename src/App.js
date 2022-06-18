import React from "react";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Router from "./pages/Router";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./hooks/AuthProvider";

const App = () => {
  return (
    <Box className={styles.wrapper__message}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Box>
  );
};

export default App;
