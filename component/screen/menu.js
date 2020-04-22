import React, { useState, useEffect, Component } from 'react';
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
import { addProductToCart, removeProductToCart, userLogout } from '../../redux/actions'
import Header from './header'
import { globalStyles } from '../../styles/global'

function FlatListItem({ item, index }) {

    const dispatch = useDispatch();

    const pressAddButton = () => {
        dispatch(addProductToCart(item));
    }

    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
    }

    return (
        <View style={styles.flatListItemWrapper}>
            <View style={[styles.flatListMarginItem, styles.flatListItemViewProduct]}>
                <Text style={styles.flatListItemTextProduct}> {item.name}</Text>
            </View>

            <View style={styles.flatListMarginItem}>
                <Text> {item.price} $</Text>
            </View>

            <View style={[styles.flatListMarginItem, styles.flatListItemWrapper]} >
                <TouchableOpacity onPress={pressSubButton} disabled={item.quantity === 0} >
                    <Text style={styles.flatListItemButtonAdd}> - </Text>
                </TouchableOpacity>

                <TextInput style={styles.flatListItemTextInput}
                    editable={false}
                    keyboardType='numeric'
                    // onChangeText={value => setNum(value >= 0 ? value : 0)}
                    value={`${item.quantity}`} >
                </TextInput>
                <TouchableOpacity onPress={pressAddButton}>
                    <Text style={styles.flatListItemButtonAdd}> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function Menu({ navigation }) {
    const props = useSelector((state) => (state.cartReducer));
    const listItem = props.addedItems;
    const mergeData = merge(menuData, listItem);

    const loginState = useSelector((state) => (state.loginReducer));

    const dispatch = useDispatch();
    const onClickButtonLogout = () => {
        dispatch(userLogout());
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={[globalStyles.content, globalStyles.bgColorGray]}>
                <View style={styles.wrapperContent}>
                    <View style={styles.viewMenu}>
                        <Text style={styles.textMenu}>Menu</Text>
                    </View>
                    <FlatList
                        style={{ height: "85%" }}
                        data={mergeData}
                        renderItem={({ item, index }) => <FlatListItem item={item} index={index} ></FlatListItem>}
                        keyExtractor={(item) => `key-${item.id}`}
                        extraData={props}
                    ></FlatList>
                </View>
                <View style={[{ margin: 10, alignItems: 'center' }]}>
                    <Button
                        title="Logout"
                        color="#259269"
                        onPress={onClickButtonLogout}
                    />
                </View>
            </View>
        </View>
    );
}

// Merge state 
const merge = (array1 = [], array2 = []) => {
    return array1.map(a1 => {
        const index = array2.findIndex(a2 => a2.id === a1.id);
        a1.quantity = index !== -1 ? array2[index].quantity : 0;
        return a1;
    })
}

const styles = StyleSheet.create({
    wrapperContent: {
        alignItems: 'center'
    },
    viewMenu: {
        backgroundColor: '#83bbb9',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3
    },
    textMenu: {
        color: 'white',
        fontWeight: "bold"
    },
    flatListItemWrapper: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListItemViewProduct: {
        backgroundColor: '#d1d1d1',
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListItemTextProduct: {
        width: 80,
        textAlign: 'center'
    },
    flatListMarginItem: {
        margin: 10
    },
    flatListItemTextInput: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        width: 50,
        height: 25,
        textAlign: 'center'
    },
    flatListItemButtonAdd: {
        fontSize: 30,
        textAlign: 'center'
    }
});