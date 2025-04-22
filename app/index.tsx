// index.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/home';
import Registrar from './src/screens/register';
import Escaner from './src/screens/escaner/Escaner';
// You can create additional screens: RegisterScreen, RescanScreen, AssignScreen

export type RootStackParamList = {
    Home: undefined;
    Register: undefined;
    Escanear:undefined;
    Rescan: undefined;
    Assign: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Register' component={Registrar} />
            <Stack.Screen name='Escanear' component={Escaner} />
        </Stack.Navigator>

    );
}