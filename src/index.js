import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import App from "./containers/App.js";
import {
  changeGeneralState,
  changeInputBox,
  changeCardState,
} from "./reducers";
//import "typeface-roboto";

const rootReducer = combineReducers({
  changeGeneralState,
  changeInputBox,
  changeCardState,
});
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
