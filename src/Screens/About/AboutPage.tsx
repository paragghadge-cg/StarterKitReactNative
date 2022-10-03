import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import CustomTopNav from '../../Components/CustomTopNav';
/**
 * Define all props with data type
 */
interface AboutPageProps {
    navigation: any;
    dispatch: any
}

/**
 * Define all state variable with data type
 */
interface AboutPageState {

}

class AboutPage extends PureComponent<AboutPageProps, AboutPageState> {
    constructor(props: AboutPageProps) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={style.mainContainer}>
                <CustomTopNav title={'About'} showIcon />
                <Text>About Page</Text>
            </View>
        );
    }
}


const style = StyleSheet.create({
    mainContainer: { flex: 1 },
    buttonStyle: { marginTop: 20 },

});

export default connect()(AboutPage);
