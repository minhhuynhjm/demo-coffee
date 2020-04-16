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


function FlatListItem({ item, index }) {

    //const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [num, setNum] = useState(0);
    const [valItem, setValItem] = useState([]);

    const pressAddButton = () => {
        const parseNum = Number.parseInt(num) || 0;
        setNum(parseNum + 1);
        dispatch({ type: actionTypes.ADD_PRODUCT_TO_CART, payload: item });
    }

    const pressSubButton = () => {
        const parseNum = Number.parseInt(num) || 0;
        setNum(parseNum > 0 ? parseNum - 1 : 0);
        dispatch({ type: actionTypes.REMOVE_PRODUCT_FROM_CART, payload: item });
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
                    <TouchableOpacity onPress={pressSubButton} disabled={num === 0} >
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
                        onChangeText={value => setNum(value >= 0 ? value : 0)}
                        value={`${num}`} ></TextInput>

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
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#83bbb9', borderBottomLeftRadius: 5, borderBottomRightRadius: 5, paddingLeft: 5, paddingRight: 5, paddingBottom: 3 }}>
                    <Text style={{ color: 'white', fontWeight: "bold" }}>Menu</Text>
                </View>
                <FlatList
                    data={menuData}
                    renderItem={({ item, index }) => <FlatListItem item={item} index={index} ></FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                ></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

});