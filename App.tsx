import React, { Component, PureComponent } from 'react';
import RootNavigator from './src/Navigation';
import { Provider } from 'react-redux';
import Store from './src/ReduxStore/Store';
import NetworkProvider from './src/Networking/NetworkProvider';
import { Text, TouchableOpacity, View } from 'react-native';

interface AppProps {}

interface AppState {}

export class App extends PureComponent<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
    }
    /**
     *
     * To get NetworkStatus use  NetworkProvider.checkIsNetworkConnected()
     */
    render() {
        return (
            <Provider store={Store}>
                <NetworkProvider>
                    <RootNavigator />
                </NetworkProvider>
            </Provider>
        );
    }
}

export default App;
