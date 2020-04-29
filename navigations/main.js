import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../components/menu/index';
import TabLoginResgister from '../components/tabLoginComponent/index';
import TabAccountManagement from '../components/tabManagementComponent/index';
import Order from '../components/order/index';
import { useSelector } from "react-redux";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LogoLeft, LogoTitle, LogoRight, TextTitle } from './header'

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
                        headerStyle: { backgroundColor: '#DF8931' },
                        headerTitleAlign: 'center',
                    }}>
                    {
                        loginState.user == null ?
                            (
                                <Stack.Screen name="TabLoginResgister" component={TabLoginResgister}
                                    options={() => ({
                                        animationTypeForReplace: !loginState.isSignIn ? 'pop' : 'push',
                                        headerLeft: () => (<LogoLeft />),
                                        headerTitle: () => (<TextTitle />),
                                    })}
                                />
                            ) : (
                                <>
                                    <Stack.Screen name="Menu" component={Menu}
                                        options={({ navigation }) => ({
                                            headerLeft: () => (<LogoLeft />),
                                            headerTitle: () => (<LogoTitle navigation={navigation} />),
                                            headerRight: () => (<LogoRight navigation={navigation} />),
                                        })}
                                    />

                                    <Stack.Screen name="TabAccountManagement" component={TabAccountManagement}
                                        options={({ navigation }) => ({
                                            headerLeft: () => (<LogoLeft navigation={navigation} />),
                                            headerTitle: () => (<LogoTitle navigation={navigation} />),
                                        })}
                                    />

                                    <Stack.Screen name="Order" component={Order}
                                        options={({ navigation }) => ({
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


