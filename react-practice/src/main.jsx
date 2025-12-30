import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./30-12-2025/React_Context/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// For Redux 

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import App from "./29-12-2025/Redux-React/app";
// import store from "./29-12-2025/Redux-React/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );


