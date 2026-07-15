import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useRef, useState } from 'react'
import PartialLogo from "../../../assets/images/android-icon-foreground.png"
const Login = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, flex: 1 }}
                // keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.loginScreen}>
                        <Image style={styles.image} source={PartialLogo} />

                        <View style={styles.loginCard}>
                            <View style={styles.inputGroup}>
                                <TextInput
                                    placeholder="Username / Phone Number / Email"
                                    style={styles.input}
                                    inputMode='email'
                                />

                                <TextInput
                                    placeholder="Password"
                                    secureTextEntry
                                    style={styles.input}
                                />
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text>Forgot password</Text>
                                    <Text>Login</Text>
                                </View>
                            </View>
                            <Pressable style={[styles.input, { backgroundColor: "#e44" }]}>
                                <Text style={{ color: "#fff", textAlign: "center", fontSize: 15 }}>Login</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
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
        padding: 20,
        marginVertical: 10
    }
})