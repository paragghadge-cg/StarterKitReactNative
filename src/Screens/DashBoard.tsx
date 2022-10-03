import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component, PureComponent } from 'react';
import NavigationManager from '../Helper/NavigationManager';
import { strings } from '../Localization/i18n';
import { connect } from 'react-redux';
import { UserData } from '../Types/DataTypes';
import { automationIds, Screens } from '../Constants';
import Icon from '../Components/Icon';
import { FlatList } from 'react-native-gesture-handler';
import CustomTopNav from '../Components/CustomTopNav';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

/**
 * Define all props with data type
 */
interface DashBoardProps {
    userData: UserData;
    route: any;
    navigation: any;
    dispatch: any;
}

/**
 * Define all state variable
 */
interface DashBoardState {
    list: Array<any>;
}

class DashBoard extends PureComponent<DashBoardProps, DashBoardState> {
    constructor(props: DashBoardProps) {
        super(props);
        this.state = {
            list: [
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]
        };
    }

    navigate = () => {
        NavigationManager.navigateAndClear('ProfilePage');
    };

    renderItem = ({ item }: any) => {
        return (
            <View style={styles.card}>
                <Text style={{ marginTop: 5 }}>{item.id}</Text>
            </View>
        );
    };
    render() {
        return (
            <View testID={automationIds.DashboardPage_MainView} style={styles.mainContainer}>
                <CustomTopNav title="Dashboard" showIcon />
                {/* <TouchableOpacity onPress={this.navigate}>
                    <Text style={styles.text}>{strings('DashBoard.message')}</Text>
                </TouchableOpacity> */}
                {/* <Text> {this.props.userData.name}</Text>
                <Text> {this.props.userData.name}</Text> */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList data={this.state.list} renderItem={this.renderItem} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },
    text: { alignSelf: 'center' },
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300
    }
});

const mapStateToProps = (state: any) => {
    return {
        userData: state.globalReducer.userData
    };
};

export default connect(mapStateToProps)(DashBoard);
