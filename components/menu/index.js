import React, { } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import menuData from '../../mock_data/menuData';
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductToCart, userLogout } from '../../redux/actions'
import Header from '../header/index'
import { globalStyles } from '../../styles/global'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { styles } from './styles'

function FlatListItem({ item }) {

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
                <Text style={{}}> {item.price}P</Text>
            </View>

            <View style={[styles.flatListMarginItem, styles.flatListItemWrapper]} >
                <TouchableOpacity onPress={pressSubButton} disabled={item.quantity === 0} >
                    <Text style={styles.flatListItemButtonAdd}> - </Text>
                </TouchableOpacity>

                <TextInput style={styles.flatListItemTextInput}
                    editable={false}
                    keyboardType='numeric'
                    value={`${item.quantity}`} >
                </TextInput>
                <TouchableOpacity onPress={pressAddButton}>
                    <Text style={styles.flatListItemButtonAdd}> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function Menu() {
    const props = useSelector((state) => (state.cartReducer));
    const listItem = props.addedItems;
    const mergeData = merge(menuData, listItem);
    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
    return (

        <View style={globalStyles.container}>
            <DismissKeyboard>
                <View style={globalStyles.header}>
                    <Header></Header>
                </View>
                <View style={[globalStyles.content, globalStyles.bgColorGray]}>
                    <View style={styles.wrapperContent}>
                        <View style={globalStyles.cardCenter}>
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
                </View>
            </DismissKeyboard>
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

