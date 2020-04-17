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
import menuData from '../../mock-data/menuData';
import { actionTypes } from "../../redux/actions/actionTypes"
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductToCart } from '../../redux/actions'

function FlatListItem({ item, index }) {

    const dispatch = useDispatch();

    const pressAddButton = () => {
        dispatch(addProductToCart(item));
    }

    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
    }

    return (
        <View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ margin: 10, backgroundColor: '#d1d1d1', borderRadius: 8, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: 80, textAlign: 'center' }}> {item.name}</Text>
                </View>

                <View style={{ margin: 10 }}>
                    <Text> {item.price} $</Text>
                </View>

                <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    <TouchableOpacity onPress={pressSubButton} disabled={item.quantity === 0} >
                        <Text style={{ fontSize: 30, textAlign: 'center' }}> - </Text>
                    </TouchableOpacity>

                    <TextInput style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        justifyContent: 'center',
                        width: 50,
                        height: 25,
                        textAlign: 'center'
                    }}
                        editable={false}
                        keyboardType='numeric'
                        // onChangeText={value => setNum(value >= 0 ? value : 0)}
                        value={`${item.quantity}`} ></TextInput>

                    <TouchableOpacity onPress={pressAddButton}>
                        <Text style={{ fontSize: 30, textAlign: 'center' }}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
        </View>
    );
}

export default function Menu({ navigation }) {
    const props = useSelector((state) => (state.cartReducer));
    const listItem = props.addedItems;
    const mergeData = merge(menuData, listItem);

    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#83bbb9', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 3 }}>
                    <Text style={{ color: 'white', fontWeight: "bold" }}>Menu</Text>
                </View>
                <FlatList
                    data={mergeData}
                    renderItem={({ item, index }) => <FlatListItem item={item} index={index} ></FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                    extraData={props}
                ></FlatList>
            </View>
        </View>
    );
}

const merge = (array1 = [], array2 = []) => {
    return array1.map(a1 => {
        const index = array2.findIndex(a2 => a2.id === a1.id);
        a1.quantity = index !== -1 ? array2[index].quantity : 0;
        return a1;
    })
}

const styles = StyleSheet.create({

});