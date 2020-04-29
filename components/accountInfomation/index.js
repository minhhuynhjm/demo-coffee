import React, { } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from '../../redux/actions'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

export default function AccountInfomation() {
    const state = useSelector((state) => (state.loginReducer));
    const dispatch = useDispatch();
    const onClickButtonLogout = () => {
        dispatch(userLogout());
    }

    return (
        <View style={[styles.wrapperContent, globalStyles.bgColorGray]}>
            <View style={globalStyles.flexAuto}>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Full Name:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>{state.user?.name}</Text>
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
                        <Text style={globalStyles.textSegoeUI}>24</Text>
                    </View>
                </View>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Sex:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>Male</Text>
                    </View>
                </View>
                <View style={styles.wrapperView}>
                    <View style={styles.wrapper30}>
                        <Text style={globalStyles.textBoldSegoeUI}>Point:</Text>
                    </View>
                    <View style={styles.wrapper70}>
                        <Text style={globalStyles.textSegoeUI}>{state.user?.point}</Text>
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

