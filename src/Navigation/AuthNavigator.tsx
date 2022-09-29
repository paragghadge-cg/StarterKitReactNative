import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { Screens } from '../Constants/Screens';
import LoginPage from '../Screens/LoginPage';
import SighnUp from '../Screens/Sighnup/Sighnup';

const Stack = createNativeStackNavigator();

export default class AuthNavigator extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator
                initialRouteName={Screens.LoginPage}
                screenOptions={{
                    gestureEnabled: false,
                    header: undefined,
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={Screens.LoginPage}
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
                 <Stack.Screen
                    name={'Signup'}
                    component={SighnUp}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        );
    }
}
