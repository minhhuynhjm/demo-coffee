import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, RefreshControl } from 'react-native';
import menuData from '../../mock_data/menuData';
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductToCart } from '../../redux/actions'
import Header from '../header/index'
import Loader from '../loading/index'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { GetOrderMenu } from '../../api/webServer/orderService';

function FlatListItem({ item }) {

    const dispatch = useDispatch();

    const pressAddButton = () => {
        dispatch(addProductToCart(item));
    }

    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
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
                    editable={false}
                    keyboardType='numeric'
                    value={`${item.quantity}`} >
                </TextInput>
                <TouchableOpacity onPress={pressAddButton}>
                    <Text style={styles.flatListItemButtonAdd}>  + </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function Menu() {
    const cartState = useSelector((state) => (state.cartReducer));
    const listItemState = cartState.listItems;
    // const mergeData = mergeState(menuData, listItemState); // Mockup Data
    const [menuDataApi, setMenuDataApi] = useState([]);
    const mergeData = mergeState(menuDataApi, listItemState);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefreshData = React.useCallback(() => {
        setRefreshing(true);
        fetchData();
    }, [refreshing]);

    const fetchData = async () => {
        try {
            const result = await GetOrderMenu();
            setMenuDataApi(result.data);
            // console.log(result.data);
            setLoading(false);
            setRefreshing(false);
        } catch (error) {
            // console.log(error.response);
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <SafeAreaView style={globalStyles.container}>
            {loading ? (<Loader />)
                :
                (<>
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
                                extraData={cartState}
                                refreshing={refreshing}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshData} />}
                            ></FlatList>
                        </View>
                    </View>
                </>
                )
            }
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

