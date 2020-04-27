import { StyleSheet, Dimensions } from 'react-native';

const heightWindow = Dimensions.get('window').height * 0.7;

export const styles = StyleSheet.create({
    mainForm: {
        backgroundColor: 'white',
        padding: 20,
        width: 300,
        height: heightWindow,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        borderRadius: 20,
        elevation: 9,
    }
});

