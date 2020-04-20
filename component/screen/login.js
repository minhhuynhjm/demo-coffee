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

import { globalStyles } from '../../styles/global';
import userData from '../../mock-data/userData';
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogout } from '../../redux/actions'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onClickButtonLogin = () => {
        const userIndex = userData.findIndex(x => x.staffId === username && x.password == password);
        if (userIndex !== -1) {
            let user_login = {
                staffid: username,
                password: password,
                point: userData[userIndex].point
            }
            dispatch(userLogin(user_login));
            //navigation?.navigate('Menu');
        }
        else {
            Alert.alert("Login failed");
        }

    }

    // const onClickButtonLogout = () => {
    //     dispatch(userLogout());
    // }

    // const onClickButtonState = () => {
    //     navigation?.navigate('Menu');
    // }

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
                    onPress={onClickButtonLogin}
                />
            </View>

        </View>
    );
}

