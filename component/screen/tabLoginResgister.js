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
import Navigator from '../../routes/homeStack'

export default function TabLoginResgister() {
    return (
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>
            <View style={styles.mainForm}>
                <Navigator></Navigator>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20
    },
    mainForm: {
        backgroundColor:'white',
        margin: 20,
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
        
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});