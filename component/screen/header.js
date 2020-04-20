import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import React from 'react';

export default function Header() {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', height: '10%' }}>
            <Text style={{ fontWeight: 'bold' }}> INTAGE COFFEE </Text>
            {/* <View style={styles.lineStyle} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
    }
});

