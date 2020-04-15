import React from 'react'

import {
    Text,
    View,
    Image} from 'react-native';

export default function ShopCart() {
    return (
        <View style={{ position: 'absolute', height: 50, width: 50, borderRadius: 15 }}>
            <Text style={{ color: 'red', fontWeight:'bold' }}>0</Text>
            <Image
                style={{ width: 50, height: 30 }}
                source={{ uri: 'https://www.searchpng.com/wp-content/uploads/2019/02/Cart-PNG-Icon-715x715.png' }}
            />
        </View>
    );
}