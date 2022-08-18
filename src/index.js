import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/Context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </ContextProvider>
);
