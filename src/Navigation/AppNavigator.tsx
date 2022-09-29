import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import DashBoard from '../Screens/DashBoard';
import { Screens } from '../Constants/Screens';
import ProfilePage from '../Screens/ProfilePage';
import SighnUp from '../Screens/Sighnup/Sighnup';
import HomePage from '../Screens/HomePage/HomePage';

const Stack = createNativeStackNavigator();

export default class AppNavigator extends Component {
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
                    name={Screens.DashBoard}
                    component={DashBoard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Screens.ProfilePage}
                    component={ProfilePage}
                    options={{ headerShown: false }}
                />
                 
                   <Stack.Screen
                    name={'Sighnup'}
                    component={SighnUp}
                    options={{ headerShown: false }}
                />
                   <Stack.Screen
                    name={'HomePage'}
                    component={HomePage}
                    options={{ headerShown: false }}
                />
              
            </Stack.Navigator>
        );
    }
}
