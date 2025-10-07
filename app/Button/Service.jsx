import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router"; 
import SplashScreen from './SplashScreen';

const ServiceSelectionScreen = () => {
  const router = useRouter(); 

  const handleNext = () => {
    router.push("/Button/SplashScreen"); 
  };
  const handle = () => {
    router.push("/Rooms&FoodsScreens/Screen1"); 
  };

  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="chevron-left" size={22} color="black" />
      </TouchableOpacity>


      <Text style={styles.header}>Select the service you want to register for</Text>

      <TouchableOpacity style={styles.card} >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Both Food & Rooms</Text>
            <Text style={styles.cardDescription}>
              List your restaurant on both the delivery and dining sections.
            </Text>
            <TouchableOpacity style={styles.nextButton} onPress={handle}>
              <Text style={styles.nextButtonText}>Register now</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("../../assets/images/service2.jpg")} style={styles.cardIcon} />
        </View>
      </TouchableOpacity>

 
      <TouchableOpacity style={styles.card} >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>Food only</Text>
            <Text style={styles.cardDescription}>
              List your restaurant in the dining section only.
            </Text>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextButtonText}>Register now</Text>
            </TouchableOpacity>
          </View>
          <Image source={require("../../assets/images/service.png")} style={styles.cardIcon} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    position: "absolute",
    top: 15,
    left: 15,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  card: {
    width: "100%",
    backgroundColor: "#F4A261",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  cardDescription: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  nextButton: {
    backgroundColor: "#0056b3",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 8,
    alignSelf: "flex-start",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardIcon: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
});

export default ServiceSelectionScreen;
