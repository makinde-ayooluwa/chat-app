import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import UserProvider from '../providers/UserProvider'
import { StatusBar } from "expo-status-bar"
import { Colors } from '../constants/colors'
const AppLayout = () => {
    console.log("App Layout mounted");
    return (
        <>
            <StatusBar
                style="light"
                backgroundColor={Colors.APP_COLOR}
                translucent={false}
            />
            <UserProvider>
                <Slot />
            </UserProvider>
        </>
    )
}

export default AppLayout

const styles = StyleSheet.create({})