import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useUser from '../../../hooks/useUser'
import { router } from 'expo-router';
import CustomView from '../../../components/customView';

const Home = () => {
    const { user, logout, userData } = useUser();
    const handleLogout = async()=>{
        console.log("Logging out .....")
        await logout();
        router.replace("/(root)/(auth)/login");
    }
    console.log("USER DATA", userData);
    return (
        <CustomView safe>
            <Text>Home</Text>
            <Text>User Email: {userData?.email}</Text>
            <Pressable onPress={handleLogout}>
                <Text>Logout</Text>
            </Pressable>
        </CustomView>
    )
}

export default Home

const styles = StyleSheet.create({})