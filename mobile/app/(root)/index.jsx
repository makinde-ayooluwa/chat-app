import { Link, Redirect, router } from "expo-router";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import CustomView from "../../components/customView";

export default function Index() {
  const pages = [
    {
      title: "Login",
      link: "/login"
    },
    {
      title: "Register",
      link: "/register"
    }, {
      title: "Home",
      link: "/"
    },
  ];
  return (
    <>
      <CustomView safe flex style={{justifyContent:"center"}}>
        <ActivityIndicator size={"large"} color={Colors.APP_COLOR} />
        <Redirect href={"/(auth)"} />
      </CustomView>
    </>
  );
}
const styles = StyleSheet.create({
  link: {
    padding: 20,
    marginVertical: 10,
  }
})