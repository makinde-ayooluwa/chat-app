import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import PartialLogo from "../../../assets/images/android-icon-foreground.png"
const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? "padding" : "height"}>
                <View style={styles.loginScreen}>
                    <Image style={styles.image} source={PartialLogo} />
                    <View style={styles.loginCard}>
                    {/* INPUTs */}
                        <View style={styles.inputGroup}>
                            <TextInput placeholder='Username / Phone Number / Email' style={styles.input} />
                            <TextInput placeholder='Password' style={styles.input} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    loginScreen: {
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 250
    },
    loginCard: {
        flexDirection: "column",
        gap: 20
    },
    inputGroup: {

    },
    input: {
        borderWidth: 2,
        borderColor: "#e44",
        borderRadius: 20,
        width: 400,
        padding: 10,
        marginVertical: 10
    }
})