import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import "./index.css";
import App from "./components/App";
import movies from "./reducers";

const store = createStore(movies);

console.log("s", store);
// console.log("old state", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ Name: "SuperMan" }],
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
