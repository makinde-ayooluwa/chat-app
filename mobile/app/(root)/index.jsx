import { ActivityIndicator, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import PartialLogo from "../../assets/images/android-icon-foreground.png"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  async function getStarted() {
    await AsyncStorage.setItem("get-started-page-viewed", "true");
    router.replace("/login");
  }
  useEffect(() => {
    async function getStartedPageViewed() {
      const getStartedPageViewedStorage = await AsyncStorage.getItem("get-started-page-viewed");
      if ((getStartedPageViewedStorage && getStartedPageViewedStorage == "true")) {
        router.replace("/login");
      } else {
        setIsLoading(false);
      }
    }
    getStartedPageViewed();
  }, [])
  return (
    <View style={[styles.flex, styles.contentCenter, styles.alignCenter]}>
      {isLoading && <ActivityIndicator size={40} color={"#e44"} />}
      {!isLoading && (
        <>
          <Image source={PartialLogo} style={styles.logo} />
          <Text style={styles.logoText}>ChatMate</Text>
          <Pressable style={styles.button} onPress={getStarted}>
            <Text style={styles.buttonText}>Get started</Text>
          </Pressable>
        </>
      )}
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  contentCenter: {
    justifyContent: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  logo: {
    marginVertical: 0,
    height: 250
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#e44"
  },
  button: {
    borderWidth: 0.5,
    marginVertical: 20,
    position: "absolute",
    bottom: 0,
    padding: 20,
    width: "80%",
    borderRadius: 40,
    backgroundColor: "#e44"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  }
})