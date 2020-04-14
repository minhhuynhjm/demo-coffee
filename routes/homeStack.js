import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import Menu from '../component/screen/menu';
import TabLoginResgister from '../component/screen/tabLoginResgister';
import Header from '../component/common/header';

import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ToastAndroid,
  AsyncStorage
} from 'react-native';

const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabLoginResgister" screenOptions={{
        gestureEnabled: true, gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }} headerMode='float'>

        <Stack.Screen name="TabLoginResgister" component={TabLoginResgister} options={{
          headerShown: false
        }} />

        <Stack.Screen name="Menu" component={Menu} options={{
          headerShown: false
        }} />

        <Stack.Screen name="Header" component={Header} options={{
          headerShown: false
        }} />

        {/* <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


