import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import Login from './component/screen/login';

export default function App() {
  return (
      <Navigator></Navigator>
  );
}
