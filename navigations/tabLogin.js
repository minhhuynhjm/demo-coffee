import React from 'react';
import Login from '../components/login/index';
import Register from '../components/register/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabLoginNavigation() {
    return (
        <Tab.Navigator tabBarOptions={{ labelStyle: { textTransform: 'capitalize', fontFamily: 'SegoeUIBold', fontSize: 14 } }}>
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
    );
}