import React, { PureComponent } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CustomTopNav from '../Components/CustomTopNav';
import { automationIds } from '../Constants';
import NavigationManager from '../Helper/NavigationManager';
import I18n, { strings } from '../Localization/i18n';
import { UserData } from '../Types/DataTypes';

/**
 * Define all props with data type
 */
interface DashBoardProps {
    userData: UserData;
    language: string;
    route: any;
    navigation: any;
    dispatch: any;
}

/**
 * Define all state variable
 */
interface DashBoardState {
    list: Array<any>;
    modalVisible: boolean;
}

class DashBoard extends PureComponent<DashBoardProps, DashBoardState> {
    constructor(props: DashBoardProps) {
        super(props);
        this.state = {
            modalVisible: false,
            list: [
                {
                    name: 'Project 1',
                    id: 1
                },
                {
                    name: 'Project 2',
                    id: 2
                },
                {
                    name: 'Project 3',
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
            <TouchableOpacity
                style={styles.card}
                onPress={() => NavigationManager.navigate('Details', item)}
            >
                <Text style={{ marginTop: 5, fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
        );
    };
    private keyExtractor = (item: any, index: any) => index.toString();
    render() {
        console.log('language', I18n.language);
        return (
            <View testID={automationIds.DashboardPage_MainView} style={styles.mainContainer}>
                <CustomTopNav title="Projects" />
                {/* <TouchableOpacity >
                    <Text style={styles.text}>{strings('DashBoard.message')}</Text>
                </TouchableOpacity>  */}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <Text>
                        {strings('DashBoard.message')} {this.props.userData}
                    </Text>
                    <FlatList
                        data={this.state.list}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                   
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Are you sure you want to logout!</Text>
                            <View style={{ margin: 10, width: 200, padding: 10 }}>
                                <View >
                                    <Button
                                        title="Cancel"
                                        color={'grey'}
                                        onPress={() => this.setState({ modalVisible: false })}
                                    />
                                </View>
                                <View style={{marginTop:10}}>
                                    <Button
                                        title="Logout"
                                        color={'grey'}
                                        onPress={() => NavigationManager.navigate('LoginPage')}
                                    />
                                </View>
                            </View>
                          
                        </View>
                    </View>
                </Modal>
                <Button title="modal" onPress={() => this.setState({ modalVisible: true })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: { flex: 1, backgroundColor: 'white' },
    text: { alignSelf: 'center' },
    card: {
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 2 },
        // shadowRadius: 6,
        // shadowOpacity: 0.26,
        // elevation: 8,
        // backgroundColor: 'white',
        // borderRadius: 10,
        // marginTop: 50,
        justifyContent: 'center',
        width: 400,
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '80%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#F194FF'
    },
    buttonClose: {
        backgroundColor: '#2196F3'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});

const mapStateToProps = (state: any) => {
    return {
        userData: state.globalReducer.userData,
        language: state.globalReducer.language
    };
};

export default connect(mapStateToProps)(DashBoard);
