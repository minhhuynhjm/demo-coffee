import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapperContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: '100%'
    },
    headerContent: {
        width: '100%',
        backgroundColor: '#ECE8E8',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 0.2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    headerDestination: {
        width: '50%', justifyContent: 'center'
    },
    headerPoint: {
        width: '40%', justifyContent: 'center'
    },
    headerEditIcon: {
        width: '10%',
        alignItems: 'flex-end'
    },
    iconEdit: {
        width: 25,
        height: 25
    },
    bottomSaveCancel: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    paddingButton: {
        paddingHorizontal: 10
    },
    btnSave: {
        backgroundColor: "#1E9CFD",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    btnCancel: {
        backgroundColor: "white",
        borderColor: 'black',
        borderWidth: 0.5,
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 40,
        borderRadius: 10
    },
    btnText: {
        color: 'white'
    },
    wrapperFlatList: {
        maxHeight: '75%',
        paddingTop: 10
    },
    flatList: {
        width: '100%',
    },
    wrapperFlatListItem: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    iconDeleteWrapper: {
        width: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    iconDetele: {
        width: 18,
        height: 18
    },
    textAdd: {
        fontSize: 22,
        textAlign: 'center'
    },
    flatListItemName: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatListItemPoint: {
        width: '20%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatListItemAdd: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: 65,
        height: 30,
        textAlign: 'center'
    },
    textContent: {
        fontSize: 16,
        fontFamily: 'SegoeUI'
    }
});