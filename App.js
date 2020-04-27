import React from 'react';
import Navigator from './navigations/main'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from "./redux/store/";

export default function App() {
  return (
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Navigator></Navigator>
      </PersistGate>
    </Provider>
  );
}
