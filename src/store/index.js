
import { createStore, applyMiddleware, compose } from "redux";
import promiseMiddleware from "redux-promise";
import logger from "redux-logger";
import appReducers from "./reducers/index.js";

const ReduxStore = () => {
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

  const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(promiseMiddleware, logger))
  );
  return store;
};

export default ReduxStore;