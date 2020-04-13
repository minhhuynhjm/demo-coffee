import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../component/screen/login';
import Menu from '../component/screen/menu';
import Register from '../component/screen/register';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
// const Stack = createStackNavigator()

// function Navigator() {
//     return (
//         <NavigationContainer initialRouteName={'Login'}>
//             <Stack.Navigator screenOptions={{
//                 headerShown: false
//             }}>
//                 <Stack.Screen name='Login' component={Login} />
//                 <Stack.Screen name='Register' component={Register} />
//                 <Stack.Screen name='Menu' component={Menu} />

//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
// // options={{
// //     title: 'Register', headerLeft: null,
// //     gesturesEnabled: false
// // }}

// export default Navigator;

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Register" component={Register} />
      </Tab.Navigator> 
    </NavigationContainer>
  );
}
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'  }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}