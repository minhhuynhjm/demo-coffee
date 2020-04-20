import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Manager from './component/screen/manager';

//import { persistor, store } from "./redux/store/secureStore";
import { persistor, store } from "./redux/store/asyncStorage";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator></Navigator>
      </PersistGate>
    </Provider>
  );
}
