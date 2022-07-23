import { configureStore, compose, applyMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = composeWithDevTools((window as any).__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose)

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig,  rootReducer)

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false})
    .concat(thunk)
  },
);

store.subscribe(() => console.info(store.getState()))

export const persistor = persistStore(store);
export default store;