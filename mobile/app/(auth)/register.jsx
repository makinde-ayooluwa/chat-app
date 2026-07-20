import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/Colors'
import { Link } from 'expo-router'
const RegisterScreen = () => {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <Image source={require("../../assets/images/partial-react-logo.png")} />
                    <View style={styles.registerScreen}>
                        <Text style={styles.title}>Register</Text>
                        <View style={styles.form}>
                            <Text style={styles.label}>Fullname</Text>
                            <TextInput style={styles.input} />
                            <Text style={styles.label}>Email address</Text>
                            <TextInput inputMode='email' style={styles.input} />
                            <Text style={styles.label}>Password</Text>
                            <TextInput style={styles.input} secureTextEntry={true} />
                            <Pressable style={({ pressed }) => [styles.presssable, pressed && { opacity: 0.7, width: "95%" }]}>
                                <Text style={
                                    {
                                        textAlign: "center",
                                        color: "#fff",
                                        fontWeight: "bolder"
                                    }
                                }
                                >
                                    Register
                                </Text>
                            </Pressable>
                            <Text
                                style={
                                    {
                                        textAlign: "center",
                                        marginTop: 10
                                    }
                                }
                            >
                                Already have an account? 
                                <Link
                                    style={
                                        {
                                            color: "blue"
                                        }
                                    }
                                    href={"/login"}
                                >
                                    Login
                                </Link>
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    registerScreen: {
        margin: 10
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    form: {
        marginVertical: 20
    },
    input: {
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.2)",
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
    },
    label: {
        fontWeight: "400"
    },
    alternative: {
        marginTop: 10
    },
    presssable: {
        marginTop: 10,
        backgroundColor: Colors.APP_COLOR,
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
        width: "100%",
    }
})