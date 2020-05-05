import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapperContent: {
        alignItems: 'center',
        paddingBottom: 20
    },
    textMenu: {
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'SegoeUI'
    },
    flatListWrapper: {
        width: '100%',
        height: '95%',
    },
    flatListItemWrapper: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
    },
    flatListItemContentWrapper: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
    },
    flatListItemViewProduct: {
        backgroundColor: '#d1d1d1',
        borderRadius: 8,
        height: 50,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatListItemTextProduct: {
        fontSize: 18,
        fontFamily: 'SegoeUI'
    },
    flatListMarginItem: {
        marginBottom: 15,
        marginHorizontal: 10
    },
    pointTextColor: {
        color: '#C21E1E'
    },
    flatListItemTextInput: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        width: 50,
        height: 25,
        textAlign: 'center',
        backgroundColor: 'white'
    },
    flatListItemButtonAdd: {
        fontSize: 32,
        textAlign: 'center'
    },
});