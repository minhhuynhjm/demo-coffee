import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from "react-redux";

export function LogoLeft({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('Menu')}>
            <Image
                style={styles.imageLogoLeft}
                source={require('../assets/food.png')}
            />
        </TouchableOpacity>
    );
}

export function LogoRight({ navigation }) {
    const props = useSelector((state) => (state.cartReducer));
    return (
        <View>
            <View style={styles.borderCartItem}>
                <Text style={styles.textCartItem}> {props.countTotalItem} </Text>
            </View>
            <TouchableOpacity onPress={() => navigation?.navigate('Order')}>
                <Image
                    style={styles.imageLogoRight}
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
                style={styles.imageLogoTitle}
                source={require('../assets/management.png')}
            />
        </TouchableOpacity>
    );
}

export function TextTitle() {
    return (
        <View>
            <Text style={styles.textTitle}>
                INTAGE COFFEE
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageLogoLeft: {
        width: 45, height: 45, marginLeft: 10, marginBottom: 1
    },
    imageLogoRight: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 5
    },
    borderCartItem: {
        backgroundColor: '#D8D8D8',
        borderRadius: 15,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1
    },
    textCartItem: {
        fontWeight: 'bold'
    },
    imageLogoTitle: {
        width: 45, height: 45
    },
    textTitle: {
        fontFamily: 'Franklin',
        fontSize: 30,
        color: 'white'
    }
});