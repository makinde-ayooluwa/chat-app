import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { APP_ENV } from '../../../constants/env';

const ChatLayout = () => {
  const { id } = useLocalSearchParams();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  async function fetchUserData() {
    try {
      const response = await fetch(`${APP_ENV.BACKEND_URI}/user/${id}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
        setIsLoading(false);
      }
    } catch (error) {
      setError(true);
    }
  }
  fetchUserData();
  return (
    <Stack>
      <Stack.Screen
        name='[id]'
        options={
          {
            headerShown: true,
            headerTitle: () =>
              <>
                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                  <Image
                    source={
                      require("../../../assets/images/favicon.png")
                    } style={
                      { borderRadius: 50 }
                    }
                  />
                  <View>
                    <Text style={{ fontWeight: "bold" }}>Makinde Ayooluwa</Text>
                    <Text>online</Text>
                  </View>
                </View>
              </>
          }
        }
      />
    </Stack>
  )
}

export default ChatLayout

const styles = StyleSheet.create({})