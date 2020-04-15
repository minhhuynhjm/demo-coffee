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

import { globalStyles } from '../../styles/global'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClickLogin = () => {
        navigation.navigate('Menu')
    }

    const onClickRegister = () => {

    }

    const tabSignUp = () => {
        //navigation.navigate('Register')
    }

    return (
        <View style={{ paddingTop: 15, backgroundColor: '#FFF', flex: 1 }}>
            <Text style={globalStyles.text}>Staff ID</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setUsername(value)}
                value={username}
                placeholder={'Username'}
                autoCapitalize='none'
            />

            <Text style={globalStyles.text}>Password</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                autoCapitalize='none'
            />

            <View style={[{ margin: 10, alignItems: 'center' }]}>
                <Button
                    title="Login"
                    color="#259269"
                    onPress={onClickLogin}
                />
            </View>
        </View>
    );
}

