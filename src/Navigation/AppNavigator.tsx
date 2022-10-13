import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import DashBoard from '../Screens/DashBoard';
import { Screens } from '../Constants/Screens';
import ProfilePage from '../Screens/ProfilePage';
import SighnUp from '../Screens/Sighnup/Sighnup';
import HomePage from '../Screens/HomePage/HomePage';
import DrawerNavigator from './DrawerNavigator';
import AboutPage from '../Screens/About/AboutPage';
import HelpPage from '../Screens/Help/HelpPage';
import DetailsPage from '../Screens/DetailsPage/DetailsPage';
import LanguageChangePage from '../Screens/LanguageChangePage/LanguageChangePage';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();

export  class AppNavigator extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator
                initialRouteName={Screens.DashBoard}
                screenOptions={{
                    gestureEnabled: false,
                    header: undefined,
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name={'Drawer'}
                    component={DrawerNavigator}
                    options={{ headerShown: false }}
                />
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
                <Stack.Screen
                    name={'About'}
                    component={AboutPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name={'Help'} component={HelpPage} options={{ headerShown: false }} />
                <Stack.Screen name={'Details'} component={DetailsPage} options={{ headerShown: false }} />
                <Stack.Screen name={'LanguageChangePage'} component={LanguageChangePage} options={{ headerShown: false }} />

            </Stack.Navigator>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        language: state.globalReducer.language
    };
};
export default connect(mapStateToProps)(AppNavigator);

