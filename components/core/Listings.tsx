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
import Card from './Card'
import Island from '../../public/Icons/Island.jpeg'

export default function Listings({}) {
    const db = SQLite.openDatabase('me.db')
    const web = useRef<WebView>(null)

    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const [image, setImage] = useState('')
    const [places, setPlaces] = useState<any>([])

    const Press = async () => {

    }

    useEffect(() => {
        if (!loaded) {
            setPlaces([...places, {
                area: 5000, 
                price: 450,
                location: 'Rome, Italy',
                image: Island,
            }])

            setLoaded(true)
        }
    }, [loaded])

    return (
        <ScrollView style={styles.container}>
            {places.map(({ area, price, location, image }, index) => (
                <Card image={image} location={location} area={area} price={price} key={index} />
            ))}
        </ScrollView>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
        width: '100%',
        height: '73%',
        backgroundColor: 'transparent',
    },
})