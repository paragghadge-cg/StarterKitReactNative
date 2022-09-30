import React, { PureComponent } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import CustomTopNav from '../../Components/CustomTopNav';
import { COLORS } from '../../Constants/themes';
/**
 * Define all props with data type
 */
interface HelpPageProps {}

interface HelpPageState {}

class HelpPage extends PureComponent<HelpPageProps, HelpPageState> {
    constructor(props: HelpPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <CustomTopNav title={'Help'} showIcon />
                <View style={style.view1}>
                    <Image
                        resizeMode="cover"
                        style={{ width: '100%', height: 300, borderBottomRightRadius: 200 }}
                        source={{
                            uri: 'https://img.freepik.com/free-vector/online-doctor-consultation-illustration_88138-414.jpg?t=st=1646637883~exp=1646638483~hmac=b058a6946827ab600258aec0a686336fbb27c64f400022d78882b4a1a04dbf31&w=1060'
                        }}
                    />
                </View>

                <View style={style.view2}>
                    <Text style={style.view3}>Help Desk : Email</Text>
                    <Text style={style.view4}>care@gmail.com</Text>
                  
                </View>
                <View style={style.view2}>
                    <Text style={style.view3}>Help Desk : Number</Text>
                    <Text style={style.view4}>+91 12121211212</Text>
                   
                </View>
                <View>
                    <Text style={{ marginTop: '20%', paddingLeft: 20 }}>
                        Emergency Helplines are available 24x7
                    </Text>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    buttonStyle: { marginTop: 20 },
    view1: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    box2: {
        paddingHorizontal: 40,
        height: '50%',
        justifyContent: 'space-evenly'
    },
    view2: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: COLORS.LIGHT_GREEN,
        padding: 10,
        // borderRadius: 10,
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopEndRadius: 20
    },
    view4: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 15,
        padding: 5
    },
    view3: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        color: COLORS.gray
    },
    view5: {
        backgroundColor: COLORS.PrimaryGreen,
        alignItems: 'center',
        width: '70%',
        justifyContent: 'center',
        borderRadius: 10
    },
    box7: {
        paddingHorizontal: 100,
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        paddingTop: 10
    }
});

export default connect()(HelpPage);
