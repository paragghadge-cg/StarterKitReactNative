import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component, PureComponent } from 'react';
import NavigationManager from '../Helper/NavigationManager';
import { strings } from '../Localization/i18n';
import { connect } from 'react-redux';
import { UserData } from '../Types/DataTypes';
import { automationIds, Screens } from '../Constants';
import Icon from '../Components/Icon';

/**
 * Define all props with data type
 */
interface DashBoardProps {
    userData: UserData;
    route: any;
}

/**
 * Define all state variable
 */
interface DashBoardState {}

class DashBoard extends PureComponent<DashBoardProps, DashBoardState> {
    constructor(props: DashBoardProps) {
        super(props);
    }

    navigate = () => {
        NavigationManager.navigate('LoginNew');
    };
    render() {
        return (
            <View testID={automationIds.DashboardPage_MainView} style={styles.mainContainer}>
                <TouchableOpacity onPress={this.navigate}>
                    <Text style={styles.text}>{strings('DashBoard.message')}</Text>
                </TouchableOpacity>
                <Text> {this.props.userData.name}</Text>
                <Text> {this.props.userData.name}</Text>
                <Icon name="home" color="white" family="FontAwesome"></Icon>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: { alignItems: 'center', flex: 1 },
    text: { alignSelf: 'center' }
});

const mapStateToProps = (state: any) => {
    return {
        userData: state.globalReducer.userData
    };
};

export default connect(mapStateToProps)(DashBoard);
