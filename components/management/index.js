import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Image, Alert, Keyboard, RefreshControl } from 'react-native';
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { GetUserManagement } from '../../api/webServer/managementService';


function FlatListItem({ item, isEdit, handleDelete, handleBonusPoint, handleShowInput, handleSavePoint }) {
    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidHide = () => {
        if (item.isShowInput) {
            console.log("_keyboardDidHide:", item.id);
            handleSavePoint(item);
        }
    };

    const pressAddButton = (item) => {
        // console.log('pressAddButton:', item);
        handleShowInput(item);
    }

    const pressDeleteButton = () => {
        Alert.alert(
            "Delete Account",
            `Are you sure you want to delete your account ?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Delete", onPress: () => handleDelete(item.id) }
            ],
            { cancelable: false }
        );
    }

    const addPointInput = (point) => {
        point = point.replace(/[^0-9]/g, '');
        handleBonusPoint({ id: item.id, point: +item.point + +point }, point);
    }

    return (
        <View style={styles.wrapperFlatListItem}>
            <View style={styles.paddingName}>
            </View>
            <View style={styles.flatListItemName}>
                <Text style={styles.textContent}> {item.accountName}</Text>
            </View>

            <View style={styles.flatListItemPoint}>
                <Text style={styles.textContent}> {item.point}P</Text>
            </View>
            <View style={styles.flatListItemAdd}>
                <View>
                    {isEdit ? (
                        <TouchableOpacity onPress={() => pressAddButton(item)}>
                            <Text style={styles.textAdd}>+  </Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
                {item.isShowInput && isEdit ? (
                    <View>
                        <TextInput style={styles.textInput}
                            keyboardType='numeric'
                            onChangeText={value => addPointInput(value)}
                            value={item.bonus_point}
                            onSubmitEditing={Keyboard.dismiss}
                        >
                        </TextInput>
                    </View>
                ) : null}
                {!isEdit ? (
                    <View>
                        <TouchableOpacity onPress={pressDeleteButton}>
                            <Image style={styles.iconDetele} source={require('../../assets/bin.png')} ></Image>
                        </TouchableOpacity>
                    </View>
                ) : null}
            </View>

        </View>
    );
}

export default function Management() {

    const [isEdit, setIsEdit] = useState(false);
    const [flatListData, setFlatListData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [cloneData, setCloneData] = useState([]);

    const fetchData = () => {
        try {
            GetUserManagement().then((result) => {
                setFlatListData([...result, { bonus_point: "", isShowInput: false }]);
            });

            // setRefreshing(false);
        } catch (error) {
            // setRefreshing(false);
        }
    };

    // const fetchData = async () => {
    //     try {
    //         const data = await GetUserManagement();
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        console.log('render');
        fetchData();
    }, []);

    const handleDelete = (_id) => {
        console.log("Delete Item:", _id);
        setFlatListData(flatListData.filter(x => x.id != _id));
        // fetchData();
        // Fetch Data
    }

    const handleSavePoint = (item) => {
        console.log(item)
        console.log("handleSavePoint");
        if (item.bonus_point) {
            Alert.alert(
                "Save Information",
                `Are you sure you want to save changes ?`,
                [
                    {
                        text: "Cancel", onPress: () => { fetchData() },
                        style: "cancel"
                    },
                    { text: "Save", onPress: () => { savePointToDB(item) } }
                ],
                { cancelable: false }
            );
        } else {
            handleShowInput({ id: -1 }); // disable input
        }

    }

    const handleShowInput = (item) => {
        let updateValue = [...flatListData];

        updateValue = updateValue.map(x => {
            x.isShowInput = x.id == item.id;
            return x;
        });
        // console.log("handleShowInput ", updateValue);
        setFlatListData(updateValue);
    }

    const handleBonusPoint = (item, bonus) => {
        // update value in flatlistData
        const updateValue = [...flatListData];

        const index = updateValue.findIndex(x => x.id === item.id);
        updateValue[index].bonus_point = bonus;
        setFlatListData(updateValue);
    }

    const pressEditButton = () => {
        setIsEdit(!isEdit);
        if (!isEdit) {
            setFlatListData(flatListData.map(x => {
                x.isShowInput = false;
                return x;
            }));
        }
    }

    const savePointToDB = (item) => {
        console.log('--------save---------', item)
        fetchData();
        // handleShowInput({ id: -1 }); // disable input
    }

    return (
        <View style={[styles.wrapperContainer, globalStyles.bgColorGray]}>
            <View style={styles.headerContent}>
                <View style={styles.headerDestination}>
                    <Text>Destination</Text>
                </View>
                <View style={styles.headerPoint}>
                    <Text>Remain Point</Text>
                </View>
                <View style={styles.headerEditIcon}>
                    <TouchableOpacity onPress={pressEditButton}>
                        <Image style={styles.iconEdit} source={require('../../assets/edit.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.wrapperFlatList}>
                <FlatList
                    style={styles.flatList}
                    data={flatListData}
                    renderItem={({ item }) =>
                        <FlatListItem item={item} isEdit={isEdit}
                            handleDelete={handleDelete} handleBonusPoint={handleBonusPoint}
                            handleShowInput={handleShowInput} handleSavePoint={handleSavePoint}>
                        </FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                // refreshing={refreshing}
                // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefreshData} />}
                // extraData={refreshing}
                >
                </FlatList>
            </View>

            <View style={globalStyles.flexAuto}></View>
        </View>
    );
}
