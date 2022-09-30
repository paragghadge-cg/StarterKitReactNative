import { NavigationContainer } from '@react-navigation/native';
import React, { PureComponent } from 'react';
import NavigationManager from '../Helper/NavigationManager';
import { theme } from '../Theme';
import { getCurrentTheme } from '../Helper/DeviceManager';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { connect } from 'react-redux';
import { UserData } from '../Types/DataTypes';
import { ColorSchemeName } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

interface RootNavigatorProps {
    userData?: UserData;
}
interface RootNavigatorState {}

class RootNavigator extends PureComponent<RootNavigatorProps, RootNavigatorState> {
    constructor(props: RootNavigatorProps) {
        super(props);
        this.state = {};
    }

    /**
     *
     * @param navigatorRef function of all NavigationContainer
     * Use this function to set references in navigation manager
     */
    setNavigationReference = (navigatorRef: any) => {
        NavigationManager.setTopLevelNavigator(navigatorRef);
    };

    getTheme = () => {
        let currentTheme = getCurrentTheme();
        return currentTheme;
    };

    render() {
        return (
            <NavigationContainer theme={theme[this.getTheme()]} ref={this.setNavigationReference}>
                {/* {this.props?.userData?.name?.length > 0 ? <AppNavigator /> : <AuthNavigator />} */}
                <DrawerNavigator />
            </NavigationContainer>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        userData: state.globalReducer.userData
    };
};
export default connect(mapStateToProps, null)(RootNavigator);
