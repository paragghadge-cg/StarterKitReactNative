import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '../Components/Icon';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import NavigationManager from '../Helper/NavigationManager';


interface CustomTopNavProps {
    title: string,
    showIcon?: boolean,
     onPress?:any,
    navigation?:any,
    dispatch?:any,
    iconName?:string
}

interface CustomTopNavState {

}

class CustomTopNav extends PureComponent<CustomTopNavProps, CustomTopNavState> {
    constructor(props: CustomTopNavProps) {
        super(props);
        this.state = {

        };
    }
onPressButton= ()=>{
    NavigationManager.openDrawer()
}
    render() {
        return (
            <View style={style.mainContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,alignItems:'center',padding:10,backgroundColor:'#4e61f2'}}>
                {this.props.showIcon&& 
                    <View>
                  <TouchableOpacity onPress={this.onPressButton}>
                        <Icon name="menu" color="black" family="Feather" size={25}></Icon>
                        </TouchableOpacity> 
                    </View>
    }
                    <View>
                        <Text style={{fontSize:20}}>{this.props.title}</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={this.onPressButton}>
                        <Icon name={this.props.iconName|| 'logout'} color="black" family="MaterialIcons" size={25}></Icon>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    mainContainer: {  },
    buttonStyle: { marginTop: 20 },

});

export default connect()(CustomTopNav);
