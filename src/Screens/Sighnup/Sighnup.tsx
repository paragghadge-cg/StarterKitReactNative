import React from 'react'
import { View, StyleSheet, Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, Button } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import NavigationManager from '../../Helper/NavigationManager'
import { styles } from './styles'

type LoginProps = {
}

function SighnUp(props: LoginProps) {
    return (
        <View style={styles.container}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
            }}>
                <Text style={{ marginTop: 30, fontSize: 24 }}>Sighn Up</Text>
                <Image
                    source={{ uri: 'https://solarimpulse.com/files/companies/logo/2020-03-05-163724/ALSTOM-Transport-SA.png' }}
                    style={{ height: 100, width: 300 }}
                    resizeMode={'contain'}
                />
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
                width: '100%'
            }}>
                <View style={styles.inputView}>

                    <TextInput
                        style={styles.TextInput}
                        placeholder="Name."
                        placeholderTextColor="#003f5c"

                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 20 }}>
                    <View style={{ margin: 10 }}>
                        <Button title='Login' color={'#9a91b3'} onPress={() => NavigationManager.goBack()} />
                    </View>
                </View>
            </View>
        </View>

    )
}

export default SighnUp
