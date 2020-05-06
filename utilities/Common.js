import { Alert } from 'react-native';
import { MESSAGE } from '../constants';

export function DialogInfo(message) {
    Alert.alert(
        MESSAGE.TITLE_INFORMATION,
        message,
        [
            { text: "OK" }
        ],
        { cancelable: false }
    );
}

export function isRequired(value, fieldName) {
    if (value?.trim() === '') {
        DialogInfo(fieldName + MESSAGE.IS_REQUIRED);
        return false;
    }
    return true;
}

export function isMatching(password, confirmPassword) {
    if (password?.trim() !== confirmPassword?.trim()) {
        DialogInfo(MESSAGE.PASSWORD_NOT_MATCH);
        return false;
    }
    return true;
}

