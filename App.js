import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Boot from './src/boot/index';
import configureStore from './src/store/ConfigureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { persister, store } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persister}>
          <Boot />
        </PersistGate>
      </Provider>
    );
  }
}