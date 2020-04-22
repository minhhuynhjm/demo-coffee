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

    return (
        <View style={{}}>
            <View style={globalStyles.flexRowAndCenter}>
                <View style={[styles.flatListItemProductView, styles.marginItem, globalStyles.contentAndAlignCenter]}>
                    <Text style={styles.flatListItemProductText}> {item.name}</Text>
                </View>
                <View style={styles.marginItem}>
                    <Text> {item.quantity} </Text>
                </View>
                <View style={styles.marginItem}>
                    <Text> {item.quantity * item.price} $</Text>
                </View>
                <TouchableOpacity onPress={pressSubButton} >
                    <Text style={styles.flatListItemButtonAdd}> - </Text>
                </TouchableOpacity>
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
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const onClickButtonOrder = () => {
        ToastAndroid.showWithGravity(
            "order successfully !!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={[globalStyles.content, globalStyles.bgColorGray]}>
                <View style={styles.alignItemsCenter}>
                    <View style={styles.orderConfirmView}>
                        <Text style={styles.orderConfirmText}>Order Confirm</Text>
                    </View>
                    <FlatList
                        style={styles.flexGrowNone}
                        data={orderData}
                        renderItem={({ item, index }) => <FlatListItem item={item} index={index}></FlatListItem>}
                        keyExtractor={(item) => `key-${item.id}`}
                        extraData={props}
                    >
                    </FlatList>
                </View>
                <View style={{}}>
                    {countTotalItem > 0 ? (
                        <View style={[globalStyles.flexRowAndCenter]}>
                            <View style={styles.hrLine}>
                                <View style={styles.marginItem}>
                                    <Text> Count: {countTotalItem} </Text>
                                </View>
                                <View style={styles.marginItem}>
                                    <Text> Total Price: {totalPrice} $</Text>
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
                <Toast ref={toastRef} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    alignItemsCenter: {
        alignItems: 'center',
        height: '70%',
    },
    orderConfirmView: {
        backgroundColor: '#83bbb9',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3
    },
    orderConfirmText: {
        color: 'white',
        fontWeight: "bold"
    },
    flexGrowNone: {
        flexGrow: 0,
    },
    hrLine: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    marginItem: {
        margin: 10
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
        backgroundColor: '#d1d1d1',
        borderRadius: 8,
        height: 40,
    },
    flatListItemProductText: {
        width: 80,
        textAlign: 'center'
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