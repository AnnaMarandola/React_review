import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import  ReduxStore  from "./store/index.js";

const App = () => {
  return (
    <Provider store={ReduxStore()}>
      <Routes />
    </Provider>
  );
};

export default App;
