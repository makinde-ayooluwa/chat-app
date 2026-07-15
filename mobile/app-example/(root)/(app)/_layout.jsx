import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../../../constants/colors'
import { useTheme } from '../../../providers/ThemeProvider'

const AppHomeLayout = () => {
  const { theme } = useTheme();
  const themed = Colors[theme] ?? Colors.light;
  return (
    <Tabs
      screenOptions={
        {
          headerShown: true,
          headerStyle:
            { backgroundColor: themed.background, borderBottomWidth: 2, borderBottomColor: "gray" },
          headerTintColor: themed.text,
          tabBarStyle:
            { backgroundColor: themed.background, borderTopWidth: 2, borderTopColor: "gray" },
          tabBarActiveTintColor: themed.text,
        }
      }
    >
      <Tabs.Screen name='index' options={
        {
          title: "Chats", tabBarIcon: ({ focused }) =>
            <>
              <Ionicons
                name={focused ? 'chatbubbles' : "chatbubbles-outline"}
                color={Colors.APP_COLOR}
                size={25}
              />
            </>
        }
      }
      />
      <Tabs.Screen name='updates' options={
        {
          title: "Updates", tabBarIcon: ({ focused }) =>
            <>
              <Ionicons
                name={focused ? 'aperture' : "aperture-outline"}
                color={Colors.APP_COLOR}
                size={25}
              />
            </>
        }
      }
      />
      <Tabs.Screen name='groups' options={
        {
          title: "Groups", tabBarIcon: ({ focused }) =>
            <>
              <Ionicons
                name={focused ? 'people' : "people-outline"}
                color={Colors.APP_COLOR}
                size={25}
              />
            </>
        }
      }
      />
      <Tabs.Screen name='profile' options={
        {
          title: "Me", tabBarIcon: ({ focused }) =>
            <>
              <Ionicons
                name={focused ? 'person' : "person-outline"}
                color={Colors.APP_COLOR}
                size={25}
              />
            </>,
          headerShown: false
        }
      }
      />
      {/* <Tabs.Screen name='chat/[id]' options={{href:null, headerShown: false}} /> */}
    </Tabs>
  )
}

export default AppHomeLayout

const styles = StyleSheet.create({})