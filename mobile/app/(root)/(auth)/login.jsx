import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../../components/customView'
import { Link, router } from 'expo-router'
import { authStyles } from "../../../styles/authStyles";
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { Colors } from "../../../constants/colors"
import Logo from "../../../assets/images/favicon.png";
import Checkbox from "expo-checkbox";
import { AntDesign, Entypo, IonIcons } from "@expo/vector-icons"
import useUser from "../../../hooks/useUser"
const Login = () => {
  const { login } = useUser();
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const socialLogin = [
    {
      title: "Google",
      icon: <AntDesign name='google' color={"green"} size={30} />
    },
    {
      title: "Github",
      icon: <AntDesign name='github' color={"black"} size={30} />
    },
    {
      title: "Facebook",
      icon: <Entypo name='facebook' color={"blue"} size={30} />
    },
  ];
  const handleLogin = async () => {
    try {
      setIsSubmitting(true);
      const loginData = {
        email,
        password,
        keepMeLoggedIn
      };
      console.log("BEFORE LOGIN:", loginData);

      const result = await login(loginData);

      Alert.alert(
        result.status === true ? "Success" : "Error",
        result.message,
        [
          { text: "OK" }
        ]
      );
      setIsSubmitting(false);

    } catch (error) {
      setIsSubmitting(false);
      Alert.alert("Error",
        error.toString(),
        [
          { text: "OK" }
        ]
      );
      console.log(error);
    }
  };
  
  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
          <CustomView flex safe style={{}}>
            <Image source={Logo} style={authStyles.logo} />
            {/* SOCIAL LOGIN */}
            <Text style={authStyles.title}>Login</Text>
            <CustomView style={authStyles.socialLogin}>
              {/* {
                socialLogin.map(({ icon, title }, index) => (
                  <CustomView key={index} style={authStyles.social}>
                    <View style={{ marginHorizontal: 20 }}>
                      {icon}
                    </View>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "red" }}>{title}</Text>
                  </CustomView>
                ))
              } */}
            </CustomView>
            {/* <Text style={{textAlign:"center"}}>or continue with email</Text> */}
            <CustomView style={authStyles.form}>
              <View style={authStyles.inputGroup}>
                <Text style={authStyles.label}>Email/Username</Text>
                <CustomInput
                  inputMode={"email"}
                  placeholder={"e.g johndoe@example.com"}
                  value={email}
                  onChangeText={
                    (text) => {
                      setEmail(
                        text
                      )
                    }
                  }
                />
              </View>
              <View style={authStyles.inputGroup}>
                <Text style={authStyles.label}>Password</Text>
                <CustomInput
                  placeholder={"**********"}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={
                    (text) => {
                      setPassword(
                        text
                      )
                    }
                  }
                />
              </View>
              {/* CHECKBOX */}
              <CustomButton
                onPress={
                  () => setChecked(!isChecked)
                } style={
                  [authStyles.inputGroup,
                  {
                    flexDirection: "row",
                    justifyContent: "start"
                  }
                  ]
                }>
                <Checkbox
                  value={keepMeLoggedIn}
                  onValueChange={
                    (value) => setKeepMeLoggedIn(
                      value
                    )
                  }
                  color={isChecked ? Colors.APP_COLOR : undefined}
                  style={{ marginHorizontal: 10 }}
                />
                <Text style={authStyles.text}>Keep me logged in</Text>
              </CustomButton>
              <View style={authStyles.inputGroup}>
                <CustomButton
                  defaultStyle={true}
                  pressedStyle={{ backgroundColor: Colors.black }}
                  style={
                    {
                      backgroundColor: !isSubmitting ? Colors.APP_COLOR : Colors.black,
                      borderWidth: 0
                    }
                  }
                  onPress={() => !isSubmitting ? handleLogin() : console.log("Submitting...")}
                >
                  {!isSubmitting ?
                    <Text style={
                      {
                        textAlign: "center",
                        color: Colors.white
                      }
                    }>
                      Login
                    </Text>
                    :
                    <ActivityIndicator
                      color={"white"}
                    />
                  }
                </CustomButton>
                <View style={authStyles.alternative}>
                  <Text>Don't have an account?</Text>
                  <Link style={authStyles.alternativeLink} href={"/register"}>Sign Up</Link>
                </View>
              </View>
            </CustomView>
          </CustomView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}

export default Login