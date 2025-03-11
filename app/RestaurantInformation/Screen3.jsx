import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from 'expo-router';


import SplashScreen from './../Button/SplashScreen';
const router = useRouter(); 
const RestaurantAddressForm = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
           <View style={styles.stepIndicator}>
              <Text style={styles.stepText}>3 of 3</Text>
            </View>
      <Text style={styles.header}>Restaurant Information</Text>

      <TextInput style={styles.input} placeholder="Shop no./ building no. (optional)" />
      <TextInput style={styles.input} placeholder="Floor / tower (optional)" />
      <TextInput style={styles.input} placeholder="Area /Sector /Locality*" />
      <TextInput style={styles.input} placeholder="City*" />
      <TextInput style={styles.input} placeholder="Add any nearby landmark (optional)" />
      
      <TouchableOpacity style={styles.button}onPress={() => router.push('/Button/SplashScreen')}>
        <Text style={styles.buttonText}>Save restaurant address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "#000",
  },
  input: {
    height: 50,
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F7F7F7",
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF6B2C',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
   bottom:30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  stepText: {
    fontSize: 12,
    color: '#333',
  },
  stepIndicator: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,  // Reduced border radius for a smaller appearance
    paddingHorizontal: 3,  // Reduced horizontal padding
    paddingVertical: 2,
    left:300,  
    top:20,// Reduced vertical padding
  }
  
});

export default RestaurantAddressForm;
