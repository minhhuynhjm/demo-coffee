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

import React, { useState, useEffect, useRef } from 'react';

function Dialog(title, message) {
    Alert.alert(
        title,
        message,
        [
            { text: "OK" }
        ],
        { cancelable: false }
    );
}
function bar() { console.log('bar') }
function baz() { foo(); bar() }

export const common = { Dialog }