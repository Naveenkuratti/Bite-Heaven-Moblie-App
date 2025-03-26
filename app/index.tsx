import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { getLogin } from './api/authApi';




export default function Index() {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("login");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (activeButton === "login") {
      router.push('../(tabs)/home');
    } else {
      alert('Logged in as Admin');
    }
  };  

  const Opt = async () => {
    if (activeButton !== "login") {
      return;
    }

    if (phoneNumber.trim().length === 0) {
      alert('Please enter a valid phone number');
      return;
    }

    try {
      const loginResponse = await getLogin(phoneNumber);

      if (!loginResponse || !loginResponse.otp) {
        throw new Error('Invalid OTP response');
      }

      setOtp(loginResponse.otp.toString());
      alert(`OTP sent: ${loginResponse.otp}`);

    } catch (error) {
      console.error("Error fetching OTP:", error);
      alert("Error sending OTP. Please try again.");
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.registerskip}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.triangleBackground} />

        <View style={styles.circleContainer}>
          <Image source={require('../assets/images/obg1.jpg')} style={styles.foodImage} />
        </View>

        <Text style={styles.logoText}>Bite Heaven</Text>

        <View style={styles.inputContainer}>
          <View style={styles.phoneInputContainer}>
            {activeButton === "admin" ? (
              <>
                <Text style={styles.prefix}>+91</Text>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Admin Phone"
                  placeholderTextColor="black"
                  keyboardType="phone-pad"
                />
              </>
            ) : (
              <>
                <Text style={styles.prefix}>+91</Text>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="User Phone"
                  placeholderTextColor="black"
                  keyboardType="phone-pad"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                />
              </>
            )}
            <TouchableOpacity onPress={Opt}>
              <FontAwesome name="arrow-right" size={19} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder={activeButton === "admin" ? "Admin Password" : "Enter OTP"}
              placeholderTextColor="#666"
              secureTextEntry={activeButton === "admin"}
              value={activeButton === "login" ? password : otp}
              onChangeText={activeButton === "login" ? setPassword : setOtp}
            />
            <Icon name="lock" size={20} color="#FF8C00" style={styles.lockIcon} />
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.buttonRow}>
            {["login", "admin"].map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.switchButton, activeButton === button && styles.activeButton]}
                onPress={() => setActiveButton(button)}
              >
                <Text style={[styles.switchButtonText, activeButton === button && styles.activeButtonText]}>
                  {button === "login" ? "User" : "Admin"}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {activeButton === "admin" && (
            <TouchableOpacity onPress={() => router.push('/Button/Forgot')}>
              <Text style={styles.forgot}>Forgot Password ?</Text>
            </TouchableOpacity>
          )}

          {activeButton === "admin" && (
            <>
              <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.line} />
              </View>

              <Text style={styles.signInText}>Sign in using:</Text>

              <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push("./AuthScreens/AdminRegister")}>
                  <Text style={styles.registerLink}>Register now</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  triangleBackground: {
    position: "absolute",
    top: 5,
    left: -205,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderRightWidth: 300,
    borderTopWidth: 300,
    borderRightColor: "transparent",
    borderTopColor: "#FF8C00",
    transform: [{ rotate: "135deg" }],
  },
  circleContainer: {
    position: "absolute",
    top: 106,
    left: 25,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  foodImage: {
    width: "100%",
    height: "100%",
  },
  logoText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "orange",
    textDecorationLine: "underline",
    textDecorationColor: "black",
    top: 130,
    left: 60,
    marginBottom: 115,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  switchButton: {
    width: 100,
    backgroundColor: "#FFE4C4",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: "#FF8C00",
  },
  switchButtonText: {
    fontSize: 15,
    color: "#666",
  },
  activeButtonText: {
    color: "white",
  },
  registerskip: {
    position: 'absolute',
    top: 40,
    right: 20,
    color: '#FF8C00',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    zIndex: 10,
  },
  inputContainer: {
    backgroundColor: "#FFE4C4",
    borderRadius: 20,
    padding: 14,
    marginTop: 131,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    justifyContent: "space-between",
  },
  prefix: {
    color: "black",
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    color: "black",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
  },
  lockIcon: {
    marginLeft: 10,
  },
  submitButton: {
    backgroundColor: "#FF8C00",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    color: "#666",
  },
  signInText: {
    textAlign: "center",
    color: "blue",
    marginBottom: 10,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  registerText: {
    color: "#666",
  },
  registerLink: {
    color: "#FF8C00",
    fontWeight: "bold",
  },
  forgot: {
    color: "#FF8C00",
    fontWeight: "bold",
    marginLeft: 200,
    marginTop: 10,
  },
});
