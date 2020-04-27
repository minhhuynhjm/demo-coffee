import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import Menu from '../components/menu/index';
import TabLoginResgister from '../components/tabLoginComponent/index';
import TabAccountManagement from '../components/tabManagementComponent/index';
import Order from '../components/order/index';
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { LogoLeft, LogoTitle, LogoRight } from './header'

const WhiteTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'rgb(255,255,255)',
    },
};

const Stack = createStackNavigator();

export default function Navigator() {
    const loginState = useSelector((state) => (state.loginReducer));
    return (
        <SafeAreaProvider>
            <NavigationContainer theme={WhiteTheme}>
                <Stack.Navigator
                    screenOptions={{
                        gestureEnabled: true, headerBackTitleVisible: false,
                        headerStyle: { backgroundColor: '#D5A169', },
                        headerTitleAlign: 'center',
                    }}>
                    {
                        loginState.user == null ?
                            (
                                <Stack.Screen name="TabLoginResgister" component={TabLoginResgister}
                                    options={({ navigation, route }) => ({
                                        animationTypeForReplace: !loginState.isSignIn ? 'pop' : 'push',
                                        headerLeft: () => (<LogoLeft />),
                                        headerTitle: null,
                                    })}
                                />
                            ) : (
                                <>
                                    <Stack.Screen name="Menu" component={Menu}
                                        options={({ navigation, route }) => ({
                                            headerLeft: () => (<LogoLeft />),
                                            headerTitle: () => (<LogoTitle navigation={navigation} />),
                                            headerRight: () => (<LogoRight navigation={navigation} />),
                                        })}
                                    />

                                    <Stack.Screen name="TabAccountManagement" component={TabAccountManagement}
                                        options={({ navigation, route }) => ({
                                            headerLeft: () => (<LogoLeft navigation={navigation} />),
                                            headerTitle: () => (<LogoTitle navigation={navigation} />),
                                        })}
                                    />

                                    <Stack.Screen name="Order" component={Order}
                                        options={({ navigation, route }) => ({
                                            headerLeft: () => (<LogoLeft navigation={navigation} />),
                                            headerTitle: () => (<LogoTitle navigation={navigation} />),
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


