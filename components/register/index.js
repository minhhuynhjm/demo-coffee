import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native';
import { globalStyles } from '../../styles/global'
import { Common } from '../../utilities/Common'
import { styles } from './styles'

export default function Register() {
    useEffect(() => {
        console.log("Register form");
    }, []);

    const [form, setForm] = useState({
        fullName: '',
        staffId: '',
        Age: '',
        password: '',
        confirmPassword: ''
    });

    const updateField = e => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const [staffId, setStaffId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState(true);

    const staffIdRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const onClickRegister = () => {
        const trimStaffId = staffId.trim();
        const trimPassword = password.trim();
        const trimConfirmPassword = confirmPassword.trim();
        if (trimStaffId === '') {
            Common.Dialog("Notification", "StaffId is required");
        }
        else if (trimPassword === '') {
            Common.Dialog("Notification", "Password is required");
        }
        else if (trimConfirmPassword === '') {
            Common.Dialog("Notification", "Confirm Password is required");
        }
        else if (trimPassword !== trimConfirmPassword) {
            Common.Dialog("Notification", "Password are not matching");
        }
        else {
            // sign up
        }
    }

    return (
        <View style={globalStyles.viewWrapperForm}>
            <ScrollView style={globalStyles.viewWrapperText}>
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Full Name</Text>
                <TextInput

                    style={globalStyles.input}
                    // onChangeText={value => setStaffId(value)}
                    onChange={updateField}
                    value={staffId}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    ref={staffIdRef}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />

                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Staff ID</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setStaffId(value)}
                    value={staffId}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    ref={staffIdRef}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />

                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Age</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setStaffId(value)}
                    value={staffId}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    ref={staffIdRef}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Sex</Text>
                <View style={{ borderWidth: 1, borderColor: '#a5a5a5', marginBottom: 20, borderRadius: 3, }}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ width: '100%', height: 30 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Male" value={true} />
                        <Picker.Item label="Female" value={false} />
                    </Picker>
                </View>
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Password</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setPassword(value)}
                    value={password}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    returnKeyType="next"
                    blurOnSubmit={false}
                    ref={passwordRef}
                    onSubmitEditing={() => confirmPasswordRef.current.focus()}
                />
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Confirm Password</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setConfirmPassword(value)}
                    value={confirmPassword}
                    ref={confirmPasswordRef}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    onSubmitEditing={onClickRegister}
                />
                <View style={globalStyles.wrapperButtonLogin}>
                    <TouchableOpacity onPress={onClickRegister}>
                        <View style={globalStyles.buttonFranklin}>
                            <Text style={globalStyles.textFranklinWhiteBold}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}


