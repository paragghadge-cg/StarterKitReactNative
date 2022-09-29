import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component, PureComponent } from 'react';
import Toast from '../Components/Toast';
import apiManager from '../Networking/ApiManager';
import { strings } from '../Localization/i18n';
import { fontStyle } from '../Theme';

interface ProfilePageProps {}

interface ProfilePageState {
    apiResponse: any;
}

export default class ProfilePage extends PureComponent<ProfilePageProps, ProfilePageState> {
    constructor(props: ProfilePageProps) {
        super(props);
        this.state = {
            apiResponse: {}
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let data = await apiManager.apiCall('', 'GET');
        this.setState({
            apiResponse: data
        });
    };

    render() {
        return (
            <View style={style.mainContainer}>
                <Toast />
                <TouchableOpacity onPress={this.getData}>
                    <Text style={[fontStyle.extraLargeTitle, style.text]}>
                        {strings('ProfilePage.pageName')}
                    </Text>
                    <Text>
                        {strings('ProfilePage.name')}:{this.state.apiResponse?.data?.name}
                    </Text>
                    <Text>
                        {strings('ProfilePage.year')}:{this.state.apiResponse?.data?.year}
                    </Text>
                    <Text>
                        {strings('ProfilePage.color')}:{this.state.apiResponse?.data?.color}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    text: { marginBottom: 20 }
});
