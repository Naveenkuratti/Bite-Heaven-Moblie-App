import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const SuccessScreen = () => {
  const router = useRouter();

  useEffect(() => {
   
    const timer = setTimeout(() => {
      router.push("/Button/SplashScreen");
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <LinearGradient colors={["#D9FFD9", "#FFFFFF"]} style={styles.container}>
     
      <Image source={require("../../assets/images/check.png")} style={styles.checkmark} />

    
      <Text style={styles.message}>Menu and operational details added</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
});

export default SuccessScreen;
