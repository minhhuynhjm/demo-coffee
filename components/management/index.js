import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import { globalStyles } from '../../styles/global'
import { styles } from './styles'
import ManagementData from '../../mock_data/managementData'

function FlatListItem({ item, isEdit, checkDelete, checkPoint }) {
    const [isAdd, setIsAdd] = useState(false);

    useEffect(() => {
        if (!isEdit) {
            setIsAdd(false);
        }
    }, [isEdit]);

    const pressAddButton = () => {
        setIsAdd(true);
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
                { text: "Delete", onPress: () => checkDelete(item.id) }
            ],
            { cancelable: false }
        );
    }

    const addPointInput = (point) => {
        point = point.replace(/[^0-9]/g, '');
        checkPoint({ id: item.id, point: +item.point + +point }, point);
    }

    return (
        <View style={styles.wrapperFlatListItem}>
            <View style={styles.iconDeleteWrapper}>
                {isEdit ? (
                    <TouchableOpacity onPress={pressDeleteButton}>
                        <Image style={styles.iconDetele} source={require('../../assets/bin.png')} ></Image>
                    </TouchableOpacity>
                ) : null}
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
                        <TouchableOpacity onPress={pressAddButton}>
                            <Text style={styles.textAdd}>+ </Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
                {isAdd && isEdit ? (
                    <View>
                        <TextInput style={styles.textInput}
                            keyboardType='numeric'
                            onChangeText={value => addPointInput(value)}
                            value={item.bonus_point}
                        >
                        </TextInput>
                    </View>
                ) : null}
            </View>
        </View>
    );
}

export default function Management() {
    const [isEdit, setIsEdit] = useState(false);
    const [listUpdatePoint, setListUpdatePoint] = useState([]);
    const [listDeletePoint, setListDeletePoint] = useState([]);
    const cloneData = [...ManagementData.map(item => Object.assign({}, item, { bonus_point: "" }))];
    const [flatListData, setFlatListData] = useState(cloneData);


    const checkDelete = (_id) => {
        setFlatListData(flatListData.filter(x => x.id != _id));
        // add delete item
        setListDeletePoint([...listDeletePoint, _id]);
        setListUpdatePoint(listUpdatePoint.filter(x => x.id != _id));
    }

    const checkPoint = (item, bonus) => {
        // update value in flatlistData
        const updateValue = [...flatListData];
        const index = updateValue.findIndex(x => x.id === item.id);
        updateValue[index].bonus_point = bonus;
        setFlatListData(updateValue);


        const tempListUpdate = [...listUpdatePoint];
        const updateItem = tempListUpdate.find(x => x.id === item.id);
        if (updateItem) {
            updateItem.point = item.point;
            setListUpdatePoint(tempListUpdate);
        }
        else {
            setListUpdatePoint([...listUpdatePoint, item]);
        }
    }

    const pressEditButton = () => {
        setIsEdit(true);
    }

    const onClickCancel = () => {
        // clean state
        setIsEdit(false);
        setFlatListData(cloneData);
        setListUpdatePoint([]);
        setListDeletePoint([]);
    }

    const onClickSave = () => {
        console.log('save')
        const objectUpdate = { account_delete: listDeletePoint, account_update: listUpdatePoint }
        console.log(objectUpdate)

        // clean state
        setIsEdit(false);
        setFlatListData(cloneData);
        setListUpdatePoint([]);
        setListDeletePoint([]);
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
                    renderItem={({ item }) => <FlatListItem item={item} isEdit={isEdit} checkDelete={checkDelete} checkPoint={checkPoint}></FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                    removeClippedSubviews={false}
                >
                </FlatList>
            </View>

            <View style={globalStyles.flexAuto}></View>
            {isEdit ?
                (
                    <View style={styles.bottomSaveCancel}>
                        <TouchableOpacity style={styles.paddingButton} onPress={onClickCancel}>
                            <View style={styles.btnCancel}>
                                <Text> Cancel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClickSave}>
                            <View style={styles.btnSave} >
                                <Text style={styles.btnText}> Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
        </View>
    );
}


