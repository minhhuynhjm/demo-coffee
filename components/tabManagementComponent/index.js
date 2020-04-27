import React, { } from 'react';
import { View } from 'react-native';
import TabManagement from '../../navigations/tabManagement'
import Header from '../header/index'
import { globalStyles } from '../../styles/global'

export default function TabAccountManagement() {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={globalStyles.content}>
                <TabManagement></TabManagement>
            </View>
        </View>
    );
}

