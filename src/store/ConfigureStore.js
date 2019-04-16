import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import createSagaMiddleware from 'redux-saga';
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter';

import rootReducer from '../redux/reducers';
import sagas from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['appReducer'], // use to save all the state in app reducer 
  debug: true, //to get useful logging
  transforms: [
    // createBlacklistFilter(
    //   'appReducer',
    //   ['count']
    // ),
    createFilter('appReducer', ['count']), // Store only a subset of your state of reducer
  ],
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistCombineReducers(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persister = persistStore(store);

const configureStore = () => {
  return { store, persister };
}

sagaMiddleware.run(sagas);

export default configureStore;