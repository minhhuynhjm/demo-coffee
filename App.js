import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/homeStack'
import Headers from './component/common/header'
import Login from './component/screen/login';
import TabLoginResgister from './component/screen/tabLoginResgister';

export default function App() {
  return (
    <View>
      <Headers></Headers>
      <TabLoginResgister></TabLoginResgister>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
