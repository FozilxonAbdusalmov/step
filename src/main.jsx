import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import Appv1 from "./App-v1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Appv1 />
  </StrictMode>
);
