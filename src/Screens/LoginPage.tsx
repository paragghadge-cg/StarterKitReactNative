import React, { PureComponent } from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import NavigationManager from '../Helper/NavigationManager';
import { addUserData } from '../ReduxStore/Reducers/GlobalReducers';
import { UserData } from '../Types/DataTypes';

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
  email: string;
  password: string;
}

class LoginPage extends PureComponent<LoginPageProps, LoginPageState> {
  constructor(props: LoginPageProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  isValidEmail = (data: string) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isValid = regex.test(data);
    // console.log('isValidemail', isValid, data);
    return isValid && data?.trim().length;
  };

  hasWhiteSpace = (s: string) => {
    return /\s/g.test(s);
  };

  isValidPassword = (data: string) => {
    return data?.length > 5 && !this.hasWhiteSpace(data);
  };

  /**
   * Start any function name with small letter
   */
  navigateToDashBoard = () => {
    const checkValidEmail = this.isValidEmail(this.state.email);
    const checkValidPassword = this.isValidPassword(this.state.password);

    if (
      this.state.password &&
      this.state.email !== '' &&
      checkValidEmail &&
      checkValidPassword
    ) {
      this.props.dispatch(addUserData(this.state.email));
      this.setState({email:'',password:''})
      NavigationManager.navigate('App');
    } else {
      console.log('pls enter your credentials correctly');
    }
  };

  setName = (value: string) => {
    this.setState({
      email: value
    });
  };
  setPassword = (value: string) => {
    this.setState({
      password: value
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
            marginTop: 20
          }}
        >
          <Image
            source={require('../Assets/ALSTOM-Transport-SA.png')}
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
              onChangeText={this.setPassword}
            />
          </View>
          <View
            style={style.viewStyle}
          >
            <View style={{ margin: 10,width:300 }}>
              <Button
                title="Sign In"
                color={'#9a91b3'}
                onPress={this.navigateToDashBoard}
                
              />
            </View>
            <View style={{ margin: 10 }}>
              <Button
                title="SSO"
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
  mainContainer: { alignItems: 'center', justifyContent: 'center', flex: 1,marginBottom:20 },
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
  },
 viewStyle:{
  marginTop: 20,
  // flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginLeft: 20

 }
});

export default connect()(LoginPage);
