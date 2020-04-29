import React from 'react'
import AccountInfomation from '../components/accountInfomation/index';
import Management from '../components/management/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabAccountNavigation() {
    return (
        <Tab.Navigator tabBarOptions={{ labelStyle: { textTransform: 'capitalize' }, }}>
            <Tab.Screen name="Account Information" component={AccountInfomation} />
            <Tab.Screen name="Management" component={Management} />
        </Tab.Navigator>
    );
}