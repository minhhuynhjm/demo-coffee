import React, { useState, useEffect, useRef } from 'react';
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
    AsyncStorage,
    Dimensions,
    ScrollView
} from 'react-native';

import Toast from 'react-native-easy-toast';

import menuData from '../../mock-data/menuData';
import { actionTypes } from "../../redux/actions/actionTypes"
import { addProductToCart, removeProductToCart } from '../../redux/actions'
import { useSelector, useDispatch } from "react-redux";
import Header from './header'
import { globalStyles } from '../../styles/global'

function FlatListItem({ item, index }) {
    const dispatch = useDispatch();
    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
    }
    // globalStyles.flexRowAndCenter styles.flatListItemProductView, styles.marginItem, globalStyles.contentAndAlignCenter
    return (
        <View style={{ flexDirection: 'row', }}>
            <View style={{ width: '60%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Text style={styles.flatListItemProductText}> {item.name}</Text>
                </View>
            </View>
            <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text > {item.quantity} </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View>
                        <Text> {item.quantity * item.price} </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={pressSubButton}>
                            <Text style={styles.flatListItemButtonAdd}> - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
}

export default function Order({ route, navigation }) {
    const toastRef = useRef();

    const props = useSelector((state) => (state.cartReducer));
    const orderData = props.addedItems;
    let totalPrice = props.totalPrice;
    let countTotalItem = props.countTotalItem;
    const onClickButtonOrder = () => {
        toastRef.current.show(<View><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>order successfully !!</Text></View>)
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={[globalStyles.content, globalStyles.bgColorGray]}>

                <View style={styles.alignItemsCenter}>
                    <View style={globalStyles.cardCenter}>
                        <Text style={styles.orderConfirmText}>Order Confirm</Text>
                    </View>
                    <FlatList
                        style={styles.flatList}
                        data={orderData}
                        renderItem={({ item, index }) => <FlatListItem item={item} index={index}></FlatListItem>}
                        keyExtractor={(item) => `key-${item.id}`}
                        extraData={props}
                    >
                    </FlatList>
                </View>

                <View style={{ alignItems: 'center' }}>
                    {countTotalItem > 0 ? (
                        <View style={{ width: '90%', alignItems: 'flex-end' }}>
                            <View style={styles.hrLine}>
                                <View style={styles.marginItem}>
                                    <Text> {countTotalItem} </Text>
                                </View>
                                <View style={styles.marginItem}>
                                    <Text> {totalPrice} </Text>
                                </View>
                            </View>
                        </View>
                    ) :
                        <View>
                            <Text>NoThing </Text>
                        </View>
                    }
                </View>
                <View style={globalStyles.flexAuto}>
                </View>
                <View style={styles.orderViewButtonWrap}>
                    <TouchableOpacity onPress={onClickButtonOrder}>
                        <View style={styles.orderViewButton}>
                            <Text style={styles.orderViewButtonText}>Order</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Toast ref={toastRef} style={{ backgroundColor: '#28B243' }} position='center' positionValue={200} fadeInDuration={750} fadeOutDuration={1000} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alignItemsCenter: {
        alignItems: 'center',
        maxHeight: '70%',
    },
    orderConfirmText: {
        color: 'white',
        fontWeight: "bold"
    },
    flatList: {
        width: '95%'
    },
    hrLine: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    marginItem: {
        marginBottom: 10,
        marginHorizontal: 10
    },
    orderViewButton: {
        backgroundColor: "#259269",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    flatListItemProductView: {
    },
    flatListItemProductText: {
        width: 80,
    },
    flatListItemButtonAdd: {
        fontSize: 30, textAlign: 'center'
    },
    orderViewButtonWrap: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    orderViewButtonText: {
        color: 'white'
    }
});