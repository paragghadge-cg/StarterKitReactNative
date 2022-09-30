import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import { strings } from '../Localization/i18n';
import { connect } from 'react-redux';
import { UserData } from '../Types/DataTypes';
import { Dispatch } from 'redux';
import { addUserData } from '../ReduxStore/Reducers/GlobalReducers';
import NavigationManager from '../Helper/NavigationManager';

/**
 * Define all props with data type
 */
interface LoginPageProps {
    dispatch: Dispatch;
    addUserData(userData: UserData): any;
}

/**
 * Define all state variable with data type
 */
interface LoginPageState {
    name: string;
}

class LoginPage extends PureComponent<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            name: ''
        };
    }

    /**
     * Start any function name with small letter
     */
    navigateToDashBoard = () => {
        // let value = {
        //   name: this.state.name
        // };
        // this.props.dispatch(addUserData(value));
        NavigationManager.navigate('App');
    };

    setName = (value: string) => {
        this.setState({
            name: value
        });
    };

    render() {
        return (
            <View style={style.mainContainer}>
                {/* <TextInput placeholder="Name" onChangeText={this.setName} />
        <TouchableOpacity onPress={this.navigateToDashBoard} style={style.buttonStyle}>
          <Text>{strings('Login.login')}</Text>
        </TouchableOpacity> */}

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 50
                    }}
                >
                    <Image
                        source={{
                            uri: 'https://solarimpulse.com/files/companies/logo/2020-03-05-163724/ALSTOM-Transport-SA.png'
                        }}
                        style={{ height: 100, width: 300 }}
                        resizeMode={'contain'}
                    />
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 40,
                        width: '100%'
                    }}
                >
                    <View style={style.inputView}>
                        <TextInput
                            style={style.TextInput}
                            placeholder="Email."
                            placeholderTextColor="#003f5c"
                            onChangeText={this.setName}
                        />
                    </View>
                    <View style={style.inputView}>
                        <TextInput
                            style={style.TextInput}
                            placeholder="Password."
                            placeholderTextColor="#003f5c"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            marginLeft: 20
                        }}
                    >
                        <View style={{ margin: 10 }}>
                            <Button
                                title="Login"
                                color={'#9a91b3'}
                                onPress={this.navigateToDashBoard}
                            />
                        </View>
                        <View style={{ margin: 10 }}>
                            <Button
                                title="Sighn up"
                                color={'#9a91b3'}
                                onPress={() => NavigationManager.navigate('Signup')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

/**
 * use camel case name  for style object name
 */
const style = StyleSheet.create({
    mainContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    buttonStyle: { marginTop: 20 },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputView: {
        backgroundColor: '#ede9f7',
        height: 40,
        marginTop: 20,
        // alignItems: "center",
        justifyContent: 'center',
        width: '89%'
    },

    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20
    },
    form: {
        alignItems: 'center',
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        paddingHorizontal: 16
    }
});

export default connect()(LoginPage);
