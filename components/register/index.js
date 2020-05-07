import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global'
import { isRequired, isMatching } from '../../utilities/Common'
import { pickerSelectStyles, styles } from './styles'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default function Register() {
    const [fullName, setFullName] = useState('');
    const [staffId, setStaffId] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const staffIdRef = useRef(null);
    const ageRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const onClickRegister = () => {
        console.log('gender', gender);
        if (isRequired(fullName, "Full Name")
            && isRequired(staffId, "StaffId")
            && isRequired(age, "Age")
            && isRequired(gender, "Gender")
            && isRequired(password, "Password")
            && isRequired(confirmPassword, "Confirm Password")
            && isMatching(password, confirmPassword)) {
            // sign up
        }

    }

    return (
        <View style={globalStyles.viewWrapperForm}>
            <ScrollView style={globalStyles.viewWrapperText}>
                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Full Name</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setFullName(value)}
                    value={fullName}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    onSubmitEditing={() => staffIdRef.current.focus()}
                />

                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Staff ID</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setStaffId(value)}
                    value={staffId}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    ref={staffIdRef}
                    onSubmitEditing={() => ageRef.current.focus()}
                />

                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Age</Text>
                <TextInput
                    style={globalStyles.input}
                    onChangeText={value => setAge(value.replace(/[^0-9]/g, ''))}
                    value={age}
                    keyboardType='numeric'
                    maxLength={2}
                    returnKeyType="next"
                    blurOnSubmit={false}
                    ref={ageRef}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />

                <Text style={[globalStyles.textBoldSegoeUI, globalStyles.marginText]}>Sex</Text>
                <View style={styles.wrapperDropdown}>
                    <RNPickerSelect
                        style={pickerSelectStyles}
                        placeholder={{ label: 'Please select' }}
                        InputAccessoryView={() => null}
                        onValueChange={(value) => setGender(value)}
                        items={[
                            { label: 'Male', value: true },
                            { label: 'Female', value: false },
                        ]}
                        value={gender}
                        Icon={() => { return <Ionicons name="md-arrow-dropdown" size={30} color="black" /> }}
                    />
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