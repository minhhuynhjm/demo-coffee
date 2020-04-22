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

export default function TextFlex({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    Header
                </Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.footer1}>
                    <Text>Footer 1</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
                <View style={styles.footer2}>
                    <Text>Footer 2</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00f2d5',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        backgroundColor: '#ffc116',
        height: '80%'
        // flexGrow: 9,
        // flexShrink: 1,
        // flexBasis: 0 // flex:auto
    },
    footer: {
        backgroundColor: '#d12727',
        height: '20%'
        // flexGrow: 1
    },
    footer1: {
        backgroundColor: '#82fc00',
        flexGrow: 3
    },
    footer2: {
        backgroundColor: '#0fc497',
        flexGrow: 1,
    }

});