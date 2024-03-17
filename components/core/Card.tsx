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
import Icon from '../public/Icons/icon.png'
import { config } from '../../extra/config'
import io from 'socket.io-client'
import * as SecureStore from 'expo-secure-store'
import Swiper from 'react-native-swiper'

export default function Card({ area, price, location, image }: CardProps) {
    const db = SQLite.openDatabase('me.db')
    const web = useRef<WebView>(null)

    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    const Press = async () => {

    }

    return (
        <View style={styles.container}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 300,
        borderRadius: 12,
    },
    view: {
        flexDirection: 'column',
        gap: 5,
        position: 'relative',
        top: 15,
    },
    location: {
        fontFamily: 'mon-sb',
    },
    priceBold: {
        fontFamily: 'mon'
    },
    fitImage: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    price: {
        fontFamily: 'mon'
    },
})