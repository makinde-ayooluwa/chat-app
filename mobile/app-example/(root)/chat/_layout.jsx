import { Image, StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { APP_ENV } from '../../../constants/env';
import { useTheme } from '../../../providers/ThemeProvider';
import { Colors } from '../../../constants/colors';
import { Ionicons, IonIcons } from "@expo/vector-icons"
const ChatLayout = () => {
  const { id } = useLocalSearchParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { theme } = useTheme();
  const themed = Colors[theme] ?? Colors.light;
  // async function fetchUserData() {
  //   try {
  //     const response = await fetch(`${APP_ENV.BACKEND_URI}/user/${id}`);
  //     const data = await response.json();
  //     if (data) {
  //       setUserData(data);
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     setError(true);
  //   }
  // }
  // fetchUserData();
  return (
    <Stack screenOptions={{ headerTintColor: themed.text }}>
      <Stack.Screen
        name='[id]'
        options={{
          headerShown: true,
          headerTitle: () => (
            <>
              {isLoading && (
                <ActivityIndicator size={40} color={Colors.APP_COLOR} />
              )}
              {!isLoading && (<>
                {!error && (<>
                  <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <Image
                      source={
                        require("../../../assets/images/favicon.png")
                      } style={
                        { borderRadius: 50 }
                      }
                    />
                    <View>
                      <Text style={{ fontWeight: "bold", color: themed.text }}>Makinde Ayooluwa</Text>
                      <Text style={{color: themed.text}}>online</Text>
                    </View>
                  </View>
                </>)}
                {error && <Text style={{ color: themed.text }}>Error occured</Text>}
              </>)
              }
            </>
          ),
          headerRight: () => (
            <Pressable style={({pressed})=>[pressed && {backgroundColor:"gray"},{borderRadius: 50, padding: 5}]}>
              <Text style={{ color: themed.text }}>
                <Ionicons name='ellipsis-vertical' size={30} />
              </Text>
            </Pressable>
          ),
          headerStyle: { backgroundColor: themed.background },
        }
        }
      />
    </Stack>
  )
}

export default ChatLayout

const styles = StyleSheet.create({})
