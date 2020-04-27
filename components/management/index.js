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
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    SafeAreaView,
    SectionList
} from 'react-native';
import { globalStyles } from '../../styles/global'
import ManagementData from '../../mock_data/managementData'

function FlatListItem({ item, index, isEdit, checkShow }) {
    const [isAdd, setIsAdd] = useState(false);
    const [pointNumber, setPontNumber] = useState([]);
    const pressAddButton = () => {
        setIsAdd(!isAdd);
        checkShow(true);
        console.log(item);
    }

    return (
        <View style={{ flexDirection: 'row', paddingVertical: 5, }}>
            <View style={{ width: '10%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 30 }}>
                {isEdit ? (
                    <TouchableOpacity>
                        <Image style={{ width: 18, height: 18 }} source={require('../../assets/bin.png')} ></Image>
                    </TouchableOpacity>
                ) : null}
            </View>
            <View style={{ width: '30%', flexDirection: 'row', alignItems: 'center' }}>
                <Text> {item.accountName}</Text>
            </View>

            <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                <Text> {item.point}P</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View>
                    {isEdit ? (
                        <TouchableOpacity onPress={pressAddButton}>
                            <Text style={styles.textAdd}>+    </Text>
                        </TouchableOpacity>
                    ) : null}
                </View>
                {isAdd && isEdit ? (
                    <View>
                        <TextInput style={styles.textInput}
                            keyboardType='numeric'
                        // onChangeText={value => setPontNumber(value)}
                        // value={pointNumber}
                        >

                        </TextInput>
                    </View>
                ) : null}
            </View>
        </View>
    );
}




export default function Management({ navigation }) {
    const [isEdit, setIsEdit] = useState(false);

    const [showSave, setShowSave] = useState(false);

    const checkShow = (isSave) => {
        setShowSave(isSave);
    }

    const pressEditButton = () => {
        setIsEdit(!isEdit);
    }

    const onClickCancel = () => {
        setShowSave(false);
    }

    return (
        <View style={[{ paddingHorizontal: 10, paddingVertical: 10, height: '100%', }, globalStyles.bgColorGray]}>
            <View style={{ width: '100%', backgroundColor: '#ECE8E8', flexDirection: 'row', borderColor: 'black', borderWidth: 0.2, paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }}>
                <View style={{ width: '40%', justifyContent: 'center' }}>
                    <Text> Destination</Text>
                </View>
                <View style={{ width: '40%', justifyContent: 'center' }}>
                    <Text> Remain Point</Text>
                </View>
                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={pressEditButton}>
                        <Image style={{ width: 25, height: 25 }} source={require('../../assets/edit.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ maxHeight: '75%', paddingTop: 10 }}>
                <FlatList
                    style={styles.flatList}
                    data={ManagementData}
                    renderItem={({ item, index }) => <FlatListItem item={item} index={index} isEdit={isEdit} checkShow={checkShow}></FlatListItem>}
                    keyExtractor={(item) => `key-${item.id}`}
                    removeClippedSubviews={false}
                >
                </FlatList>
            </View>

            <View style={globalStyles.flexAuto}></View>
            {showSave ?
                (
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                        <TouchableOpacity style={{ paddingHorizontal: 10 }} onPress={onClickCancel}>
                            <View style={styles.btnCancel}>
                                <Text> Cancel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
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


const styles = StyleSheet.create({
    btnSave: {
        backgroundColor: "#259269",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    btnCancel: {
        backgroundColor: "#f0f0f0",
        borderColor: 'black',
        borderWidth: 0.2,
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    btnText: {
        color: 'white'
    },
    flatList: {
        width: '100%',
    },
    textAdd: {
        fontSize: 20,
        textAlign: 'center'
    },
    textInput: {
        borderWidth: 0.2,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: 75,
        height: 30,
        textAlign: 'center'
    }
});