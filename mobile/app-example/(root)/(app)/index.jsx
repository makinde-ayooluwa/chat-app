import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React from 'react'
import useUser from '../../../hooks/useUser'
import { router } from 'expo-router';
import CustomView from '../../../components/customView';
import { useTheme } from '../../../providers/ThemeProvider';
import { Colors } from '../../../constants/colors';
import CustomInput from '../../../components/customInput';
import Logo from "../../../assets/images/favicon.png"

const Home = () => {
    const chats = [
        {
            _id: "45te",
            name: "Makinde Ayooluwa",
            last_chat: "Hi, there. We miss you",
            status: "online"
        },
        {
            _id: "46te",
            name: "Olaniyi Dray",
            last_chat: "Hi, there. We miss you on our platform. We dont know why you left the other day",
            status: "offline"
        }
    ];
    const { user, logout, userData } = useUser();
    const { theme } = useTheme();
    const themed = Colors[theme] ?? Colors.light
    return (
        <CustomView flex style={{ backgroundColor: themed.background }}>
            <FlatList
                ListHeaderComponent={<>
                    <CustomView style={{ backgroundColor: themed.background, flexDirection: "row", justifyContent: "center" }}>
                        <CustomInput placeholder="Search for contacts" style={{ backgroundColor: "gray", borderRadius: 40, padding: 15 }} />
                    </CustomView>
                </>}
                data={chats}
                keyExtractor={
                    (item, index) => index
                }
                renderItem={
                    ({ item }) =>
                        <>
                            <Pressable onPress={()=>router.push("/chat/" + item._id)}>
                                <View style={[styles.chat, { backgroundColor: themed.background }]}>
                                    <Image style={{ borderRadius: 50 }} source={Logo} />
                                    <View style={{ flexDirection: "column" }}>
                                        <Text style={[{}, { color: themed.text }]}>
                                            {item?.name}
                                        </Text>
                                        <Text style={[{ fontSize: 10 }, { color: "gray" }]}>
                                            {item?.last_chat.substring(0, 55)}{item?.last_chat.length > 55 && "...."}
                                        </Text>
                                    </View>
                                </View>
                            </Pressable>
                        </>
                }
            />
        </CustomView>
    )
}

export default Home
const styles = StyleSheet.create({
    chat: {
        padding: 20,
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderColor: "gray"
    }
})