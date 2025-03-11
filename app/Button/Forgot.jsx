import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

import { Ionicons } from "@expo/vector-icons"
import { useRouter } from 'expo-router';
const [phoneNumber, setPhoneNumber] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");


const  router=useRouter();
const handleSubmit = () => {

  console.log("Submitting:", { phoneNumber, newPassword, confirmPassword });


  navigation.navigate("Login");
};

const Forgot = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Password</Text>
      <TouchableOpacity style={styles.backButton}   onPress={()=>router.push('/')}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter phone no</Text>
        <View style={styles.phoneInput}>
          <TextInput
            style={styles.input}
            placeholder="91+"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.label}>Enter New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="At least 8 digits"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 30,
    textAlign: "center",
  },
  inputContainer: {
    gap: 15,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
  },
  phoneInput: {

    width: 350,
  },
  button: {
    backgroundColor: "#FF5733",
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginTop: 300,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Forgot;
