import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity,
    TextInput,
    TouchableHighlight,
    Image,
    Alert,
    ToastAndroid,
    AsyncStorage
} from 'react-native';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onClickLogin = () => {

    }

    const onClickRegister = () => {

    }

    const tabSignIn = () => {
        console.log("Error");
        //navigation.navigate('Login');
    }

    return (
        // <View style={{ flex: 1 }}>
        //     <View>
        //         <View style={{ height: 100, backgroundColor: '#d5a169', flexDirection: 'column' }} />
        //         <View style ={{ flexDirection: 'column', justifyContent: 'center', alignItems: "center", margin:15}}>
        //             <Text style={{ fontSize: 30 }}>
        //                 INTAGE COOFFEE
        //             </Text>
        //         </View>
        //     </View>
        //     <View>
        //         <Text>Login Screen</Text>
        //         <Button title='Login' onPress={() => navigation.navigate('Menu')}></Button>
        //     </View>
        // </View>

        <View style={{ paddingTop:15,  backgroundColor: '#FFF' , flex:1 }}>
            <Text style={styles.text}>Staff ID</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => setUsername(value)}
                value={username}
                placeholder={'Username'}
                autoCapitalize='none'
            />

            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                autoCapitalize='none'
            />
            <Text style={styles.text}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => setPassword(value)}
                value={password}
                secureTextEntry={true}
                placeholder={'Password'}
                autoCapitalize='none'
            />

            <View style={[{ margin: 10, alignItems: 'center' }]}>
                <Button
                    title="Register"
                    color="#259269"
                    onPress={onClickLogin}
                />
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginLeft: 10
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        borderRadius: 10
    }
});