import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./StateProvider";
import * as ServiceWorker from "./serviceWorker";
import reducer from "./reducer.jsx";
import { initialState } from "./reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </React.StrictMode>,
);

ServiceWorker.unregister();