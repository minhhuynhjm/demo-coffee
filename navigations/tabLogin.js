import React, { useEffect, useState } from 'react';
import Login from '../components/login/index';
import Register from '../components/register/index';
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
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { textTransform: 'capitalize' }

        }}>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    );
}