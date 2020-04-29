import React, { } from 'react';
import { View, SafeAreaView } from 'react-native';
import TabManagement from '../../navigations/tabManagement'
import Header from '../header/index'
import { globalStyles } from '../../styles/global'

export default function TabAccountManagement() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={globalStyles.content}>
                <TabManagement></TabManagement>
            </View>
        </SafeAreaView>
    );
}

