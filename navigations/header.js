import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useSelector } from "react-redux";

export function LogoLeft({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('Menu')}>
            <Image
                style={{ width: 45, height: 45, marginLeft: 10, marginBottom: 1 }}
                source={require('../assets/food.png')}
            />
        </TouchableOpacity>
    );
}

export function LogoRight({ navigation }) {
    const props = useSelector((state) => (state.cartReducer));
    return (
        <View>
            <View style={{ backgroundColor: '#D8D8D8', borderRadius: 15, width: 25, height: 25, alignItems: 'center', justifyContent: 'center', position: 'absolute', zIndex: 1 }}>
                <Text style={{ fontWeight: 'bold' }}> {props.countTotalItem} </Text>
            </View>
            <TouchableOpacity onPress={() => navigation?.navigate('Order')}>
                <Image
                    style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10, marginTop: 20, marginBottom: 5 }}
                    source={require('../assets/shopcart.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

export function LogoTitle({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('TabAccountManagement')}>
            <Image
                style={{ width: 45, height: 45 }}
                source={require('../assets/management.png')}
            />
        </TouchableOpacity>
    );
}