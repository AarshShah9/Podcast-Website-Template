import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { EpisodeContextProvider } from "./context/episodeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EpisodeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EpisodeContextProvider>
  </React.StrictMode>
);
