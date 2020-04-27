import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import TabLogin from '../../navigations/tabLogin'
import Header from '../header/index'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

export default function TabLoginResgister() {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Header></Header>
            </View>
            <View style={globalStyles.content}>
                <View style={globalStyles.contentAndAlignCenter}>
                    <View style={styles.mainForm}>
                        <TabLogin></TabLogin>
                    </View>
                </View>
            </View>
        </View>
    );
}
