import { Tabs } from 'expo-router'
import { colors } from '../../extra/colors'
import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity } from 'react-native'
import TabBar from '../../components/core/TabBar'

export default function Layout() {
    return (
        <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen name={'index'} />
            <Tabs.Screen name={'question'} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    add: {

    },
})