import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { ArrowLeft, X } from 'react-native-feather';
import { useRouter } from 'expo-router';

const AddFoodImagesScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    router.push('/MenuOperationalDetails/Screen3'); 
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu & operational details</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>2</Text>
          <Text style={styles.stepText}> of 7</Text>
        </View>
      </View>

      
      <View style={styles.content}>
        <Text style={styles.title}>Add food images (optional)</Text>
        <Text style={styles.subtitle}>
          These images will be shown on your restaurant’s Bite Heaven dining page.
        </Text>

        <TouchableOpacity style={styles.uploadBox}>
          <Image source={require('../../assets/images/iconimage.jpg')} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Add food images</Text>
          <Text style={styles.uploadSubtext}>jpeg, png or jpg formats up to 5MB</Text>
        </TouchableOpacity>

        
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.guidelinesLink}>Guidelines to upload food images</Text>
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

            <Text style={styles.modalTitle}>Food images guidelines</Text>
            <ScrollView>
              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Food1.jpg')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>
                  ✅ Click a clear and high-quality food image.
                </Text>
              </View>

              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Food2.jpg')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>
                  ❌ Image should not be blurry.
                </Text>
              </View>

              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Food3.jpg')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>
                  ❌ Image should not be too zoomed in.
                </Text>
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
    flex: 1,
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
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
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
    margin: 16,
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

export default AddFoodImagesScreen;
