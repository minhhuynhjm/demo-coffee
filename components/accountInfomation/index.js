import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    TextInput,
    TouchableHighlight,
    Alert,
    ToastAndroid,
    AsyncStorage,
    Image
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductToCart, userLogout } from '../../redux/actions'
import { globalStyles } from '../../styles/global'
import { Common } from '../../utilities/Common'
import { styles } from './styles'

export default function AccountInfomation({ navigation }) {
    const state = useSelector((state) => (state.loginReducer));
    console.log(state);
    const dispatch = useDispatch();
    const onClickButtonLogout = () => {
        dispatch(userLogout());
    }

    return (
        <View style={[{ flex: 1, paddingTop: 40 }, globalStyles.bgColorGray]}>
            <View style={globalStyles.flexAuto}>
                <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                    <View style={{ flexBasis: '30%', alignItems: 'flex-end' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Name:</Text>
                    </View>
                    <View style={{ flexBasis: '70%', paddingLeft: 10 }}>
                        <Text>{state.user?.name}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                    <View style={{ flexBasis: '30%', alignItems: 'flex-end' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Staff ID:</Text>
                    </View>
                    <View style={{ flexBasis: '70%', paddingLeft: 10 }}>
                        <Text>0214498411</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                    <View style={{ flexBasis: '30%', alignItems: 'flex-end' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Point:</Text>
                    </View>
                    <View style={{ flexBasis: '70%', paddingLeft: 10 }}>
                        <Text>{Common.NumberWithCommas(state.user?.point)}P</Text>
                    </View>
                </View>
            </View>

            <View style={{ padding: 20 }}>
                <TouchableOpacity onPress={onClickButtonLogout}>
                    <Image
                        style={{ width: 45, height: 45 }}
                        source={require('../../assets/logout.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );
}