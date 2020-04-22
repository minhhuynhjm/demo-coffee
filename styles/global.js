import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    text: {
        fontSize: 14,
        marginLeft: 10,
        fontWeight: "bold"
    },
    input: {
        width: 240,
        height: 35,
        padding: 10,
        borderWidth: 1,
        borderColor: '#a5a5a5',
        margin: 10,
        borderRadius: 10,
        fontSize: 14,
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
    },
    flexAuto: {
        flexGrow: 1, flexShrink: 1, flexBasis: 0
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
        flex: 1
    },
    cardCenter: {
        backgroundColor: '#83bbb9',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10
    }
});