import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Boot from './src/boot/index';
import reducer from './src/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import sagas from './src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Boot />
      </Provider>
    );
  }
}