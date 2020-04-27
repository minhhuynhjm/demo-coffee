import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles'

export default function Header() {
    return (
        <View style={styles.wapperView}>
            <Text style={styles.hrLine}> INTAGE COFFEE </Text>
        </View>
    );
}

