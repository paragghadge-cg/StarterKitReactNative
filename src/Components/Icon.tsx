import React, { PureComponent } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

type Family =
    | 'AntDesign'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons';

interface IconProps {
    name: string;
    family?: Family;
    color?: string;
    size?: number;
}

interface IconState {}

export default class Icon extends PureComponent<IconProps, IconState> {
    static defaultProps: {
        name: string | undefined;
        family?: any | undefined;
        color?: string | undefined;
        size?: number | undefined;
    };

    constructor(props: IconProps) {
        super(props);
    }

    getIconAndFamily = () => {
        let Family: any;
        const { color, size, name, family } = this.props;
        switch (family) {
            case 'AntDesign':
                Family = AntDesign;
                break;
            case 'EvilIcons':
                Family = EvilIcons;
                break;
            case 'Feather':
                Family = Feather;
                break;
            case 'FontAwesome':
                Family = FontAwesome;
                break;
            case 'FontAwesome5':
                Family = FontAwesome5;
                break;
            case 'Foundation':
                Family = Foundation;
                break;
            case 'MaterialCommunityIcons':
                Family = MaterialCommunityIcons;
                break;
            case 'MaterialIcons':
                Family = MaterialIcons;
                break;
            case 'Octicons':
                Family = Octicons;
                break;
            case 'SimpleLineIcons':
                Family = SimpleLineIcons;
                break;
            default:
                Family = AntDesign;
        }
        return <Family name={name} color={color} size={size}></Family>;
    };
    render() {
        return this.getIconAndFamily();
    }
}

Icon.defaultProps = {
    name: 'home',
    family: AntDesign,
    color: '#000000',
    size: 20
};
