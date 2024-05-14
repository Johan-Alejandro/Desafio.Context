import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PictureProvider from "./Context/PictureContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PictureProvider>
        <App />
      </PictureProvider>
    </BrowserRouter>
  </React.StrictMode>
);
