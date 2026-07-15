import { ActivityIndicator, FlatList, Keyboard, KeyboardAvoidingView, KeyboardAvoidingViewBase, Pressable, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { APP_ENV } from '../../../constants/env';
import CustomView from "../../../components/customView"
import { Colors } from '../../../constants/colors';
import { useTheme } from '../../../providers/ThemeProvider';
import useUser from '../../../hooks/useUser';
import CustomInput from '../../../components/customInput';
import { Ionicons } from '@expo/vector-icons';
const SingleChat = () => {
  const [user, setUser] = useState("46te");
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useLocalSearchParams();
  const { theme } = useTheme();
  const themed = Colors[theme] ?? Colors.light;
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`${APP_ENV.BACKEND_URI}/user/${id}`);
  //       const data = response.json();
  //       if (data) {
  //         setUser(data);
  //         setIsLoading(false);
  //       }
  //     }
  //     catch (err) {
  //       setIsLoading(false);
  //       setError(true);
  //       console.log(err);
  //     }
  //   }
  //   fetchData();
  // }, [])
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(Keyboard.isVisible());
  const { userData } = useUser();
  const [newMessage, setNewMessage] = useState("");
  const [chats, setChat] = useState([
    {
      _id: "et54ejn48d8e",
      userId: "46te",
      message: "Hi"
    },
  ]);
  function handleSend() {
    // chats.push({
    //   _id: "NM-" + Math.floor(Math.random() * 1234),
    //   userId: userData,
    //   message: newMessage
    // })
    setChat([...chats, {
      _id: "NM-" + Math.floor(Math.random() * 1234),
      userId: userData,
      message: newMessage
    }]);
    setNewMessage("");
    console.log("Working")
  }
  Keyboard.addListener("keyboardDidShow", () => {
    setKeyboardIsVisible(true);
  })
  Keyboard.addListener("keyboardDidHide", () => {
    setKeyboardIsVisible(false);
  })
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <CustomView flex style={{ backgroundColor: themed.background }}>
          {isLoading &&
            (
              <>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <ActivityIndicator size={60} color={Colors.APP_COLOR} />
                </View>
              </>
            )
          }
          {!isLoading &&
            <>
              {error &&
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <Text style={{ color: themed.text }}>Error occured</Text>
                </View>
              }
              {!error &&
                <>
                  <CustomView scroll flex>
                    {/* <FlatList style={{ padding: 20, flex: 1 }} data={chats}
                      keyExtractor={(chat, index) => index}
                      renderItem={
                        ({ item }) =>
                          <>
                            <View style={[{ backgroundColor: Colors.APP_COLOR, padding: 10, borderRadius: 5, marginBottom: 10, maxWidth: 250 }, userData !== item.userId && { backgroundColor: "gray" }, userData == item.userId && { alignSelf: "flex-end" },]}>
                              <Text style={{ color: Colors.white, textAlign: "start" }}>{item.message}</Text>
                            </View>
                          </>
                      }
                    /> */}
                    {chats.map((item,index) => (
                      <View
                      key={index}
                        style={
                          [
                            {
                              backgroundColor: Colors.APP_COLOR,
                              padding: 10,
                              borderRadius: 5,
                              marginBottom: 10,
                              maxWidth: 250
                            },
                            userData !== item.userId
                            &&
                            {
                              backgroundColor: "gray"
                            },
                            userData == item.userId
                            && {
                              alignSelf: "flex-end"
                            },
                          ]
                        }
                      >
                        <Text style={{ color: Colors.white, textAlign: "start" }}>{item.message}</Text>
                      </View>
                    ))}
                  </CustomView>
                  <View style={
                    {
                      bottom: keyboardIsVisible ? 350 : 30,
                      flexDirection: "row",
                      alignSelf: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "90%"
                    }
                  }
                  >
                    <CustomInput
                      style={
                        {
                          color: themed.text,
                          alignSelf: "center",
                          borderRadius: 30,
                          padding: 15,
                          backgroundColor: "gray"
                        }
                      }
                      value={newMessage}
                      onChangeText={(text) => setNewMessage(text)}
                      placeholder="Enter to send a message"
                    />
                    {newMessage !== "" && <Pressable onPress={() => handleSend()} style={{ backgroundColor: Colors.APP_COLOR, padding: 20, borderRadius: 50 }}>
                      <Ionicons name='send' color={"#fff"} />
                    </Pressable>}
                  </View>
                </>
              }
            </>
          }
        </CustomView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}

export default SingleChat

const styles = StyleSheet.create({})
