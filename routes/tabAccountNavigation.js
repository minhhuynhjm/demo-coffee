import React from 'react'
import AccountInfomation from '../component/screen/accountInfomation';
import Management from '../component/screen/management';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabAccountNavigation() {
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { textTransform: 'capitalize' },
        }}>
            <Tab.Screen name="Account Information" component={AccountInfomation} />
            <Tab.Screen name="Management" component={Management} />
        </Tab.Navigator>
    );
}