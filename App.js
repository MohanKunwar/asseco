import React, { useState, useEffect } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
// import SplashScreen from 'react-native-splash-screen';
import { Login, Register } from './src/screens/auth';
import { HomeScreen } from './src/screens/app';
import auth from "@react-native-firebase/auth";
import LoadingScreen from './src/screens/LoadingScreen';


export default function App() {
    // useEffect(() => {
    //     SplashScreen.hide();
    // }, []);



    const Main = createNativeStackNavigator();
    const AppStack = () => (
        <Main.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false
            }}>
            <Main.Screen name="Home" component={HomeScreen} />

        </Main.Navigator>
    );


    const Auth = createNativeStackNavigator();
    const AuthStack = () => (
        <Auth.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Auth.Navigator>
    );

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}
            >
                <Stack.Screen name="AuthLoading" component={LoadingScreen} />

                <Stack.Screen name="Main" component={AppStack} />
                <Stack.Screen name="Auth" component={AuthStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

