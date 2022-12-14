import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { pizzasReducer } from "./pizzasReducer"
import { cartReducer } from "./cartSlice";

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { deliveryFormReducer } from "./deliveryFormSlice";
import { optionReducer } from "./optionsSlice";
import { searchReducer } from "./pizzasSearchSlice";
import { filterReducer } from "./pizzasFilterSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'options']
}

const rootReducer = combineReducers({
    pizzas: pizzasReducer,
    cart: cartReducer,
    form: deliveryFormReducer,
    options: optionReducer,
    searchvalue: searchReducer,
    activeCategory: filterReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store) 
export default store
