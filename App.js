import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import Login from './component/screen/login';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import allReducers from './redux/reducers/index'

const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
    </Provider>
  );
}
