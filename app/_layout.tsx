import { Stack } from "expo-router";


const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="addrestaurant" />
      <Stack.Screen name="loginin" />
      <Stack.Screen name="register" />
      <Stack.Screen name="Registerrestaurant" />
      <Stack.Screen name="splashScreen" />
      
      
    </Stack>
  );
};

export default Layout;
