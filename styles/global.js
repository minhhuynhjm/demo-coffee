import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    marginText: {
        marginBottom: 5
    },
    input: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        borderRadius: 3,
        fontSize: 14,
        marginBottom: 20,
        paddingHorizontal: 5
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        height: '10%',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    content: {
        height: '90%',
        // flex: 1,
    },
    flexAuto: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    bgColorGray: {
        backgroundColor: '#f0f0f0'
    },
    flexRowAndCenter: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentAndAlignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewWrapperForm: {
        paddingTop: 15,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    viewWrapperText: {
        width: '100%',
        paddingHorizontal: 50
    },
    cardCenter: {
        backgroundColor: '#83bbb9',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10
    },
    wrapperButtonLogin: {
        alignItems: 'center'
    },
    buttonFranklin: {
        backgroundColor: "#21BF73",
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 45,
        borderRadius: 10
    },
    btnLoginText: {
        color: 'white',
        fontFamily: 'Franklin'
    },
    textFranklinWhite: {
        color: 'white',
        fontFamily: 'Franklin',
        fontSize: 18,
    },
    textFranklinWhiteBold: {
        fontWeight: "bold",
        color: 'white',
        fontFamily: 'Franklin',
        fontSize: 18,
    },
    textSegoeUI: {
        fontFamily: 'SegoeUI',
        fontSize: 18,
    },
    textBoldSegoeUI: {
        fontWeight: "bold",
        fontFamily: 'SegoeUI',
        fontSize: 18,
    },
    textWhiteSegoeUI: {
        color: 'white',
        fontFamily: 'SegoeUI',
        fontSize: 18,
    },
    textWhiteBoldSegeoUI: {
        color: 'white',
        fontWeight: "bold",
        fontFamily: 'SegoeUI',
        fontSize: 18,
    }
});