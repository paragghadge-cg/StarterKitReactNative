import { NavigationContainer } from '@react-navigation/native';
import React, { Component, PureComponent } from 'react';
import NavigationManager from '../Helper/NavigationManager';
import { theme } from '../Theme';
import { getCurrentTheme } from '../Helper/DeviceManager';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { connect } from 'react-redux';
import { UserData } from '../Types/DataTypes';
import { ColorSchemeName } from 'react-native';
import I18n from '../Localization/i18n';
import DrawerNavigator from './DrawerNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RootNavigatorProps {
    userData?: UserData;
    language?: string;
}
interface RootNavigatorState {}


class RootNavigator extends PureComponent<RootNavigatorProps, RootNavigatorState> {
    constructor(props: RootNavigatorProps) {
        super(props);
        this.state = {};
    }

    async componentDidMount(){
       const lang=  await AsyncStorage.getItem('language')
        I18n.changeLanguage(lang||'en')
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
        userData: state.globalReducer.userData,
        language: state.globalReducer.language
    };
};
export default connect(mapStateToProps, null)(RootNavigator);


