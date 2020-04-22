import React from 'react'

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";

export default function ShopCartIcon({ navigation }) {
    const props = useSelector((state) => (state.cartReducer));

    const clickOrder = () => {
        navigation?.navigate('Order')
    }

    return (
        <View>
            <View style={{ backgroundColor: '#D8D8D8', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}> {props.countTotalItem} </Text>
            </View>
            <TouchableOpacity onPress={clickOrder}>
                <Image
                    style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10, marginTop: 20, marginBottom: 5 }}
                    source={require('../../assets/shopcart.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

