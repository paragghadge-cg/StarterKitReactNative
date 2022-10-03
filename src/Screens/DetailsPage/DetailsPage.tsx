import React, { PureComponent } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import CustomTopNav from '../../Components/CustomTopNav';
/**
 * Define all props with data type
 */
interface DetailsPageProps {
    navigation: any;
    dispatch: any;
    route: any;
}

/**
 * Define all state variable with data type
 */
interface DetailsPageState {}

class DetailsPage extends PureComponent<DetailsPageProps, DetailsPageState> {
    constructor(props: DetailsPageProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={style.mainContainer}>
                <CustomTopNav title={'Details'} showIcon />
                <View style={style.mainView}>
                    <Text style={style.text}>Welcome to {this.props.route.params.name}</Text>
                    <View style={style.buttonView}>
                        <Button title="Login " />
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: { flex: 1 },
    buttonStyle: { marginTop: 20 },
    mainView: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    buttonView: {
        marginTop: 30
    },
    text: {
        fontSize: 20
    }
});

export default connect()(DetailsPage);
