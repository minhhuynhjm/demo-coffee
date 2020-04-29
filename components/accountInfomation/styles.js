import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapperContent: {
        flex: 1,
        paddingTop: 40
    },
    wrapperView: {
        flexDirection: "row",
        paddingVertical: 5
    },
    wrapper30: {
        flexBasis: '30%',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    wrapper70: {
        flexBasis: '70%',
        paddingLeft: 10,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'SegoeUI'
    },
    textContent: {
        fontSize: 18,
        fontFamily: 'SegoeUI'
    },
    wrapperButton: {
        padding: 20
    },
    logoutButton: {
        width: 45,
        height: 45
    }

});