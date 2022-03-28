import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import usersReucer from "./features/Users";

const store = configureStore({
  reducer: {
    users: usersReucer,
  },
});
ReactDOM.render(
  <Provider store={store}>
    <App className={"tc"} />
  </Provider>,
  document.getElementById("root")
);
