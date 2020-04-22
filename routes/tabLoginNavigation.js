import React, { useEffect, useState } from 'react';
import Login from '../component/screen/login';
import Register from '../component/screen/register';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'


const Tab = createMaterialTopTabNavigator();

export default function TabLoginNavigation() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let timer1 = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer1)
    }
  }, []);

  return (
    !isLoading ? (
      <Tab.Navigator tabBarOptions={{ labelStyle: { textTransform: 'capitalize' } }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator>) : <ActivityIndicator size="small" color="#00ff00" />
  );
}