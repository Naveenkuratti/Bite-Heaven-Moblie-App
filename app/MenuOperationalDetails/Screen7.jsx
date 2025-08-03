import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { ArrowLeft } from "react-native-feather";
import { useRouter } from "expo-router";

const DeviceSelectionScreen = () => {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState(null);

  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
  };

  const handleNext = () => {
    if (selectedDevice) {
      router.push("/MenuOperationalDetails/Screen8"); 
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu & operational details</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>7</Text>
          <Text style={styles.stepText}> of 7</Text>
        </View>
      </View>

   
      <ScrollView contentContainerStyle={styles.contentContainer}>
      
        <Text style={styles.title}>Select the device type you will use for online ordering</Text>

        
        <TouchableOpacity
          style={[styles.deviceOption, selectedDevice === "web" && styles.selectedOption]}
          onPress={() => handleDeviceSelect("web")}
        >
          <Image source={require("../../assets/images/web.jpg")} style={styles.deviceImage} />
          <Text style={styles.deviceText}>Bite Heaven restaurant partner web dashboard</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          style={[styles.deviceOption, selectedDevice === "mobile" && styles.selectedOption]}
          onPress={() => handleDeviceSelect("mobile")}
        >
          <Image source={require("../../assets/images/moblie.jpg")} style={styles.deviceImage} />
          <Text style={styles.deviceText}>
            Bite Heaven restaurant partner mobile app {"\n"} [Android Only]
          </Text>
        </TouchableOpacity>
      </ScrollView>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          disabled={!selectedDevice} 
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  stepIndicator: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  stepText: {
    fontSize: 14,
    color: "#666",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    bottom:200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  deviceOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15, 
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: "#FF7F2A",
  },
  deviceImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  deviceText: {
    fontSize: 16,
    flex: 1,
  },
  buttonContainer: {
    paddingVertical: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#ff6600",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
  },
  nextButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DeviceSelectionScreen;
