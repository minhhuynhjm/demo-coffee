import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    paddingContent: {
        paddingLeft: 10
    },
    alignItemsCenter: {
        alignItems: 'center',
        maxHeight: '80%',
    },
    orderConfirmText: {
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'SegoeUI'
    },
    flatList: {
        width: '100%',
    },
    marginItem: {
        marginBottom: 10,
        marginHorizontal: 10
    },
    orderViewButton: {
        backgroundColor: "#21BF73",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    flatListItemProductView: {
    },
    flatListItemProductText: {
        fontSize: 18,
        fontFamily: 'SegoeUI',
    },
    flatListItemButtonAdd: {
        fontSize: 32,
        textAlign: 'center',
    },
    orderViewButtonWrap: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    orderViewButtonText: {
        color: 'white',
        fontFamily: 'Franklin'
    },
    textColor: {
        color: '#f0f0f0'
    },
    toastBg: {
        backgroundColor: '#21BF73'
    },
    textToast: {
        fontFamily: 'SegoeUI',
        color: 'white',
        fontSize: 18
    },
    viewNoItem: {
        alignItems: 'center'
    },
    wrapperTotalPrice: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewWrapperHr: {
        alignItems: 'flex-start'
    },
    hrLine: {
        width: '95%',
        height: 0.5,
        backgroundColor: 'black'
    },
    viewWrapperOrder: {
        flexDirection: 'row'
    },
    viewProductName: {
        width: '60%',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    viewWrapperItemAndPrice: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewQuantity: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textItem: {
        fontSize: 18,
        fontFamily: 'SegoeUI',
    },
    viewWrapperProductName: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: 150,
    },
});