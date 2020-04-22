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

export default function Management({ navigation }) {
    return (
        <View>
            <Text>Management</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    flatListIiem: {
        color: "white",
        fontSize: 16,
        marginTop: 5,
    },
});