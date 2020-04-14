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
    Image,
    Alert,
    ToastAndroid,
    AsyncStorage
} from 'react-native';

export default function Header({ navigation }) {
    const isShow = true;
    const onClickMenu = () => {
        navigation.navigate('Menu')
    }

    return (
        <View style={{height: 100 }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginTop:15}}>
                {
                    (isShow == true) ?
                        <TouchableOpacity onPress={onClickMenu}>
                            <View style={{ margin: 10, backgroundColor: '#ffd944', borderRadius: 8, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ width: 80, textAlign: 'center' }}> Menu</Text>
                            </View>
                        </TouchableOpacity>
                        : null
                }


                <TouchableOpacity>
                    <View style={{ margin: 10, backgroundColor: '#09ea09', borderRadius: 8, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: 80, textAlign: 'center' }}> Home</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ margin: 10, backgroundColor: '#8c1259', borderRadius: 8, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: 80, textAlign: 'center' }}> Cart(0)</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{  justifyContent: 'center', alignItems: "center",  backgroundColor: 'white' }}>

                <Text style={{ fontSize: 30 }}>
                    INTAGE COOFFEE
                    </Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            >
            </View>
        </View>
    );
}