import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Application root element #root was not found.");
}

createRoot(rootElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

if ("serviceWorker" in navigator && import.meta.env.PROD) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {
            // The site still works normally when service worker registration is unavailable.
        });
    }, {once: true});
}
