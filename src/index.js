import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";
import { setCurrent } from "./redux/actions";

import Drawer from "material-ui/Drawer";

import Grid from "./component/ui/Grid";
import AppBar from "./component/ui/AppBar";

var store = configureStore();

store.subscribe(function() {
  console.log("Store Update:", store.getState());
});

// Initialize the Quiz with a random questions
store.dispatch(setCurrent());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppBar />
      <Drawer type="permanent" />
      <Grid />
    </div>
  </Provider>,
  document.getElementById("root")
);
