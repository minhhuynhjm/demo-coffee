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
import Headers from '../common/header';
import menuData from '../../mock-data/menuData';
import { actionTypes } from "../../redux/actions/actionTypes"

import { useSelector, useDispatch } from "react-redux";

function FlatListItem({ item, index, refreshFlatList }) {
    const props = useSelector((state) => (state));
    let TotalPrice = props.totalPrice;
    const [activeRowKey, setActiveRowKey] = useState(false);
    const dispatch = useDispatch();
    const pressSubButton = () => {
        refreshFlatList(setActiveRowKey(true));
        dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_CART, payload: item });
    }

    return (
        <View>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ margin: 10, backgroundColor: '#d1d1d1', borderRadius: 8, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ width: 80, textAlign: 'center' }}> {item.name}</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text> {item.quantity} </Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text> {item.price} $</Text>
                </View>
                <TouchableOpacity onPress={pressSubButton} >
                    <Text style={{ fontSize: 30, textAlign: 'center' }}> - </Text>
                </TouchableOpacity>

                <View style={{ margin: 10 }}>
                    <Text>Total Price: {TotalPrice} </Text>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
        </View>
    );
}

export default function Order({ navigation }) {
    const props = useSelector((state) => (state));
    const orderData = props.addedItems;
    const [deletedRowKey, setDeletedRowKey] = useState(null);

    const refreshFlatList = (deletedKey) => {
        setDeletedRowKey(deletedKey);
    };


    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#83bbb9', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 3 }}>
                    <Text style={{ color: 'white', fontWeight: "bold" }}>Order Confirm</Text>
                </View>
                <FlatList
                    data={orderData}
                    renderItem={({ item, index }) => <FlatListItem item={item} index={index} refreshFlatList={refreshFlatList}></FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                ></FlatList>
            </View>
        </View>
    );
}
