import React, { useState, useRef } from 'react';
import axios from 'axios'
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';
import userData from '../../mock_data/userData';
import { useDispatch } from "react-redux";
import { userLogin } from '../../redux/actions'
import { DialogInfo } from '../../utilities/Common'
import { styles } from './styles'
import { MESSAGE } from '../../constants';
import { LoginAuthentication } from '../../api/webServer/accountService'


export default function Login() {
    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');
    const staffIdRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    const onClickButtonLogin = () => {
        const trimStaffId = staffId?.trim();
        const trimPassword = password?.trim();
        if (trimStaffId === '' && trimPassword === '') {
            staffIdRef.current.focus();
            DialogInfo(MESSAGE.EMPTY_STAFF_PASSWORD)
        }
        else if (trimStaffId === '') {
            staffIdRef.current.focus();
            DialogInfo(MESSAGE.EMPTY_STAFFID)
        }
        else if (trimPassword === '') {
            passwordRef.current.focus();
            DialogInfo(MESSAGE.EMPTY_PASSWORD)
        }
        else {
            // console.log("staff_id:", trimStaffId);
            // console.log("password:", trimPassword);
            LoginAuthentication(trimStaffId, trimPassword).then(function (response) {
                console.log(response.data);
                dispatch(userLogin(response.data));
            }).catch(function (error) {
                console.log(error.response);
                DialogInfo(MESSAGE.LOGIN_FAILD)
            });
            // axios
            //     .post("http://192.168.50.96:8080/user/login", {
            //         staff_id: "01234516789",
            //         password: "12345678"
            //     })
            //     .then(result => {
            //         console.log(result);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
        }

        // const userIndex = userData.findIndex(x => x.staffId === trimStaffId && x.password == trimPassword);
        // if (userIndex !== -1) {
        //     let user_login = {
        //         staffid: trimStaffId,
        //         password: trimPassword,
        //         point: userData[userIndex].point,
        //         name: userData[userIndex].name,
        //         age: userData[userIndex].age,
        //         gender: userData[userIndex].gender,
        //     }
        //     dispatch(userLogin(user_login));
        // }
        // else {
        //     if (trimStaffId === '' && trimPassword === '') {
        //         staffIdRef.current.focus();
        //         DialogInfo(MESSAGE.EMPTY_STAFF_PASSWORD)
        //     }
        //     else if (trimStaffId === '') {
        //         staffIdRef.current.focus();
        //         DialogInfo(MESSAGE.EMPTY_STAFFID)
        //     }
        //     else if (trimPassword === '') {
        //         passwordRef.current.focus();
        //         DialogInfo(MESSAGE.EMPTY_PASSWORD)
        //     }
        //     else {
        //         DialogInfo(MESSAGE.LOGIN_FAILD)
        //     }
        // }
    }

    return (
        <View style={globalStyles.viewWrapperForm}>
            <View style={globalStyles.viewWrapperText}>
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Staff ID</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setStaffId(value)}
                    value={staffId}
                    autoCapitalize='none'
                    ref={staffIdRef}
                    onSubmitEditing={() => passwordRef.current.focus()}
                    returnKeyType="next"
                    blurOnSubmit={false}
                />
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Password</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setPassword(value)}
                    value={password}
                    secureTextEntry={true}
                    ref={passwordRef}
                    autoCapitalize='none'
                    onSubmitEditing={onClickButtonLogin}
                />
                <View style={styles.wrapperButtonLogin}>
                    <TouchableOpacity onPress={onClickButtonLogin}>
                        <View style={globalStyles.buttonFranklin}>
                            <Text style={globalStyles.textFranklinWhiteBold}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


