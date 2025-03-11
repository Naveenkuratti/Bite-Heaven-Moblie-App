import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
import { ArrowLeft, X } from 'react-native-feather';
import { useRouter } from 'expo-router';

const MenuImagesScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleNext = () => {
    router.push('/MenuOperationalDetails/Screen4'); // Update path accordingly
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft color="black" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Menu & operational details</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>3</Text>
          <Text style={styles.stepText}> of 7</Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Add menu images</Text>
        <Text style={styles.subtitle}>
          These will be used to create your in-app menu for online ordering.
        </Text>

        {/* Upload Section */}
        <TouchableOpacity style={styles.uploadBox}>
          <Image source={require('../../assets/images/iconimage.jpg')} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Add menu images</Text>
          <Text style={styles.uploadSubtext}>jpeg, png or jpg formats up to 5MB</Text>
        </TouchableOpacity>

        {/* Guidelines Link */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.guidelinesLink}>Guidelines to upload menu images</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      {/* Image Upload Guidelines Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <X color="black" size={24} />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Menu images guidelines</Text>
            <ScrollView>
              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Menu1.png')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>✅ The Menu should only be in English/Hindi language.</Text>
              </View>
              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Menu2.jpg')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>❌ Make sure menu photos are clear,fully visible , and not blurred, cropped, or cut off.</Text>
              </View>
              <View style={styles.guidelineItem}>
                <Image source={require('../../assets/images/Menu3.jpg')} style={styles.guidelineImage} />
                <Text style={styles.guidelineText}>✅ Menu items must include name,price,dietary tags(Veg/Non-Veg/Egg), and meat type for non-veg items.</Text>
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
    fontSize: 16,
    color: '#fff',
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
    padding: 20,
    borderRadius: 10,
    width: '80%',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  guidelineImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  guidelineText: {
    fontSize: 14,
  },
});

export default MenuImagesScreen;