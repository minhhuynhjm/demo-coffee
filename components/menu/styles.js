import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapperContent: {
        alignItems: 'center'
    },
    textMenu: {
        color: 'white',
        fontWeight: "bold"
    },
    flatListItemWrapper: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListItemViewProduct: {
        backgroundColor: '#d1d1d1',
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListItemTextProduct: {
        width: 80,
        textAlign: 'center'
    },
    flatListMarginItem: {
        marginBottom: 15,
        marginHorizontal: 10
    },
    flatListItemTextInput: {
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        width: 50,
        height: 25,
        textAlign: 'center'
    },
    flatListItemButtonAdd: {
        fontSize: 30,
        textAlign: 'center'
    }
});