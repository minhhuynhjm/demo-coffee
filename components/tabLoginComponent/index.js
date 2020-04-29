import React from 'react';
import { View, SafeAreaView } from 'react-native';
import TabLogin from '../../navigations/tabLogin'
import { globalStyles } from '../../styles/global'
import { styles } from './styles'

export default function TabLoginResgister() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.wrapperForm}>
                <TabLogin></TabLogin>
            </View>
        </SafeAreaView>
    );
}
