import React, { PureComponent } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Toast from '../Components/Toast';
import { strings } from '../Localization/i18n';
import { StringsKey } from '../Constants';
import { isValidValue } from '../Helper/UtilityManager';

interface NetworkProviderProps {
    children?: any;
}
interface NetworkProviderState {
    networkType: string;
    isNetworkConnected: boolean;
}

export default class NetworkProvider extends PureComponent<
    NetworkProviderProps,
    NetworkProviderState
> {
    subscription: any;
    static shared: any;
    constructor(props: NetworkProviderProps) {
        super(props);
        this.state = {
            networkType: '',
            isNetworkConnected: false
        };
        NetworkProvider.shared = this;
    }
    getNetworkStatus = () => {
        return this.state.isNetworkConnected;
    };

    /**
     *
     * @returns connection status in boolean value
     */
    static checkIsNetworkConnected() {
        return this?.shared?.getNetworkStatus();
    }

    componentDidMount() {
        this.subscription = NetInfo.addEventListener((connectionInfo) => {
            this.setState(
                {
                    networkType: connectionInfo.type,
                    isNetworkConnected: isValidValue(connectionInfo.isConnected)
                        ? connectionInfo.isConnected
                        : undefined
                },
                () => {
                    /**
                     * Can remove toast according to requirement
                     */
                    Toast.show(strings(StringsKey.NetworkKey, { network: connectionInfo.type }));
                }
            );
        });
    }

    componentWillUnmount() {
        if (this.subscription != null) this.subscription();
    }

    render() {
        return (
            <>
                {/**
                 * Can remove toast according to requirement
                 */}
                <Toast networkStatus={this.state.networkType} />
                {this.props.children}
            </>
        );
    }
}
