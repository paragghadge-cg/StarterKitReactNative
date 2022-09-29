import { Text, View, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import React, { Component, PureComponent } from 'react';
import { strings } from '../Localization/i18n';
import { color } from '../Theme';

interface NetworkCheckPopupProps {
    networkStatus?: string;
}

interface NetworkCheckPopupState {
    isToastVisible: boolean;
    message: string;
}
export default class Toast extends PureComponent<NetworkCheckPopupProps, NetworkCheckPopupState> {
    static shared: any;
    constructor(props: NetworkCheckPopupProps) {
        super(props);
        this.state = {
            isToastVisible: false,
            message: ''
        };
        Toast.shared = this;
    }

    /**
     *
     * @param message Toast message
     * this function is to make toast self closing
     */
    showModal = (message: string) => {
        this.setState({
            message: message,
            isToastVisible: true
        });
        setTimeout(() => {
            this.setState({
                isToastVisible: false
            });
        }, 2000);
    };
    static show(message: string) {
        setTimeout(() => {
            this.shared?.showModal(message);
        }, 200);
    }

    render() {
        return (
            <Modal animationType="fade" transparent visible={this.state.isToastVisible}>
                <View style={style.mainContainer}>
                    <View style={style.messageContainer}>
                        <Text style={style.text}>{this.state.message}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    },
    text: { fontSize: 16, color: 'white' },
    messageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.black,
        marginBottom: 100,
        borderRadius: 5,
        overflow: 'hidden',
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});
