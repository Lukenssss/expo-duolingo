import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../extra/colors'

export default function Button({ text, Press }) {
    return (
        <TouchableOpacity onPress={Press} activeOpacity={1} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '10%',
        backgroundColor: colors.white,
        width: '80%',
        height: '7.5%',
        borderBottomWidth: 4,
        borderBottomColor: colors.lightGrey,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 2,
        borderColor: colors.lightGrey,
    },
    text: {
        textTransform: 'uppercase',
        fontFamily: 'Feather',
        color: colors.grey,
        fontSize: 15,
    },
})