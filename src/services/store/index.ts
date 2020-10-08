import { createStore, applyMiddleware, Store, Middleware } from "redux";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { reducer } from "../reducers";
import { rootSaga } from "../sagas";

const bindMiddleware = (middleware: Middleware[]) => {
  const { composeWithDevTools } = require("redux-devtools-extension");
  return composeWithDevTools(applyMiddleware(...middleware));
};

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore: MakeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: false });
