import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from '../../redux/actions'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

export default function AccountInfomation() {
    const userState = useSelector((state) => (state.loginReducer.user));
    console.log(userState);
    const dispatch = useDispatch();
    const onClickButtonLogout = () => {
        dispatch(userLogout());
    }

    useEffect(() => {
        console.log("account information screen");
    }, []);

    return (
        <View style={[styles.wrapperContent, globalStyles.bgColorGray]}>
            <View style={globalStyles.flexAuto}>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Full Name:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>{userState?.name}</Text>
                    </View>
                </View>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Staff ID:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>0214498411</Text>
                    </View>
                </View>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Age:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>{userState?.age}</Text>
                    </View>
                </View>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Sex:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>{userState?.gender ? "Male" : "Female"}</Text>
                    </View>
                </View>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Point:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>{userState?.point}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.wrapperButton}>
                <TouchableOpacity onPress={onClickButtonLogout}>
                    <Image
                        style={styles.logoutButton}
                        source={require('../../assets/logout.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

