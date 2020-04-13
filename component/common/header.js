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

export default function Header() {
    return (
            <View>
                <View style={{ height: 100, backgroundColor: '#d5a169', flexDirection: 'row' }} />
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", margin: 15}}>
                    <Text style={{ fontSize: 30 }}>
                        INTAGE COOFFEE
                    </Text>
                </View>
            </View>
    );
}