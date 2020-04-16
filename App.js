import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import Login from './component/screen/login';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import CartReducer from './redux/reducers/cartReducer'


const store = createStore(CartReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
}
