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

export const Common = { Dialog }