import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputView: {
        backgroundColor: '#ede9f7',
        height: 40,
        marginTop: 20,
        // alignItems: "center",
        justifyContent: 'center',
        width: '89%'
    },

    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20
    },
    form: {
        alignItems: 'center',
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        paddingHorizontal: 16
    }
});
