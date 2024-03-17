import { Dimensions, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
import { useOAuth } from '@clerk/clerk-expo'
import Google from '../../public/Icons/Google.png'
import Facebook from '../../public/Icons/Facebook.png'

export default function Form() {
    const db = SQLite.openDatabase('me.db')
    const web = useRef<WebView>(null)

    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const [image, setImage] = useState('')

    const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

    const Press = async () => {
        const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
            redirectUrl: 'exp://192.168.18.144:8081',
        })

        if (createdSessionId) {
            setActive({ 
                session: createdSessionId,
            })
        } else {

        }
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
        <View style={styles.container}>
            <StatusBar hidden />

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={Press} >
                <Image 
                    alt={''}
                    source={Google}
                    width={50}
                    height={50}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={Press} >
                <Image 
                    alt={''}
                    source={Facebook}
                    width={50}
                    height={50}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
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
        flexDirection: 'column',
        gap: 15,
    },
    view: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,
        backgroundColor: colors.white,
        display: 'flex',
        flex: 1,
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
    button: {
        width: '80%',
        height: '8.5%',
        borderRadius: 12,
        borderWidth: 1.25,
        borderColor: colors.soft,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        display: 'flex',    
    },
    icon: {
        width: 25,
        height: 25,
    },
})