import React from 'react'
import Login from '../component/screen/login';
import Register from '../component/screen/register';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabLoginNavigation() {
  return (
    <Tab.Navigator tabBarOptions={{ labelStyle: { textTransform: 'capitalize' } }}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}