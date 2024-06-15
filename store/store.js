import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import users, { importState as importUsersState } from "./usersSlice";
import counter, { importState as importCounterState } from "./counterSlice";
import url, { importState as importUrlState } from "./urlSlice";
import texto, { importState as importTextoState } from "./textoSlice";
import timer, { importState as importTimerState } from "./timerSlice";
import booleans, { importState as importBooleansState } from "./booleansSlice";
import stylization, {
  importState as importStylizationState,
} from "./stylizationSlice";
import qrcode, { importState as importQrcodeState } from "./qrcodeSlice";

const slicesList = {
  counter,
  users,
  url,
  texto,
  timer,
  booleans,
  stylization,
  qrcode,
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
  store.importState = (importedState) => {
    store.dispatch(importUsersState(importedState));
    store.dispatch(importCounterState(importedState));
    store.dispatch(importUrlState(importedState));
    store.dispatch(importTextoState(importedState));
    store.dispatch(importTimerState(importedState));
    store.dispatch(importBooleansState(importedState));
    store.dispatch(importStylizationState(importedState));
    store.dispatch(importQrcodeState(importedState));
  };
  return { store, persistor };
};
