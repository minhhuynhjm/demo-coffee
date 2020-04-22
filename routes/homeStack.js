import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
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
        <TouchableOpacity onPress={() => navigation?.navigate('TabAccountManagement')}>
            <Image
                style={{ width: 60, height: 50 }}
                source={{ uri: 'https://img.icons8.com/clouds/2x/home.png' }}
            />
        </TouchableOpacity>
    );
}

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default function Navigator() {
    const loginState = useSelector((state) => (state.loginReducer));
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
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
                    {
                        !loginState.isSignIn ? (
                            <Stack.Screen name="TabLoginResgister" component={TabLoginResgister}
                                options={({ navigation, route }) => ({
                                    headerLeft: () => (
                                        <LogoLeft navigation={navigation} />
                                    ),
                                    headerTitle: null,

                                })}
                            />
                        ) : (
                                <>
                                    {/* <Stack.Screen name="TestFlex" component={TestFlex}
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
                                /> */}

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


