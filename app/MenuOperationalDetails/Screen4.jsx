import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { ArrowLeft, X } from 'react-native-feather';
import { useRouter } from 'expo-router';

const AddRestaurant = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    router.push('/MenuOperationalDetails/Screen5'); 
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu & operational details</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>4</Text>
          <Text style={styles.stepText}> of 7</Text>
        </View>
      </View>

      
      <View style={styles.content}>
        <Text style={styles.title}>Add restaurant profile image</Text>
        <Text style={styles.subtitle}>
          This will be your restaurant's profile picture on Bite Heaven, so use your best food shot!
        </Text>

      
        <TouchableOpacity style={styles.uploadBox}>
          <Image source={require('../../assets/images/iconimage.jpg')} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Add restaurant images</Text>
          <Text style={styles.uploadSubtext}>jpeg, png or jpg formats up to 5MB</Text>
        </TouchableOpacity>

     
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.guidelinesLink}>Guidelines to upload restaurant images</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

    
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
         
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <X color="black" size={24} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Restaurant images guidelines</Text>
            <ScrollView>
              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Example.jpg')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>✅ Use high-quality images with good lighting.</Text>
              </View>
             
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    lex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  stepIndicator: {
    flexDirection: 'row',
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
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  uploadBox: {
    backgroundColor: '#EAF6FF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  uploadIcon: {
    width: 40,
    height: 40,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  uploadSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  guidelinesLink: {
    fontSize: 14,
    color: '#007AFF',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#ff7f2a',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  guidelineItem: {
    marginBottom: 5,
  },
  guidelineImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  guidelineText: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default AddRestaurant; 