import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from '@react-navigation/drawer';
import React, { Component } from 'react';
import { Alert, Button, View } from 'react-native';
import { Screens } from '../Constants/Screens';
import DashBoard from '../Screens/DashBoard';
import Icon from '../Components/Icon';
import { connect } from 'react-redux';
import { addUserData } from '../Actions/GlobalActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationManager from '../Helper/NavigationManager';
import AppNavigator from './AppNavigator';
import LoginPage from '../Screens/LoginPage';
import SighnUp from '../Screens/Sighnup/Sighnup';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <DrawerItem label="Dashboard" onPress={() => NavigationManager.navigate('DashBoard')} />
            <DrawerItem label="About" onPress={() => NavigationManager.navigate('About')} />
            <DrawerItem label="Help" onPress={() => NavigationManager.navigate('Help')} />

            <DrawerItem
                label="Logout"
                onPress={() => NavigationManager.navigateAndClear('LoginPage', 1)}
            />
        </DrawerContentScrollView>
    );
}

class DrawerNavigator extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Drawer.Navigator
                useLegacyImplementation
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                initialRouteName={Screens.LoginPage}
                screenOptions={{
                    header: undefined,
                    headerShown: false
                }}
            >
                <Drawer.Screen
                    name={Screens.LoginPage}
                    component={LoginPage}
                    options={{
                        headerShown: false
                    }}
                />
                <Drawer.Screen
                    name={Screens.DashBoard}
                    component={DashBoard}
                    options={{
                        headerShown: true,
                        // headerRight: () => (
                        //     <TouchableOpacity style={{ marginRight: 10 }}>
                        //         <Icon name="home" color="black" family="FontAwesome"></Icon>
                        //     </TouchableOpacity>
                        // )
                    }}
                />
                <Drawer.Screen
                    name={'Signup'}
                    component={SighnUp}
                    options={{ headerShown: false }}
                />
                <Drawer.Screen
                    name={'App'}
                    component={AppNavigator}
                    options={{
                        headerShown: false
                    }}
                />
            </Drawer.Navigator>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {};
};

export default connect(null, mapDispatchToProps)(DrawerNavigator);
