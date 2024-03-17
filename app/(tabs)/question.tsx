import { AppState, Dimensions, Image, NativeModules, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../extra/colors'
import { useFonts } from 'expo-font'
import { useEffect, useRef, useState } from 'react'
import * as Haptics from 'expo-haptics'
import { router } from 'expo-router'
import { WebView } from 'react-native-webview'
import * as SQLite from 'expo-sqlite'
import Ripple from 'react-native-material-ripple'
import { AntDesign } from '@expo/vector-icons'
import axios from 'axios'
import { config } from '../../extra/config'
import io from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'
import Main from '../../components/pages/Main'
import { Video, ResizeMode } from 'expo-av'

export default function Page() {
    const db = SQLite.openDatabase('me.db')
    const web = useRef<WebView>(null)

    const { PipModule } = NativeModules

    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState('')
    const [backgroundDeteced, setBackgroundDeteced] = useState(false)
    const [image, setImage] = useState('')

    const Press = async () => {
        
    }

    const Check = async () => {
        const data = JSON.parse(await SecureStore.getItemAsync('data') as string)
        // SecureStore.deleteItemAsync('data')

        if (data) {
            setImage(data.image)
        } 
    }

    useEffect(() => {
        if (!loaded) {
            Check()

            setLoaded(true)
        }
    }, [])
    

    return (
        <>
            <StatusBar hidden />

            <View style={styles.container}>
                
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.white,
    },
    video: {
        borderRadius: 12,
        width: 300,
        height: 150,
    },
    icon: {
        position: 'absolute',
        top: '15%',
        width: 150,
        height: 150,
    },
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        backgroundColor: colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.light,
        borderBottomWidth: 2,
    },
    input: {
        position: 'absolute',
        bottom: '15%',
        left: '10%',
        width: '80%',
        backgroundColor: colors.white,
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '500',
    },
})