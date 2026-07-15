import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack } from "expo-router";
import { Colors } from '../../../constants/colors';
const AuthLayout = () => {
    return (
        <Stack screenOptions={
            {
                headerShown: true,
                headerStyle: { backgroundColor: Colors.APP_COLOR },
                headerTintColor: Colors.white,
                headerTitleAlign: "center",
                headerLeft: () =>
                    <Pressable onPress={() => router.back()}>
                        <Text style={{ color: Colors.white }}>
                            Back
                        </Text>
                    </Pressable>,
                headerTitleStyle: { fontWeight: "bold" }
            }}>
            <Stack.Screen name='login' options={{ title: "Login", headerShown: false }} />
            <Stack.Screen name='register' options={{ title: "Register", headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout

const styles = StyleSheet.create({})