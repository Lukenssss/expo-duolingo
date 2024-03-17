import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../extra/colors'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import * as Haptics from 'expo-haptics'
import { router } from 'expo-router'
import { WebView } from 'react-native-webview'
import * as SQLite from 'expo-sqlite'
import Ripple from 'react-native-material-ripple'
import { AntDesign, Feather } from '@expo/vector-icons'
import axios from 'axios'
import Icon from '../public/Icons/icon.png'
import { config } from '../../extra/config'
import io from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'
import Button from '../core/Button'
import { useStore } from '../../state/zus'

export default function Main() {
    const db = SQLite.openDatabase('me.db')
    const web = useRef<WebView>(null)
    const { inc } = useStore() as any

    const Press = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)

        inc()
    }

    return (
        <>
            <View style={styles.container}>

                <Button text={'comprobar'} Press={Press} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: colors.white,
    },
    add: {
        color: colors.mumb,
        width: 50,
        height: 50,
    },
    scroll: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width,
        height: '90%',
        position: 'absolute',
        bottom: 0,
        flexGrow: 0,
        zIndex: 5,
    },  
    textInput: {
        backgroundColor: colors.light,
        width: '90%',
        height: '7%',
        padding: 16,
        borderRadius: 14,
        position: 'absolute',
        top: '12.5%',
        fontWeight: '500',
        color: 'gray',
    },
    area: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center', 
        display: 'flex',
    },  
    title: {
        fontWeight: 'bold',
        color: colors.black,
        fontSize: 35,
        position: 'absolute',
        top: '10%',
        left: '10%',
    },
    card: {
        width: 300,
        height: 300,
    },
})