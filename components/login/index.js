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
import userData from '../../mock_data/userData';
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogout } from '../../redux/actions'
import { Common } from '../../utilities/Common'
import { styles } from './styles'

export default function Login({ navigation }) {
    useEffect(() => {
        console.log("Login form");
    }, []);

    const toastRef = useRef();
    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');
    const staffIdRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    const onClickButtonLogin = () => {
        const trimStaffId = staffId.trim();
        const trimPassword = password.trim();
        const userIndex = userData.findIndex(x => x.staffId === trimStaffId && x.password == trimPassword);
        if (userIndex !== -1) {
            let user_login = {
                staffid: trimStaffId,
                password: trimPassword,
                point: userData[userIndex].point,
                name: userData[userIndex].name
            }
            dispatch(userLogin(user_login));
        }
        else {
            if (staffId.trim() === '' && password.trim() === '') {
                staffIdRef.current.focus();
                Common.Dialog("Notification", "Please input staffid and password")
            }
            else if (staffId.trim() === '') {
                staffIdRef.current.focus();
                Common.Dialog("Notification", "Please input staffId")
            }
            else if (password.trim() === '') {
                passwordRef.current.focus();
                Common.Dialog("Notification", "Please input password")
            }
            else {
                Common.Dialog("Notification", "Incorrect staffid or password")
            }
        }
    }

    return (
        <View style={globalStyles.viewWrapperForm}>
            <Text style={globalStyles.text}>Staff ID</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setStaffId(value)}
                value={staffId}
                placeholder={'Staff ID'}
                autoCapitalize='none'
                ref={staffIdRef}
                onSubmitEditing={() => passwordRef.current.focus()}
                returnKeyType="next"
                blurOnSubmit={false}
            />

            <Text style={globalStyles.text}>Password</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                ref={passwordRef}
                autoCapitalize='none'
                onSubmitEditing={onClickButtonLogin}
            />

            <View style={{ margin: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={onClickButtonLogin}>
                    <View style={styles.btnLogin}>
                        <Text style={styles.btnText}>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


