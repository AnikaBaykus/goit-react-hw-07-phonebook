import phoneBookReducer from './phonebook/phonebook-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
]; // логирует экшн

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development', // Отключить девтулзы для общего пользования
});

export { store };

// код, отвечающий за хранение и чтение контактов

// import storage from 'redux-persist/lib/storage';
// import {
//     persistStore,
//     persistReducer,
//   } from 'redux-persist';

// const persistConfig = {
//   key: 'subscribers',
//   storage,
// };

// const contactPersistConfig = {
//   key: 'subscriber',
//   storage,
//   blacklist: ['filter'],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(persistConfig, phoneBookReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development', // Отключить девтулзы для общего пользования
// });

// const persistor = persistStore(store);

// export { store, persistor };
