import { Colors } from "../../constants/colors";
import { Stack } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator } from "react-native";
import { UserContext } from "../../contexts/userContext";
import useUser from "../../hooks/useUser";
export default function RootLayout() {
  const { user, isLoading } = useUser();
  console.log({
    user,
    isLoading,
  });
  console.log(user)
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <>
      <Stack screenOptions={{}}>
        {/* <Stack.Protected guard={{}}></Stack.Protected> */}
        <Stack.Protected guard={user == null}>
          <Stack.Screen name="index" options={{ headerBackVisible: false, headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={user != null}>
          <Stack.Screen name="(app)" options={{ headerShown: false }} />
          <Stack.Screen name="chat" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </>
  )
}
// import { Stack } from "expo-router";

// export default function RootLayout() {
//   console.log("ROOT LAYOUT");

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="(auth)" />
//       <Stack.Screen name="(app)" />
//     </Stack>
//   );
// }