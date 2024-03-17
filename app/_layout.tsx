import { Stack, Tabs, router } from 'expo-router'
import { LogBox, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../extra/colors'
import { EvilIcons } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'
import { config } from '../extra/config'
import * as SecureStore from 'expo-secure-store'

SplashScreen.preventAutoHideAsync()
LogBox.ignoreAllLogs()

export const unstable_settings = {
    initialRouteName: '(tabs)'
}

const tokenCache = {
    async getToken(key: string) {
        return SecureStore.getItemAsync(key)
    },
    async saveToken(key: string, value: string) {
        return SecureStore.setItemAsync(key, value)
    }
}

export default function Layout() {
    const [loaded, error] = useFonts({
        'mon': require('../public/fonts/Montserrat/Montserrat-Regular.ttf'),
        'mon-sb': require('../public/fonts/Montserrat/Montserrat-SemiBold.ttf'),
        'mon-b': require('../public/fonts/Montserrat/Montserrat-Bold.ttf'),
        'Feather': require('../public/fonts/Feather.ttf'),
    })
    
    if (!loaded && !error) {
        return null
    }

    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={config.keys.clerkPK}>
            <Stack>
                <Stack.Screen name={'(tabs)'} options={{
                    headerShown: false,
                }} />
            </Stack>
        </ClerkProvider>
    )
}

const styles = StyleSheet.create({
    close: {

    },
})