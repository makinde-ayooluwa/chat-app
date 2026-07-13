import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../contexts/userContext";
import { APP_ENV } from "../constants/env";
import { router } from "expo-router";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState({});
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        checkUser();
    }, []);
    useEffect(() => {
        getData();
    }, [user])
    async function checkUser() {
        try {
            const data = await AsyncStorage.getItem("user");
            if (data && data !== "") {
                setUser(JSON.parse(data));
                router.replace("/(app)")
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }
    const register = async (userData) => {
        console.log("PROVIDER REGISTER DATA RECEIVED:", userData);
        // const saved = await AsyncStorage.getItem("user");
        const response = await fetch(`${APP_ENV.BACKEND_URI}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        setMessage(data);
        if (data.statusCode === 200) router.replace("/login")
        console.log("BACKEND DATA >>>>>", data)
        return data;
    }
    const login = async (userData) => {
        // const {keepMeLoggedIn} = userData;
        // const response = await fetch(`${APP_ENV.BACKEND_URI}/user/login`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(userData)
        // });
        // const data = await response.json();
        // setMessage(data);
        // setUser(data.userId);
        // if (keepMeLoggedIn === true) {
        //     await AsyncStorage.setItem("user", data.userId);
        // }
        // // if (data.status === true) router.replace("/(app)")
        // console.log("BACKEND DATA >>>>>", data.userId);
        // return data;
        setUser("7747dhndnd");
    };
    const getData = async () => {
        try {
            if (user !== null) {
                const response = await fetch(`${APP_ENV.BACKEND_URI}/user/${user}`);

                const data = await response.json();

                setUserData(data);

                console.log("USER DATA:", data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    async function logout() {
        await AsyncStorage.removeItem("user");
        setUser(null);
    }

    return (
        <UserContext.Provider
            value={{
                user,
                isLoading,
                login,
                logout,
                register,
                message,
                userData
            }}
        >
            {children}
        </UserContext.Provider>
    );
}