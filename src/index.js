import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import "./index.css";
import App from "./components/App";
// import rootReducer from "./reducers";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

// currying
// function logger(obj, next, action)
// logger(obj)(next)(action) internally it will work in that manner
const logger = function ({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      // middleware code
      if (typeof action !== "function") {
        console.log("ACTION_TYPE", action.type);
      }
      next(action);
    };
  };
};

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };

// we can code middleware in another way
// const logger1 = ({ dispatch, getState }) => (next) => (action) => {
//     console.log("ACTION_TYPE", action.type);
//     next(action);
//   };

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

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
