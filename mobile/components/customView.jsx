import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context"
const CustomView = ({ safe, children, theme, flex, ...props }) => {
    return safe ?
        <SafeAreaView {...props}>
            {children}
        </SafeAreaView>
        :
        <View>
            {children}
        </View>
}

export default CustomView

const styles = StyleSheet.create({})