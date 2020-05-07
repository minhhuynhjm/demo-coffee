import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';

import rootReducer from '../reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['managementReducer'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store)