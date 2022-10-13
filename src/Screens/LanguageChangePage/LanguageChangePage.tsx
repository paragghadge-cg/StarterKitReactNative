import React, { PureComponent } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import CustomTopNav from '../../Components/CustomTopNav';
import { COLORS } from '../../Constants/themes';
import I18n from '../../Localization/i18n';
import { setLanguage } from '../../ReduxStore/Reducers/GlobalReducers';
import RNRestart from 'react-native-restart'; // Import package from node modules
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Define all props with data type
 */
interface LanguageChangePageProps {
    setLanguage: any;
    language: any;
}

interface LanguageChangePageState {}

class LanguageChangePage extends React.Component<LanguageChangePageProps, LanguageChangePageState> {
    constructor(props: LanguageChangePageProps) {
        super(props);
        this.state = {};
    }
    onLanguageChange = async (language: string) => {
        // I18n.changeLanguage('en').then((result) =>
        // this.props.setLanguage('en')
        await I18n.changeLanguage('en');
        await AsyncStorage.setItem('language', language);
        RNRestart.Restart();
    };
    render() {
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                <CustomTopNav title={'Help'} showIcon />
                <View>
                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <View>
                            <Image
                                source={require('../../Assets/images.png')}
                                style={style.image}
                                resizeMode={'contain'}

                            />
                            <Button
                                title={I18n.t('language.english')}
                                onPress={() => this.onLanguageChange('en')}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 60 }}>
                        <View>
                            <Image
                                source={require('../../Assets/german.jpg')}
                                style={style.image}
                                resizeMode={'contain'}
                            />
                            <Button
                                title={I18n.t('language.german')}
                                onPress={() => this.onLanguageChange('ge')}
                            />
                            {/* <Button
                                title={I18n.t('DashBoard.message')}
                                onPress={() => {
                                    I18n.changeLanguage('ge').then((result) =>
                                        this.props.setLanguage('ge')
                                    );
                                }}
                            /> */}
                            {/* <Button title={I18n.t('relaod')} onPress={() => RNRestart.Restart()
                            } /> */}
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: { alignItems: 'center', justifyContent: 'center', flex: 1 },
    buttonStyle: { marginTop: 20 },
    image: {
        height: 200,
        width: 250,
        marginBottom: 20
    }
});

const mapStateToProps = (state: any) => {
    return {
        language: state.globalReducer.language
    };
};

const mapDipatchFromProps = {
    setLanguage
};

export default connect(mapStateToProps, mapDipatchFromProps)(LanguageChangePage);



