import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, Animated } from 'react-native'
import { useRef, useState } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'
import { Link } from 'expo-router'
import { colors } from '../../extra/colors'
import * as Progress from 'react-native-progress'
import { useFonts } from 'expo-font'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { useStore } from '../../state/zus'

export default function Header({ amount }) {
    const { count, clear } = useStore() as any

    return (
        <>
            <View style={styles.container}>
                <Ionicons name={'close'} onPress={clear} style={styles.close} size={35} color={colors.grey} />
                
                <Progress.Bar
                    progress={count}
                    animated
                    borderWidth={0}
                    width={250}
                    height={15}
                    unfilledColor={colors.soft}
                    color={colors.feather}
                    borderRadius={99999}
                />

                <TouchableOpacity activeOpacity={1} style={styles.heart}>
                    <View style={styles.glob}></View>
                    <AntDesign name={'heart'} size={25} color={colors.red} />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        display: 'flex',
        position: 'absolute',
        top: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: colors.white,
        height: 100,
        zIndex: 5,
    },
    close: {
        marginLeft: 15,
    },
    glob: {
        borderRadius: 9999999,
        backgroundColor: colors.whiteRed,
        width: 6,
        height: 6,
        position: 'absolute',
        top: 5,
        left: 3.5,
        zIndex: 5,
    },
    heart: {
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
    },
    bar: {
        backgroundColor: colors.soft,
        width: '65%',
        height: 17.5,
        borderRadius: 999999,
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignContent: 'center',
        borderWidth: 0,
    },
})