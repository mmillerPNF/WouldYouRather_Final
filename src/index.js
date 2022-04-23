import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { users } from "./Data";

let initialState = {
  users: users,
  currentUser: ""
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "LOG_IN":
      const selectedUser = state.users.filter(
        user => user.name === action.payload
      );
      return { ...state, currentUser: [...selectedUser] };
  }
  return state;
};

const store = createStore(reducer, initialState);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
