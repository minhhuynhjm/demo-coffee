import React from 'react'

import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";

export default function ShopCartIcon({ navigation }) {
    const props = useSelector((state) => (state));
    console.log(props);
    return (
        <View style={{ position: 'absolute', height: 50, width: 50, borderRadius: 15 }}>
            <Text style={{ color: 'red', fontWeight: 'bold' }}> {props.countTotalItem} </Text>
            <TouchableOpacity onPress={() => navigation?.navigate('Order')}>
                <Image
                    style={{ width: 50, height: 30 }}
                    source={{ uri: 'https://www.searchpng.com/wp-content/uploads/2019/02/Cart-PNG-Icon-715x715.png' }}
                />
            </TouchableOpacity>
        </View>
    );
}


//{props.countTotalItem}