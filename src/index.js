import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// import taskReducer
import taskReducer from "./reducers/taskReducer";

// instead of Redux's createStore function, create store using Redux Toolkit's configureStore function

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
console.log("STORE OBJECT NOW: ", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
