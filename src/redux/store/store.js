import { combineReducers, configureStore } from "@reduxjs/toolkit"
import listItemsReducer from "../features/listItems"
import storage from "redux-persist/lib/storage"
import {
  persistStore as persistReduxStore,
  persistReducer,
} from "redux-persist"

const rootReducer = combineReducers({
  listItems: listItemsReducer,
})

const persistConfig = {
  key: "todoList",
  storage,
  whitelist: ["listItems"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

const persistedStore = persistReduxStore(store)

export default store
