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
          height: 60,
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
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />

      <Tabs.Screen
        name="scanner"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                bottom: 15,
                backgroundColor: "#FFD700",
                borderRadius: 40,
                padding: 10,
                shadowColor: "#000",
                shadowOpacity: 0.3,
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 3 },
                elevation: 6,
              }}
            >
              <MaterialIcons name="qr-code-scanner" size={30} color="black" />
            </View>
          ),
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
