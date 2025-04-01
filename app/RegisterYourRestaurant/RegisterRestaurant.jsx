import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Video from 'react-native-video'; 
import ServiceSelectionScreen from './../Button/Service';

const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantType, setRestaurantType] = useState('');

  const router=useRouter();
  const profileImage = require('../../assets/images/food.png');
  const bannerImage = require('../../assets/images/image5.jpg');

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
const RegisterRestaurant = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Top Image */}
      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} />
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuIconContainer}>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Banner Content */}

     
      <View style={styles.bannerContent}>
        <Text style={styles.bannerTitle}>
          Partner with Bite Heaven and grow your business
        </Text>
        <Text style={styles.bannerSubtitle}>
          0% commission for the 1st month for new restaurant partners in selected cities
        </Text>
        <TouchableOpacity style={styles.bannerButton}   onPress={()=>router.push('/Button/Service')}>
          <Text style={styles.buttonText}>Register your restaurant</Text>
        </TouchableOpacity>

        {/* Video Section */}
        {/* <View style={styles.videoContainer}>
          <Video
            source={{ uri: "" }} // Replace with your video URL
            style={styles.video}
            controls
            resizeMode="cover"
          />
        </View> */}
      </View>

      {isSidebarVisible && (
        <View style={styles.sidebar}>
          {/* Sidebar Header */}
          <View style={styles.sidebarHeader}>
            <Image source={profileImage} style={styles.profileImage} />
            <Text style={styles.sidebarTitle}>Welcome, User!</Text>
          </View>

          {/* Input Fields */}
          <Text style={styles.sidebarTitle}>Enter Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Restaurant Name"
            value={restaurantName}
            onChangeText={setRestaurantName}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Details"
            value={restaurantType}
            onChangeText={setRestaurantType}
          />

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
            <Text style={styles.closeButtonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Get Started Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Get Started – it only takes 10 minutes</Text>
        <Text style={styles.infoSubtitle}>Please make sure you have the following:</Text>
        <Text style={styles.listItem}>✔ Restaurant name and address</Text>
        <Text style={styles.listItem}>✔ Menu details</Text>
        <Text style={styles.listItem}>✔ Owner’s information</Text>
        <Text style={styles.listItem}>✔ Bank account details</Text>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Why should you partner with Bite Heaven?</Text>
        </TouchableOpacity>
      </View>


      <View  style={styles. Ccontainer}>
         <Image 
                  source={require("../../assets/images/support.png")}
                  style={styles.foodImage}
                />
                        <Text style={styles.listItem}>Attract new customers</Text>
                        <Text style={styles.listItem}>Reach the millions of peoples ordering on Bite Heaven</Text>
      </View>
      <View  style={styles. Ccontainer}>
         <Image 
                  source={require("../../assets/images/support1.jpg")}
                  style={styles.foodImage}
                />
                        <Text style={styles.listItem}>Hotline support</Text>
                        <Text style={styles.listItem}>on-call Support for any issues or
                        growth consultations</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  bannerImage: {
    width: '100%',  
    height: '100%',
    opacity: 0.7,
  },
  menuIconContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 25,
  },
  bannerContent: {
    alignItems: 'center',
    backgroundColor: '#f8b400',
    padding: 20,
  },
 
  bannerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    bottom:250,
    color: 'black',
  },
  bannerSubtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    bottom:250,
  },
  bannerButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    bottom:250,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  Ccontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh' // Adjust as needed
  },
  foodImage: {
    width: 100,
    height: 100,
  }
,  
  sidebar: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: '50%',
    backgroundColor: 'white',
    padding: 20,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: -2, height: 0 },
    shadowRadius: 5,
  },
  sidebarTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#f8b400',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoSection: {
    padding: 20,
    backgroundColor: '#fff',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  infoButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f8b400',
    borderRadius: 5,
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterRestaurant;
