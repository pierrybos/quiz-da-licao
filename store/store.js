import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import users from "./usersSlice";
import counter from "./counterSlice";
import url from "./urlSlice";
import texto from "./textoSlice";
import timer from "./timerSlice";
import booleans from "./booleansSlice";
import stylization from "./stylizationSlice";

const slicesList = {
  counter,
  users,
  url,
  texto,
  timer,
  booleans,
  stylization,
};

const slicesListArray = Object.values(slicesList);

const combinedReducers = combineReducers(slicesList);

const persistConfig = {
  key: "root",
  storage,
  // Adicione quaisquer configurações adicionais aqui, se necessário
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const makeStore = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
