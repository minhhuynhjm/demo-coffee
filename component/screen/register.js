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

import { globalStyles } from '../../styles/global'
import { common } from '../utility/common'

export default function Register() {
    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const staffIdRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const onClickRegister = () => {
        const trimStaffId = staffId.trim();
        const trimPassword = password.trim();
        const trimConfirmPassword = confirmPassword.trim();
        if (trimStaffId === '') {
            common.Dialog("Notification", "StaffId is required");
        }
        else if (trimPassword === '') {
            common.Dialog("Notification", "Password is required");
        }
        else if (trimConfirmPassword === '') {
            common.Dialog("Notification", "ConfirmPassword is required");
        }
        else if (trimPassword !== trimConfirmPassword) {
            common.Dialog("Notification", "Password do not match");
        }
        else {
            // sign up
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
                returnKeyType="next"
                blurOnSubmit={false}
                ref={staffIdRef}
                onSubmitEditing={() => passwordRef.current.focus()}
            />

            <Text style={globalStyles.text}>Password</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                autoCapitalize='none'
                returnKeyType="next"
                blurOnSubmit={false}
                ref={passwordRef}
                onSubmitEditing={() => confirmPasswordRef.current.focus()}
            />
            <Text style={globalStyles.text}>Confirm Password</Text>
            <TextInput
                style={globalStyles.input}
                onChangeText={value => setConfirmPassword(value)}
                value={confirmPassword}
                ref={confirmPasswordRef}
                secureTextEntry={true}
                placeholder={'Confirm Password'}
                autoCapitalize='none'
                onSubmitEditing={onClickRegister}
            />

            <View style={{ margin: 10, alignItems: 'center' }}>
                <TouchableOpacity onPress={onClickRegister}>
                    <View style={styles.btnRegister}>
                        <Text style={styles.btnText}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    btnRegister: {
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