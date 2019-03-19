import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Boot from './src/boot/index';
import reducer from './src/redux/reducers/index';

const store = createStore(reducer);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Boot />
      </Provider>
    );
  }
}