import { createStore, applyMiddleware, Store } from "redux";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import logger from "redux-logger";

const persistedReducer = persistReducer({ key: "root" }, reducer);
export const store: Store = createStore(
  persistedReducer,
  {},
  applyMiddleware(logger)
);
export const persiststore: Persistor = persistStore(store);
