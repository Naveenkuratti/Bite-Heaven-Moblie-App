import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { useRouter } from 'expo-router';
const router = useRouter(); 

const Nextpage2 = () => {
    
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
         <TouchableOpacity onPress={() => router.push('/Service')}>
                    <ArrowLeft size={24} />
                  </TouchableOpacity>
        <Text style={styles.headerText}>Restaurant Information</Text>
        <View style={styles.stepIndicator}>
          <Text style={styles.stepText}>2 of 3</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Owner details</Text>
      <Text style={styles.subText}>
        Bite Heaven will use these details for all business communications and updates
      </Text>

  
      <TextInput
        style={styles.input}
        placeholder="Full Name*"
        placeholderTextColor="#999"
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email address*"
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

     
      <View style={styles.phoneContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number*"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyText}>Verify</Text>
        </TouchableOpacity>
      </View>

     
      <TouchableOpacity style={styles.nextButton} onPress={() => router.push('/RestaurantInformation/Screen3')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  stepIndicator: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  stepText: {
    fontSize: 12,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  subText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 14,
    color: '#000',
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  countryCode: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 14,
    color: '#000',
  },
  verifyButton: {
    backgroundColor: '#eaeaea',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  verifyText: {
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#FF6B2C',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
   bottom:30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Nextpage2;
