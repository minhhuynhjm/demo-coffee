import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import Menu from '../component/screen/menu';
import TabLoginResgister from '../component/screen/tabLoginResgister';
import Header from '../component/common/header';
import TabAccountManagement from '../component/screen/tabAccountManagement';
import ShopCartIcon from '../component/screen/shopCartIcon';
import Order from '../component/screen/order';
import TestFlex from '../component/screen/testFlex'
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
    TouchableWithoutFeedback,
    ActivityIndicator
} from 'react-native';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255,255,255)',
    },
};

function SplashScreen() {
    return (
        <View>
            <ActivityIndicator></ActivityIndicator>
        </View>
    );
}


const Stack = createStackNavigator();

function LogoLeft({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('Menu')}>
            <Image
                style={{ width: 45, height: 45, marginLeft: 10, marginBottom: 1 }}
                source={require('../assets/food.png')}
            />
        </TouchableOpacity>
    );
}

function LogoTitle({ navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation?.navigate('TabAccountManagement')}>
            <Image
                style={{ width: 45, height: 45 }}
                source={require('../assets/management.png')}
            />
        </TouchableOpacity>
    );
}

// loginState.isLoading ? (<Stack.Screen name="Splash" component={SplashScreen} />):

export default function Navigator() {
    const loginState = useSelector((state) => (state.loginReducer));
    console.log(loginState);
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={MyTheme}>

                <Stack.Navigator
                    headerMode="float"
                    screenOptions={{
                        gestureEnabled: true,
                        // gestureDirection: "horizontal",
                        headerBackTitleVisible: false,
                        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        headerStyle: {
                            backgroundColor: '#D5A169',
                        },
                        headerTitleAlign: 'center',
                    }}>

                    {
                        loginState.user == null ?
                            (
                                <Stack.Screen name="TabLoginResgister" component={TabLoginResgister}
                                    options={({ navigation, route }) => ({
                                        animationTypeForReplace: !loginState.isSignIn ? 'pop' : 'push',
                                        headerLeft: () => (
                                            <LogoLeft />
                                        ),
                                        headerTitle: null,
                                    })}
                                />
                            ) : (
                                <>
                                    <Stack.Screen name="Menu" component={Menu}
                                        options={({ navigation, route }) => ({
                                            headerLeft: () => (
                                                <LogoLeft />
                                            ),
                                            headerTitle: () => (
                                                <LogoTitle navigation={navigation} />
                                            ),
                                            headerRight: () => (
                                                <ShopCartIcon navigation={navigation} />
                                            ),
                                        })}
                                    />

                                    <Stack.Screen name="TabAccountManagement" component={TabAccountManagement}
                                        options={({ navigation, route }) => ({
                                            headerLeft: () => (
                                                <LogoLeft navigation={navigation} />
                                            ),
                                            headerTitle: () => (
                                                <LogoTitle navigation={navigation} />
                                            ),
                                        })}
                                    />

                                    <Stack.Screen name="Order" component={Order}
                                        options={({ navigation, route }) => ({

                                            headerLeft: () => (
                                                <LogoLeft navigation={navigation} />
                                            ),
                                            headerTitle: () => (
                                                <LogoTitle navigation={navigation} />
                                            ),

                                            headerRight: () => (
                                                <ShopCartIcon />
                                            ),
                                        })}
                                    />
                                </>
                            )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );

}


