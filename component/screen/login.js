import React, { useState, useEffect, useRef } from 'react';
import Toast from 'react-native-easy-toast';
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
import { common } from '../utility/common'

export default function Login({ navigation }) {
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
                point: userData[userIndex].point
            }
            dispatch(userLogin(user_login));
            // navigation?.navigate('Menu');
        }
        else {
            if (staffId.trim() === '' && password.trim() === '') {
                staffIdRef.current.focus();
                common.Dialog("Notification", "Please input staffid and password")
                // toastRef.current.show("Please input staffid and password")
            }
            else if (staffId.trim() === '') {
                staffIdRef.current.focus();
                common.Dialog("Notification", "Please input staffId")
            }
            else if (password.trim() === '') {
                passwordRef.current.focus();
                common.Dialog("Notification", "Please input password")
            }
            else {
                common.Dialog("Notification", "Incorrect staffid or password")
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
            {/* <Toast ref={toastRef} position='top' /> */}
        </View>

    );
}

const styles = StyleSheet.create({
    btnLogin: {
        backgroundColor: "#259269",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    }
});
