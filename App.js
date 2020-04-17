import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import Login from './component/screen/login';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import allReducers from './redux/reducers/index'
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import { PersistGate } from 'redux-persist/integration/react'


// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
// };

// const pReducer = persistReducer(persistConfig, allReducers);

// export const store = createStore(pReducer);
// export const persistor = persistStore(store);

const store = createStore(allReducers);
// 2 props loading và persistor đều yêu cầu phải có

export default function App() {
  return (
    <Provider store={store}>
      <Navigator></Navigator>
      {/* <PersistGate loading={null} persistor={persistor}>
        
      </PersistGate> */}
      {/* <Navigator></Navigator> */}
    </Provider>
  );
}
