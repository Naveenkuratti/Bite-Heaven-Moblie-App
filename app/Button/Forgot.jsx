import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Forgot = () => {
  // ✅ Hooks MUST be inside the component
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Submitting:", { phoneNumber, newPassword, confirmPassword });

    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Password</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/")}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter phone no</Text>
        <TextInput
          style={styles.input}
          placeholder="91+"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

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

export default Forgot;
