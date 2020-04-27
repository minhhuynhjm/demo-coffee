import { Alert } from 'react-native';

function Dialog(title, message) {
    Alert.alert(
        title,
        message,
        [
            { text: "OK" }
        ],
        { cancelable: false }
    );
}

function NumberWithCommas(value) {
    return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const Common = { Dialog, NumberWithCommas }