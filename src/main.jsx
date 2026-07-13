import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Application root element #root was not found.");
}

rootElement.replaceChildren();

createRoot(rootElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
