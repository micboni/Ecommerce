import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import { combineReducers } from "redux";

// Combina i reducer auth e cart
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});

// Applica persistConfig al rootReducer combinato
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
