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

export default function Register() {

    const [signUp, setSignUp] = useState(
        { CategoryName: '', Decription: '', Parent: 0 }
    );

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClickRegister = () => {

    }

    return (
        <View style={globalStyles.viewWrapperForm}>
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
            <Text style={globalStyles.text}>Confirm Password</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                autoCapitalize='none'
            />

            <View style={{ margin: 10, alignItems: 'center' }}>
                <Button
                    title="Register"
                    color="#259269"
                    onPress={onClickRegister}
                />
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginLeft: 10
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        borderRadius: 10
    }
});