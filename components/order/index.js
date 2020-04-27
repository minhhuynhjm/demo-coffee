import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import Toast from 'react-native-easy-toast';
import { removeProductToCart, clearProductFromCart } from '../../redux/actions'
import { useSelector, useDispatch } from "react-redux";
import Header from '../header/index'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

function FlatListItem({ item, showAdd }) {
    const dispatch = useDispatch();
    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
    }
    return (
        <View style={{ flexDirection: 'row', }}>
            <View style={{ width: '60%', alignItems: 'flex-start', justifyContent: 'center' }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <Text style={styles.flatListItemProductText}> {item.name}</Text>
                </View>
            </View>
            <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text> {item.quantity} </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <View>
                        <Text> {item.quantity * item.price} </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={pressSubButton}>
                            <Text style={[styles.flatListItemButtonAdd, showAdd ? styles.textColor : null]} > - </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
}

export default function Order({ navigation }) {
    const toastRef = useRef();
    const dispatch = useDispatch();
    const [showAdd, setShowAdd] = useState(false);

    const props = useSelector((state) => (state.cartReducer));
    const orderData = props.addedItems;
    let totalPrice = props.totalPrice;
    let countTotalItem = props.countTotalItem;

    const clickOrderSuccessful = () => {
        setShowAdd(true);
        toastRef.current.show(<View><Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>order successfully !!</Text></View>)
        setTimeout(() => {
            dispatch(clearProductFromCart());
            navigation?.navigate('Menu')
        }, 1000);
    }

    const onClickButtonOrder = () => {
        countTotalItem === 0 ? navigation.goBack() :
            Alert.alert(
                "Infomation",
                "Are you want to order !!",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "OK", onPress: clickOrderSuccessful }
                ],
                { cancelable: false }
            );
    }

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={[globalStyles.content, globalStyles.bgColorGray, styles.paddingContent]}>
                <View style={styles.alignItemsCenter}>
                    <View style={globalStyles.cardCenter}>
                        <Text style={styles.orderConfirmText}>Order Confirm</Text>
                    </View>
                    <FlatList
                        style={styles.flatList}
                        data={orderData}
                        renderItem={({ item, index }) => <FlatListItem item={item} index={index} showAdd={showAdd}></FlatListItem>}
                        keyExtractor={(item) => `key-${item.id}`}
                        extraData={props}
                    >
                    </FlatList>
                </View>
                {countTotalItem !== 0 ?
                    (
                        <View>
                            <View style={{ alignItems: 'flex-start' }}>
                                <View style={{ width: '95%', height: 0.5, backgroundColor: 'black' }}></View>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ width: '60%', alignItems: 'flex-start', justifyContent: 'center' }}>
                                </View>
                                <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                        <Text> {countTotalItem} </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <View>
                                            <Text> {totalPrice} </Text>
                                        </View>
                                        <View>
                                            <Text style={[styles.flatListItemButtonAdd, styles.textColor]} > &#32; </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ) :
                    <View style={{ alignItems: 'center' }}>
                        <Text>You have no items in your shopping cart.</Text>
                    </View>
                }
                <View style={globalStyles.flexAuto}>
                </View>
                <View style={styles.orderViewButtonWrap}>
                    <TouchableOpacity onPress={onClickButtonOrder} disabled={showAdd}>
                        <View style={styles.orderViewButton}>
                            <Text style={styles.orderViewButtonText}>{countTotalItem !== 0 ? "Order" : "Menu"} </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Toast ref={toastRef} style={{ backgroundColor: '#28B243' }} position='center' positionValue={200} fadeInDuration={1000} fadeOutDuration={1250} />
            </View>
        </View>
    );
}

