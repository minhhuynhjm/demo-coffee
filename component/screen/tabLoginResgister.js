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
    AsyncStorage
} from 'react-native';
import TabNavigation from '../../routes/tabNavigation'
import Header from './header'

export default function TabLoginResgister() {
    return (
        <View>
            <Header></Header>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                <View style={styles.mainForm}>
                    <TabNavigation></TabNavigation>
                </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    mainForm: {
        backgroundColor: 'white',
        padding: 30,
        width: 300,
        height: 500,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderRadius: 20,
        elevation: 9,

    }
});