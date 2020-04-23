import React, { useRef } from 'react';
import Toast from 'react-native-easy-toast';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from './redux/reducers/index'

// import { persistor, store } from "./redux/store/secureStore";
import { persistor, store } from "./redux/store/asyncStorage";

// const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Navigator></Navigator>
      </PersistGate>
    </Provider>
  );
}
