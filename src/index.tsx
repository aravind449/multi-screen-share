import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider
import store from "./store"; // Import your Redux store
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "dark", // Use dark mode
    primary: {
      main: "#f44336", // Red color for primary buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "white", // Text color for primary contained buttons
          backgroundColor: "#f44336", // Background color for primary contained buttons
          "&:hover": {
            backgroundColor: "#d32f2f", // Darker background color on hover
          },
        },
      },
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
