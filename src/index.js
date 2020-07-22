import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import PricelistReducer from "./store/reducers/pricelistReducer";
import AuthReducer from "./store/reducers/authReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const rootReducer = combineReducers({
  FetchPricelist: PricelistReducer,
  Auth: AuthReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
