import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../../components/customView'
import { authStyles } from "../../../styles/authStyles"
import Logo from "../../../assets/images/favicon.png";
import CustomInput from '../../../components/customInput'
import CustomButton from '../../../components/customButton'
import { Colors } from '../../../constants/colors';
import { Link, router } from 'expo-router';
import { AntDesign, Entypo } from "@expo/vector-icons"
import useUser from '../../../hooks/useUser';
const Register = () => {
    const { register, message } = useUser();
    const [isChecked, setChecked] = useState(false);
    // const [formData, setFormData] = useState({});
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
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
    const handleRegister = async () => {
        try {
            setIsSubmitting(true);
        const registerData = {
            fullname,
            email,
            phone,
            password
        };
        console.log("BEFORE REGISTER:", registerData);
        console.log(message.statusCode)
        const result = await register(registerData);

        Alert.alert(
            result.statusCode === 200 ? "Success" : "Error",
            result.message,
            [
                result.statusCode !== 200 && { text: "Login", onPress: () => router.replace("/login") },
                { text: "OK" }
            ]
        );
        setIsSubmitting(false);
        } catch (error) {
            setIsSubmitting(false);
            console.log(error);
        }
    }
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'android' ? "height" : "padding"}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
                <CustomView flex safe>
                    <Image source={Logo} style={authStyles.logo} />
                    <Text style={authStyles.title}>Register</Text>
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
                    {/* <Text style={{ textAlign: "center" }}>or continue with email</Text> */}
                    <CustomView style={authStyles.form}>
                        {/* INPUTS */}
                        <View style={authStyles.inputGroup}>
                            <Text style={authStyles.label}>Fullname</Text>
                            <CustomInput placeholder="e.g John Doe" value={fullname} onChangeText={(text) => setFullname(text)} />
                        </View>
                        <View style={authStyles.inputGroup}>
                            <Text style={authStyles.label}>Email address</Text>
                            <CustomInput inputMode={"email"} placeholder="e.g johndoe@example.com" value={email} onChangeText={(text) => setEmail(text)} />
                        </View>
                        <View style={authStyles.inputGroup}>
                            <Text style={authStyles.label}>Phone Number</Text>
                            <CustomInput inputMode={"numeric"} placeholder="e.g +1234567890" value={phone} onChangeText={(text) => setPhone(text)} />
                        </View>
                        <View style={authStyles.inputGroup}>
                            <Text style={authStyles.label}>Password</Text>
                            <CustomInput secureTextEntry={true} placeholder="e.g ************" value={password} onChangeText={(text) => setPassword(text)} />
                        </View>
                        {/* INPUTS END */}
                        {/* SUBMIT BUTTON */}
                        <CustomButton defaultStyle={true} pressedStyle={{ backgroundColor: Colors.black }}
                            style={
                                {
                                    backgroundColor: !isSubmitting ? Colors.APP_COLOR : Colors.black,
                                    borderWidth: 0
                                }
                            }
                            onPress={() => !isSubmitting ? handleRegister() : console.log("Submittion in progress....")}>
                            {!isSubmitting ?
                                <Text style={
                                    {
                                        textAlign: "center",
                                        color: Colors.white
                                    }
                                }>
                                    Register
                                </Text>
                                :
                                <ActivityIndicator
                                    color={"white"}
                                />
                            }
                        </CustomButton>
                        <View style={authStyles.alternative}>
                            <Text>Already have an account?</Text>
                            <Link href={"/login"} style={authStyles.alternativeLink}>Login</Link>
                        </View>
                    </CustomView>
                </CustomView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register

const styles = StyleSheet.create({})