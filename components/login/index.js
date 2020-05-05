import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { globalStyles } from '../../styles/global';
import userData from '../../mock_data/userData';
import { useDispatch } from "react-redux";
import { userLogin } from '../../redux/actions'
import { Common } from '../../utilities/Common'
import { styles } from './styles'
import { LoginAuth } from '../../api/webServer/accountService';

export default function Login() {
    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');
    const staffIdRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    const Authencation = async (username, passowrd) => {
        try {
            const result = await LoginAuth(username, passowrd);
            // console.log(result.data);
            dispatch(userLogin(result.data));
        } catch (error) {
            // console.log(error.response);
        }
    };

    const onClickButtonLogin = () => {
        const trimStaffId = staffId.trim();
        const trimPassword = password.trim();

        Authencation(trimStaffId, trimPassword);
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
        //     if (staffId.trim() === '' && password.trim() === '') {
        //         staffIdRef.current.focus();
        //         Common.Dialog("Notification", "Please input staffid and password")
        //     }
        //     else if (staffId.trim() === '') {
        //         staffIdRef.current.focus();
        //         Common.Dialog("Notification", "Please input staffId")
        //     }
        //     else if (password.trim() === '') {
        //         passwordRef.current.focus();
        //         Common.Dialog("Notification", "Please input password")
        //     }
        //     else {
        //         Common.Dialog("Notification", "Incorrect staffid or password")
        //     }
        // }
    }

    useEffect(() => {
        console.log("login screen");
    }, []);

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


