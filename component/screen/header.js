import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import React from 'react';

export default function Header() {
    return (
        <View style={styles.wapperView}>
            <Text style={styles.hrLine}> INTAGE COFFEE </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wapperView: {
        alignItems: 'center',
    },
    hrLine: {
        fontWeight: 'bold', fontSize: 26, borderBottomColor: 'black', borderBottomWidth: 1
    }
});

