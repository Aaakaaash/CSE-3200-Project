import {
  combineReducers,
  configureStore,
  applyMidleware,
} from "@reduxjs/toolkit";
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './toolkits/authSlice'
const reducers = combineReducers({
  auth: authSlice,
});
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer:  persistedReducer ,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store)
export default store