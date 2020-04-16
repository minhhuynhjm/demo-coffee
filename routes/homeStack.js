import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import Menu from '../component/screen/menu';
import TabLoginResgister from '../component/screen/tabLoginResgister';
import Header from '../component/common/header';
import Manager from '../component/screen/manager';
import ShopCartIcon from '../component/screen/shopCartIcon';
import Order from '../component/screen/order';

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
    AsyncStorage,
    TouchableWithoutFeedback
} from 'react-native';

const Stack = createStackNavigator();

function LogoLeft({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('Menu')}>
            <Image
                style={{ width: 50, height: 50 }}
                source={{ uri: 'https://pngimage.net/wp-content/uploads/2018/05/cafe-icon-png-8.png' }}
            />
        </TouchableOpacity>
    );
}

function LogoTitle({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('Manager')}>
            <Image
                style={{ width: 60, height: 50 }}
                source={{ uri: 'https://img.icons8.com/clouds/2x/home.png' }}
            />
        </TouchableOpacity>
    );
}

// function LogoRight() {
//     return (
//         <View style={{ position: 'absolute', height: 50, width: 50, borderRadius: 15 }}>
//             <Text style={{ color: 'red', fontWeight:'bold' }}>0</Text>
//             <Image
//                 style={{ width: 50, height: 30 }}
//                 source={{ uri: 'https://www.searchpng.com/wp-content/uploads/2019/02/Cart-PNG-Icon-715x715.png' }}
//             />
//         </View>
//     );
// }

// const optionStack = {
//     headerStyle: {
//         backgroundColor: '#D5A169',
//     },

//     headerLeft: () => (
//         <LogoLeft />
//     ),
//     headerTitle: () => (
//         <LogoTitle />
//     ),
//     headerTitleAlign: 'center',

//     headerRight: () => (
//         <LogoRight />
//     ),
// }


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TabLoginResgister"
                headerMode="float"
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    headerBackTitleVisible: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerStyle: {
                        backgroundColor: '#D5A169',
                    },
                    headerTitleAlign: 'center',
                }}>

                <Stack.Screen name="TabLoginResgister" component={TabLoginResgister}
                    options={({ navigation, route }) => ({
                        headerLeft: () => (
                            <LogoLeft navigation={navigation} />
                        ),
                        headerTitle: null,
                    })}
                />

                <Stack.Screen name="Menu" component={Menu}
                    options={({ navigation, route }) => ({

                        headerLeft: () => (
                            <LogoLeft />
                        ),
                        headerTitle: () => (
                            <LogoTitle navigation={navigation} />
                        ),
                        headerRight: () => (
                            <ShopCartIcon navigation={navigation}/>
                        ),
                    })}
                />

                <Stack.Screen name="Manager" component={Manager}
                    options={({ navigation, route }) => ({

                        headerLeft: () => (
                            <LogoLeft />
                        ),
                        headerTitle: () => (
                            <LogoTitle navigation={navigation} />
                        ),

                        headerRight: () => (
                            <ShopCartIcon />
                        ),
                    })}
                />

                <Stack.Screen name="Order" component={Order}
                    options={({ navigation, route }) => ({

                        headerLeft: () => (
                            <LogoLeft navigation={navigation}/>
                        ),
                        headerTitle: () => (
                            <LogoTitle navigation={navigation} />
                        ),

                        headerRight: () => (
                            <ShopCartIcon />
                        ),
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );

}


