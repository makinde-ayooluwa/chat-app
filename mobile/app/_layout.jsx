import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <>
    <StatusBar style="light" />
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{
        title: "Home", tabBarIcon: ({ focused }) =>
          <>
            <Ionicons name={focused ? "home" : "home-outline"} size={20} />
          </>
      }
      }
      />
      <Tabs.Screen name="chat" options={{
        title: "Chat", tabBarIcon: ({ focused }) =>
          <>
            <Ionicons name={focused ? "chatbubble" : "chatbubble-outline"} size={20} />
          </>
      }
      } />
    </Tabs>
    </>
  );
}
