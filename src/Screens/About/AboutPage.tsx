import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import CustomTopNav from '../../Components/CustomTopNav';
import NavigationManager from '../../Helper/NavigationManager';
import Icon from '../../Components/Icon';
/**
 * Define all props with data type
 */

interface AboutPageProps {
    navigation: any;
    dispatch: any;
}

/**
 * Define all state variable with data type
 */
interface AboutPageState {
    list: any;
    textFeildValue: string;
    filterList:Array<any>
}

class AboutPage extends PureComponent<AboutPageProps, AboutPageState> {
    constructor(props: AboutPageProps) {
        super(props);
        this.state = {
            textFeildValue: '',
            filterList:[],
            list: [
                {
                    name: 'Pantograph Add [Add1]',
                    id: 1,
                    subscription: true
                },
                {
                    name: 'Emergency Brake [EB-001]',
                    id: 2,
                    subscription: true
                },
                {
                    name: 'Bogive -[001]',
                    id: 2,
                    subscription: false
                },
                {
                    name: 'Emergency Brake [EB-001]',
                    id: 2,
                    subscription: false
                },
                {
                    name: 'Bogive -[001]',
                    id: 2,
                    subscription: false
                },
                {
                    name: 'Emergency Brake [EB-001]',
                    id: 2
                },
                {
                    name: 'Bogive -[001]',
                    id: 2
                }
            ],
        };
    }
    componentDidMount() {
         this.setState({ filterList: this.state.list })
    }

    serachFilter = async () => {
        if (this.state.textFeildValue.length < 2) {
            this.setState({ filterList: this.state.list })
        }
        else {
            let newItem = this.state.list.filter((newVal: any) => {
                return newVal.name.toLowerCase().search(this.state.textFeildValue.toLowerCase()) != -1;
            });
            this.setState({ filterList: newItem })
        }

    };

    renderItem = ({ item }: any) => {
        console.log(this.state.textFeildValue,"ss")
        return (
            <TouchableOpacity style={style.card} onPress={() => { }}>
                <View>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 20,
                            color: item.subscription ? 'green' : 'grey'
                        }}
                    >
                        {item.name}
                    </Text>
                </View>
                <View style={{ marginRight: 10 }}>
                    <Icon name="mobile-signal" color="black" family="Foundation" size={30}></Icon>
                </View>
            </TouchableOpacity>
        );
    };
    private keyExtractor = (item: any, index: any) => index.toString();

    render() {
        return (
            <View style={style.mainContainer}>
                <CustomTopNav title={'About'} showIcon iconName="filter-alt" />
                <View style={{ backgroundColor: 'grey', padding: 10 }}>
                    <TextInput
                        style={{ backgroundColor: 'white', padding: 10 }}
                        onChangeText={(text) => this.setState({ textFeildValue: text })}
                        value={this.state.textFeildValue}
                        placeholder=""
                        keyboardType="numeric"
                        onChange={()=>this.serachFilter()}
                    />
                </View>
                {console.log(this.state.textFeildValue)}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <FlatList
                        data={this.state.filterList}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                    />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: { flex: 1 },
    buttonStyle: { marginTop: 20 },
    card: {
        justifyContent: 'space-between',
        width: 400,
        borderColor: 'grey',
        borderBottomWidth: 0.5,
        padding: 10,
        flexDirection: 'row'
    }
});

export default connect()(AboutPage);
