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
            <Text style={{ color: 'red', fontWeight: 'bold' }}> {props.countTotalItem} </Text>
            <TouchableOpacity onPress={clickOrder}>
                <Image
                    style={{ width: 50, height: 30 }}
                    source={{ uri: 'https://www.searchpng.com/wp-content/uploads/2019/02/Cart-PNG-Icon-715x715.png' }}
                />
            </TouchableOpacity>
        </View>
    );
}

