import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet, ScrollView } from "react-native";
import { ArrowLeft, X } from "react-native-feather";
import { useRouter } from "expo-router";

const PanDetailsScreen = () => {
  const router = useRouter();
  const [panNumber, setPanNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleNext = () => {
    router.push("/RestaurantDocument/Screen2");
    if (panNumber && fullName && businessAddress) {
      
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
  
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Restaurant Document</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>1 of 4</Text>
        </View>
      </View>


      <View style={styles.content}>
        <Text style={styles.title}>PAN Details</Text>
        <Text style={styles.subtitle}>
          Enter the PAN details of the person or company who legally owns the restaurant
        </Text>

        <TextInput
          style={styles.input}
          placeholder="PAN Number*"
          placeholderTextColor="#A0A0A0"
          value={panNumber}
          onChangeText={setPanNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name as per PAN*"
          placeholderTextColor="#A0A0A0"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Address of Your Registered Business*"
          placeholderTextColor="#A0A0A0"
          value={businessAddress}
          onChangeText={setBusinessAddress}
        />

        
        <TouchableOpacity style={styles.uploadBox}>
          <Image source={require("../../assets/images/iconimage.jpg")} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload Your PAN</Text>
          <Text style={styles.uploadSubtext}>JPEG, PNG, or JPG formats up to 5MB</Text>
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.guidelinesLink}>Guidelines to Upload PAN Images</Text>
        </TouchableOpacity>
      </View>

      
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
              <X color="black" size={24} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>PAN Image Guidelines</Text>
            <ScrollView>
              {[
                { img: require('../../assets/images/pan1.png'), text: "✅ Click a clear image. Make sure all details are visible" },
                { img: require('../../assets/images/pan2.png'), text: "❌ Image should not be blurry." },
                { img: require('../../assets/images/pan3.png'), text: "❌ Image should not be too zoomed in or cropped." },
              ].map((item, index) => (
                <View key={index} style={styles.guidelineItem}>
                  <Image source={item.img} style={styles.guidelineImage} />
                  <Text style={styles.guidelineText}>{item.text}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PanDetailsScreen;

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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
  },
  uploadBox: {
    backgroundColor: '#EAF3FF',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  uploadIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  uploadSubtext: {
    fontSize: 14,
    color: '#666',
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
    top:120,
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
  guidelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  guidelineImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  guidelineText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
});
