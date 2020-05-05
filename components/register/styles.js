import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapperDropdown: {
        borderWidth: 1,
        borderColor: '#a5a5a5',
        marginBottom: 20,
        borderRadius: 3,
        height: 30
    }
});

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        height: 30,
        paddingRight: 30,
    },
    iconContainer: {
        top: 0,
        right: 12,
    }
});

