import { createStore } from 'redux';
import createSecureStore from "redux-persist-expo-securestore";
import { combineReducers } from "redux";
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';
//import storage from 'redux-persist/lib/storage'; // for web

//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import CartReducer from '../reducers/cartReducer'; // the value from combineReducers

// Secure storage
const secureStorage = createSecureStore();

const securePersistConfig = {
    key: "secure",
    storage: secureStorage
};

// Non-secure (AsyncStorage) storage
// const mainPersistConfig = {
//     key: "main",
//     storage: AsyncStorage
//   };

// const persistConfig = {
//  key: 'root',
//  storage: storage,
//  whitelist: ['cartReducer']
// //  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// };

// Combine them together
const rootReducer = combineReducers({
    //main: persistReducer(mainPersistConfig, mainReducer),
    cartReducer: persistReducer(securePersistConfig, CartReducer)
  });

//const pReducer = persistCombineReducers(persistConfig, rootReducers);

export const store = createStore(rootReducer);
export const persistor = persistStore(store)