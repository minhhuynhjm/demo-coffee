import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles'

export default function Loader() {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" />
        </View>
    )
}