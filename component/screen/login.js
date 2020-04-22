import React, { useState, useEffect, useRef } from 'react';
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
    const txtUsername = useRef(null);
    const txtPassword = useRef(null);
    const dispatch = useDispatch();

    const onClickButtonLogin = () => {
        const trimStaffId = username.trim();
        const trimPassword = password.trim();
        console.log(trimStaffId);
        console.log(trimPassword);
        const userIndex = userData.findIndex(x => x.staffId === trimStaffId && x.password == trimPassword);
        if (userIndex !== -1) {
            let user_login = {
                staffid: trimStaffId,
                password: trimPassword,
                point: userData[userIndex].point
            }
            dispatch(userLogin(user_login));
            //navigation?.navigate('Menu');
        }
        else {

            if (username.trim() === '' && password.trim() === '') {
                txtUsername.current.focus();
                Alert.alert(
                    "Notification",
                    "Please input staffid and password !",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
            }
            else {
                Alert.alert(
                    "Notification",
                    "Please input staffId and password !",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                );
            }
            //alert("Login failed");
        }
    }

    // const onClickButtonLogout = () => {
    //     dispatch(userLogout());
    // }

    // const onClickButtonState = () => {
    //     navigation?.navigate('Menu');
    // }

    return (
        <View style={globalStyles.viewWrapperForm}>
            <Text style={globalStyles.text}>Staff ID</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setUsername(value)}
                value={username}
                placeholder={'Username'}
                autoCapitalize='none'
                ref={txtUsername}
                onSubmitEditing={() => txtPassword.current.focus()}
                returnKeyType="next"
            />

            <Text style={globalStyles.text}>Password</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                ref={txtPassword}
                autoCapitalize='none'
                onSubmitEditing={onClickButtonLogin}
            />

            <View style={{ margin: 10, alignItems: 'center' }}>
                <Button
                    title="Login"
                    color="#259269"
                    onPress={onClickButtonLogin}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

});
