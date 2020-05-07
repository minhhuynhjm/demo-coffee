import React, { useState } from 'react';
import Navigator from './navigations/main'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "./redux/store/";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}

export default function App() {
  let [fontsLoaded] = useFonts({
    'Franklin': require('./assets/fonts/Franklin-Gothic-Demi-Cond-Regular.ttf'),
    'SegoeUI': require('./assets/fonts/segoeui.ttf'),
    'SegoeUIBold': require('./assets/fonts/Segoe-UI-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Navigator></Navigator>
        </PersistGate>
      </Provider>
    );
  }
}
