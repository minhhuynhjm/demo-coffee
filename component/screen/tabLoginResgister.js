import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
    Dimensions,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import TabLoginNavigation from '../../routes/tabLoginNavigation'
import Header from './header'
import { globalStyles } from '../../styles/global'

export default function TabLoginResgister() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={globalStyles.content}>
                <View style={globalStyles.contentAndAlignCenter}>
                    <View style={styles.mainForm}>
                        <TabLoginNavigation></TabLoginNavigation>
                    </View>
                </View>
            </View>
        </View>
    );
}

const heightWindow = Dimensions.get('window').height * 0.7;

const styles = StyleSheet.create({
    mainForm: {
        backgroundColor: 'white',
        padding: 20,
        width: 300,
        height: heightWindow,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderRadius: 20,
        elevation: 9,
    }
});