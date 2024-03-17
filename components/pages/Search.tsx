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

const socket = io(config.api)

export default function Search() {
    const db = SQLite.openDatabase('me.db')
    const web = useRef<WebView>(null)

    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const [image, setImage] = useState('')

    const Press = async () => {
        socket.emit('message', {
            message: text,
            image: image,
        })
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

        socket.on('message', (e) => {
            setMessages([...messages, {
                message: e.message,
                image: e.image
            }])
        })
    }, [messages, socket, Check])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            
            <ScrollView>
                {messages.map(({ message, image }, index) => (
                    <View key={index}>
                        <Image 
                            alt={''}
                            source={{
                                uri: image,
                            }}
                            width={50}
                            height={50}
                        />
                        <Text>{message}</Text>
                    </View>
                ))}
            </ScrollView>

            <TextInput 
                placeholder={'Message...'}
                value={text}
                inputMode={'text'}
                spellCheck={false}
                onKeyPress={(e) => {
                    if (e.nativeEvent.key === 'Enter') {
                        Press()
                    }
                }}
                onSubmitEditing={() => {
                    console.log('hola')
                    Press()
                }}
                onPressIn={() => Haptics.selectionAsync()}
                // multiline={true}
                style={styles.input}
                onChangeText={setText}
            />
        </SafeAreaView>
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