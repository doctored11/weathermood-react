import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MoodProvider } from "./context/MoodContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <MoodProvider>
      <App />
    </MoodProvider>
  </>
);
