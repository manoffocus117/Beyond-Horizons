import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./style.css";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
      <StrictMode>
            <RouterProvider router={router} />
      </StrictMode>,
);
