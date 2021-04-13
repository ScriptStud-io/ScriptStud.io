import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route render={({ history }) => <App history={history} />} />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);