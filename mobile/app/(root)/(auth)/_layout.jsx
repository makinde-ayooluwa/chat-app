import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: "#e44"
                    },
                    headerTintColor: "#fff",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    }
                }
            }
        >
            <Stack.Screen name='login' options={{ title: "Login" }} />
        </Stack>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})