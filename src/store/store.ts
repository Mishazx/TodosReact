import { createStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);

store.subscribe(() => {
  console.log('State : ', store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;