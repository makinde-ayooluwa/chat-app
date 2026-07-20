import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { useFonts } from "expo-font"
const AppLayout = () => {
  const [fontLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  })
  return (
    <Stack>
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen name='(home)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default AppLayout