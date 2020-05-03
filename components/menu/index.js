import React, { } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Keyboard, SafeAreaView } from 'react-native';
import menuData from '../../mock_data/menuData';
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductToCart, addMuptipleItemToCart } from '../../redux/actions'
import Header from '../header/index'
import { globalStyles } from '../../styles/global'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from './styles'
import NumericInput from 'react-native-numeric-input'

function FlatListItem({ item }) {


    const dispatch = useDispatch();

    const pressAddButton = () => {
        dispatch(addProductToCart(item));
    }

    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
    }

    const addMultipleItem = (count) => {
        let num = parseInt(count) || 0;
        dispatch(addMuptipleItemToCart(item, num))
    }

    return (
        <View style={styles.flatListItemContentWrapper}>
            <View style={[styles.flatListMarginItem, styles.flatListItemViewProduct]}>
                <Text style={globalStyles.textSegoeUI}> {item.name}</Text>
            </View>

            <View style={styles.flatListMarginItem}>
                <Text style={[styles.pointTextColor, globalStyles.textSegoeUI]}> {item.price}P</Text>
            </View>
            <View style={[styles.flatListMarginItem, styles.flatListItemWrapper]} >
                <TouchableOpacity onPress={pressSubButton} disabled={item.quantity === 0} >
                    <Text style={styles.flatListItemButtonAdd}> -  </Text>
                </TouchableOpacity>
                <TextInput style={styles.flatListItemTextInput}
                    // editable={false}
                    onChangeText={value => addMultipleItem(value)}
                    keyboardType='numeric'
                    blurOnSubmit={false}
                    value={`${item.quantity}`} >
                </TextInput>
                {/* <NumericInput value={item.quantity} onChange={value => addMultipleItem(value)} /> */}
                <TouchableOpacity onPress={pressAddButton}>
                    <Text style={styles.flatListItemButtonAdd}>  + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function Menu() {
    const props = useSelector((state) => (state.cartReducer));
    const listItemState = props.addedItems;
    const mergeData = mergeState(menuData, listItemState);
    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
    return (

        <SafeAreaView style={globalStyles.container}>
            {/* <DismissKeyboard> */}
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={[globalStyles.content, globalStyles.bgColorGray]}>
                <View style={styles.wrapperContent}>
                    <View style={globalStyles.cardCenter}>
                        <Text style={globalStyles.textWhiteBoldSegeoUI}>Menu</Text>
                    </View>
                    <FlatList
                        style={styles.flatListWrapper}
                        data={mergeData}
                        renderItem={({ item, index }) => <FlatListItem item={item} index={index} ></FlatListItem>}
                        keyExtractor={(item) => `key-${item.id}`}
                        extraData={props}
                    ></FlatList>
                </View>
            </View>
            {/* </DismissKeyboard> */}
        </SafeAreaView>
    );
}

// Merge state 
const mergeState = (array1 = [], array2 = []) => {
    return array1.map(a1 => {
        const index = array2.findIndex(a2 => a2.id === a1.id);
        a1.quantity = index !== -1 ? array2[index].quantity : 0;
        return a1;
    })
}

