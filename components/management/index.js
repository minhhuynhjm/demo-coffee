import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Text, View, FlatList, TouchableOpacity, TextInput, Image, Alert, Keyboard, RefreshControl } from 'react-native';
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import { showInputPoint, clearInputPoint, addBonusPoint } from '../../redux/actions'
// import { GetUserManagement } from '../../api/webServer/managementService';
import managementData from '../../mock_data/managementData';

function FlatListItem({ item, isEdit, handleDelete, handleSavePoint }) {
    const dispatch = useDispatch();
    useEffect(() => {
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidHide = () => {
        if (item.isShowInput && item.bonusPoint) {
            handleSavePoint(item);
        }
    };

    const pressAddButton = (item) => {
        dispatch(showInputPoint(item));
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
        dispatch(addBonusPoint({ id: item.id, bonusPoint: point }));
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
                            value={`${item.bonusPoint}`}
                            onSubmitEditing={Keyboard.dismiss}
                        >
                        </TextInput>
                    </View>
                ) : null}
                {!isEdit ? (
                    <View style={styles.wrapperDeleteIcon}>
                        <TouchableOpacity onPress={pressDeleteButton} >
                            <Image style={[styles.iconDetele]} source={require('../../assets/bin.png')} ></Image>
                        </TouchableOpacity>
                    </View>
                ) : null}
            </View>

        </View>
    );
}

export default function Management() {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [flatListData, setFlatListData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const managementState = useSelector((state) => (state.managementReducer));
    console.log('managementState', managementState);
    const mergeData = mergeState(flatListData, managementState);
    const fetchData = () => {
        try {
            setFlatListData(managementData);
        } catch (error) {

        }
    };

    useEffect(() => {
        console.log('render');
        fetchData();
    }, []);

    const handleDelete = (_id) => {
        console.log("Delete Item:", _id);
        setFlatListData(flatListData.filter(x => x.id != _id));
    }

    const handleSavePoint = (item) => {
        if (item.bonusPoint) {
            Alert.alert(
                "Save Information",
                `Are you sure you want to save changes ?`,
                [
                    {
                        text: "Cancel", onPress: () => { dispatch(clearInputPoint()); },
                        style: "cancel"
                    },
                    { text: "Save", onPress: () => { savePointToDB(item) } }
                ],
                { cancelable: false }
            );
        }
    }

    const pressEditButton = () => {
        dispatch(clearInputPoint());
        setIsEdit(!isEdit);
        if (!isEdit) {
            setFlatListData(flatListData.map(x => {
                x.isShowInput = false;
                return x;
            }));
        }
    }

    const savePointToDB = (item) => {
        console.log('--------save to db---------', item)
        dispatch(clearInputPoint());
        // fetchData();
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
                    data={mergeData}
                    renderItem={({ item }) =>
                        <FlatListItem item={item} isEdit={isEdit}
                            handleDelete={handleDelete}
                            handleSavePoint={handleSavePoint}>
                        </FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                    removeClippedSubviews={false}
                    enableEmptySections={true}
                >
                </FlatList>
            </View>
            <View style={globalStyles.flexAuto}></View>
        </View>
    );
}

// Merge state 
const mergeState = (array1 = [], object2 = {}) => {
    console.log('Mapping state');
    return array1.map(a1 => {
        if (a1.id === object2.id) {
            a1.bonusPoint = object2.bonusPoint;
            a1.isShowInput = object2.isShowInput;
        }
        else {
            a1.bonusPoint = "";
            a1.isShowInput = false;
        }
        return a1;
    })
}