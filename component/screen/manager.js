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
    AsyncStorage,
    RefreshControl
} from 'react-native';

import { getCategoryFromServer } from '../api/server'

function FlatListItem({ item, index }) {
    return (
        <View style={{ flexDirection: "column" }}>
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: "mediumseagreen",
                }}
            >
                <Image
                    source={{ uri: 'https://i.ya-webdesign.com/images/convert-png-to-vector-image.png' }}
                    style={{ width: 100, height: 100, margin: 5 }}
                ></Image>
                <View>
                    <Text style={styles.flatListIiem}>CategoryName: {item.CategoryName}</Text>
                    <Text style={styles.flatListIiem}>Decription: {item.Decription}</Text>
                    <Text style={styles.flatListIiem}>Parent: {item.Parent}</Text>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: "white" }}></View>
        </View>
    );
}


export default function Manager({ navigation }) {
    const refreshDataFromServer = () => {
        let data = getCategoryFromServer().then((item) => {
            console.log('Valeu Item:', item);

            setListData(item);
            setRefresh(false);

        }).catch((error) => {

            setListData([]);
            setRefresh(false);
        });
    }

    const clickGetData = () => {
        console.log(listData);
    }

    const [listData, setListData] = useState([])
    const [refresh, setRefresh] = useState(false);

    const onRefreshData = React.useCallback(() => {
        setRefresh(true);

        refreshDataFromServer();
    }, [refresh]);

    useEffect(() => {
        console.log("init")
        refreshDataFromServer();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={listData}
                renderItem={({ item, index }) => <FlatListItem item={item} index={index}></FlatListItem>}
                keyExtractor={(item) => `key-${item.CategoryId}`}
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={onRefreshData}></RefreshControl>
                }
            >
            </FlatList>
            <Button
                title="Go to Menu"
                onPress={clickGetData
                    // navigation.navigate('Menu')

                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    flatListIiem: {
        color: "white",
        fontSize: 16,
        marginTop: 5,
    },
});