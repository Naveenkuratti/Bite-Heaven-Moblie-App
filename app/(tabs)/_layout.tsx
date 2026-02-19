import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: "#fff",
          borderTopWidth: 0.5,
          borderColor: "#ddd",
          elevation: 8,
          position: "absolute",
        },
      }}
    >
      
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: () => (
            <FontAwesome name="home" size={30} color="black" />
          ),
        }}
      />

      <Tabs.Screen
        name="scanner"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                bottom: 19,
                backgroundColor: "#FFD700",
                borderRadius: 50,
                padding: 15,
                elevation: 6,
              }}
            >
              <MaterialIcons name="qr-code-scanner" size={30} color="black" />
            </View>
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={30} color="black" />
          ),
        }}
      />

      
      <Tabs.Screen
        name="Rooms"
        options={{
          href: null, // ✅ removes Rooms from tab bar ONLY
        }}
      />
    </Tabs>
  );
}
