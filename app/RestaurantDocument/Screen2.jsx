import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal, Image, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { ArrowLeft, X } from "react-native-feather";
import { useRouter } from "expo-router";

const GSTDetailsScreen = () => {
  const router = useRouter();
  const [gstRegistered, setGstRegistered] = useState(null);
  const [gstNumber, setGstNumber] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNext = () => {
    if (gstRegistered === "yes" && !gstNumber) return;
    router.push("/RestaurantDocument/Screen3");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurant Information</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>2 of 4</Text>
        </View>
      </View>

     
      <View style={styles.content}>
        <Text style={styles.title}>GST Details (if applicable)</Text>
        <Text style={styles.subtitle}>
          This should be linked to the PAN provided earlier for tax calculations
        </Text>

        <Text style={styles.question}>Are you GST registered?</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity style={styles.radioItem} onPress={() => setGstRegistered("yes")}>
            <RadioButton status={gstRegistered === "yes" ? "checked" : "unchecked"} />
            <Text style={styles.radioLabel}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.radioItem} onPress={() => setGstRegistered("no")}>
            <RadioButton status={gstRegistered === "no" ? "checked" : "unchecked"} />
            <Text style={styles.radioLabel}>No</Text>
          </TouchableOpacity>
        </View>

        
        {gstRegistered === "yes" && (
          <TextInput
            style={styles.input}
            placeholder="Enter GST Number*"
            placeholderTextColor="#A0A0A0"
            value={gstNumber}
            onChangeText={setGstNumber}
          />
        )}

   
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.guidelinesLink}>Guidelines to Enter GST Number</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
              <X color="black" size={24} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>GST Guidelines</Text>
            <Text style={styles.guidelineText}>- GST number should be valid and match PAN details.</Text>
            <Text style={styles.guidelineText}>- Enter exactly as per government records.</Text>
          </View>
        </View>
      </Modal>

      
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default GSTDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  stepIndicator: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  stepText: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  question: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioLabel: {
    fontSize: 14,
    marginLeft: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
  },
  guidelinesLink: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 24,
  },
  nextButton: {
    backgroundColor: '#FF6B2C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    marginTop: 250,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  guidelineText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
});