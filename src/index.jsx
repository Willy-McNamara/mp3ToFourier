import App from "./components/App.jsx"
// Bring React in to build a component.
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
// create the root of the app by selection where the app should be mounted in the dom
const root = createRoot(document.getElementById("root"));

// Render our app to the dom mounted to the element with id of root inside our public/index.html file.
root.render(<App />);