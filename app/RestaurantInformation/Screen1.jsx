'use client'

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ArrowLeft } from 'react-native-feather';
import { useRouter } from 'expo-router';
import Screen2 from './../Rooms&FoodsScreens/Screen2';
const Information = () => {
  const [restaurantName, setRestaurantName] = useState('');
  const router = useRouter();

  const handleNext = () => {
    if (!restaurantName.trim()) {

      Alert.alert('Error', 'Please enter a valid restaurant name.');
    } else {
     
      router.push('/RestaurantInformation/Screen2');
    }
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => router.push('/Service')}>
            <ArrowLeft color="Black" size={24} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Restaurant Information</Text>
          <Text style={styles.pageIndicator}>1 of 3</Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputSection}>
          <Text style={styles.label}>Restaurant name</Text>
          <Text style={styles.helperText}>Customers will see this name on Bite Heaven</Text>
          <TextInput
            style={styles.input}
            placeholder="Restaurant name *"
            placeholderTextColor="#666"
            value={restaurantName}
            onChangeText={setRestaurantName}
          />
        </View>

    
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 16,
    flex: 1,
  },
  pageIndicator: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  formContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  inputSection: {
    gap: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
  },
  helperText: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    backgroundColor: '#F5F8FF',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#FF6B2C',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 'auto',
    bottom: 30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Information;