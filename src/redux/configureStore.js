// configureStore.js
// Responsible for creating and configuring the Redux Store.

import { createStore } from "redux";
import initialState from "./initialState";
import { reducer } from "./reducers/reducer";

export const configureStore = () => {
  // These enhancer is for the Redux Devtools
  // const enhancers = compose(
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // );

  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
