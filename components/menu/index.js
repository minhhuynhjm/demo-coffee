import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, RefreshControl, Button } from 'react-native';
import menuData from '../../mock_data/menuData';
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart, removeProductToCart } from '../../redux/actions'
import Header from '../header/index'
import Loader from '../loading/index'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { GetOrderMenu } from '../../api/webServer/orderService';
import Dialog from "react-native-dialog";
import Modal from 'react-native-modal';

function FlatListItem({ item, showDialog }) {

    const dispatch = useDispatch();

    const pressAddButton = () => {
        dispatch(addProductToCart(item));
    }

    const pressSubButton = () => {
        dispatch(removeProductToCart(item));
    }

    const pressInput = () => {
        showDialog(true, item);
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
                <TouchableOpacity onPress={pressInput}>
                    <TextInput style={styles.flatListItemTextInput}
                        editable={false}
                        keyboardType='numeric'
                        value={`${item.quantity}`} >
                    </TextInput>
                </TouchableOpacity>
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
    const mergeData = mergeState(menuData, listItemState); // Mockup Data
    const [menuDataApi, setMenuDataApi] = useState([]);
    // const mergeData = mergeState(menuDataApi, listItemState);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const [currentItem, setCurrentItem] = useState('');

    const showDialog = (isShow, item) => {
        setInputValue(item.quantity);
        setDialogVisible(isShow);
        setCurrentItem(item);
    }

    const handleInputProduct = () => {
        setDialogVisible(false);
        dispatch(addProductToCart(currentItem));
    }

    const onRefreshData = React.useCallback(() => {
        setRefreshing(true);
        fetchData();
    }, [refreshing]);

    const fetchData = async () => {
        try {
            const result = await GetOrderMenu();
            console.log(result);
            setMenuDataApi(result.data);
            setLoading(false);
            setRefreshing(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setRefreshing(false);
        }
    };

    useEffect(() => {
        // fetchData();
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
                                renderItem={({ item }) => <FlatListItem item={item} showDialog={showDialog} ></FlatListItem>}
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
            {/* <View>
                <Dialog.Container visible={dialogVisible} contentStyle={{}}>
                    <Dialog.Title>Nhập số lượng sản phẩm</Dialog.Title>
                    <Dialog.Input autoFocus={true} wrapperStyle={{ paddingVertical: 2, borderBottomWidth: 2, borderBottomColor: 'black' }} keyboardType='numeric' value={`${inputValue}`} onChangeText={value => setInputValue(value)}></Dialog.Input>
                    <Dialog.Button label="Cancel" onPress={() => setDialogVisible(false)} />
                    <Dialog.Button label="Ok" onPress={handleInputProduct} />
                </Dialog.Container>
            </View> */}
            <View style={{ flex: 1, paddingTop: 100 }}>
                <Modal isVisible={dialogVisible}>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <Text>Hello!</Text>
                        <Button title="Hide modal" onPress={() => setDialogVisible(false)} />
                    </View>
                </Modal>
            </View>
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

