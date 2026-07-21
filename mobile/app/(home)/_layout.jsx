import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { Colors } from '../../utils/Colors'
const HomeLayout = () => {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "#000" }}>
            <Tabs.Screen name='home' options={
                {
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "home-sharp" : "home-outline"} size={20} />
                    ),
                    // headerShown: true,
                    headerTitle: "",
                    headerLeft: () => <Text style={styles.headerTitle}>BookWorm</Text>
                }
            }
            />
            <Tabs.Screen name='reels' options={
                {
                    title: "Reels",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "videocam" : "videocam-outline"} size={30} />
                    )
                }
            }
            />
            <Tabs.Screen name='create' options={
                {
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={30} />
                    )
                }
            }
            />
            <Tabs.Screen name='chat' options={
                {
                    title: "Chat",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "chatbubble" : "chatbubble-outline"} size={30} />
                    )
                }
            }
            />
            <Tabs.Screen name='profile' options={
                {
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={30} />
                    )
                }
            }
            />
        </Tabs>
    )
}

export default HomeLayout

const styles = StyleSheet.create({
    headerTitle: {
        color: Colors.APP_COLOR,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "500"
    }
})