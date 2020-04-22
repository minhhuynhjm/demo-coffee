import React, { useState, useEffect } from 'react';
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
    AsyncStorage,
    RefreshControl
} from 'react-native';
import TabAccountNavigation from '../../routes/tabAccountNavigation'
import Header from './header'
import { globalStyles } from '../../styles/global'

export default function TabAccountManagement({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={globalStyles.content}>
                <TabAccountNavigation></TabAccountNavigation>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({

});