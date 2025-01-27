import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the next screen after 10 seconds
      navigation.replace("Login"); // Replace 'Login' with your actual screen name
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Orange stripes pattern - top left */}
      <Image
        source={require("../../assets/images/plash.png")}
        style={styles.stripesTop}
      />

      {/* Logo and Text Container */}
      <View style={styles.logoContainer}>
        {/* App Icon */}
        <Image
          source={require("../../assets/images/plash2.png")}
          style={styles.largeIcon}
        />
        {/* App Name */}
        <Text style={styles.title}>Bite Heaven</Text>
      </View>

      {/* Orange stripes pattern - bottom right */}
      <Image
        source={require("../../assets/images/plash.png")}
        style={styles.stripesBottom}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  stripesTop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    transform: [{ rotate: "180deg" }],
    resizeMode: "contain",
    opacity: 0.8,
  },
  stripesBottom: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 150,
    height: 150,
    resizeMode: "contain",
    opacity: 0.8,
  },
  logoContainer: {
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
  },
  largeIcon: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: -70,
    left: -30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    borderBottomWidth: 4,
    borderBottomColor: "#FF8C00",
    paddingBottom: 5,
  },
});

export default SplashScreen;
