import React, { useState } from 'react';
import { 
  View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';

const RegisterRestaurant = () => {
  const router = useRouter();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [restaurantName, setRestaurantName] = useState('');
  const [restaurantType, setRestaurantType] = useState('');

  const profileImage = require('../../assets/images/food.png');
  const bannerImage = require('../../assets/images/image5.jpg');

  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
      
      
      <View style={styles.bannerContainer}>
        <Image source={bannerImage} style={styles.bannerImage} />
        <TouchableOpacity onPress={toggleSidebar} style={styles.menuIconContainer}>
          <Text style={{color:'white', fontSize:20}}>☰</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.bannerContent}>
        <Text style={styles.bannerTitle}>
          Partner with Bite Heaven and grow your business
        </Text>
        <Text style={styles.bannerSubtitle}>
          0% commission for the 1st month for new restaurant partners in selected cities
        </Text>
        <TouchableOpacity style={styles.bannerButton} onPress={() => router.push('/Button/Service')}>
          <Text style={styles.buttonText}>Register your restaurant</Text>
        </TouchableOpacity>

        
        {Platform.OS === 'web' ? (
          <video
            src="https://youtu.be/ltHbdeJg9eA?si=s92hsuFg8DC-rnll"
            style={styles.video}
            controls
            autoPlay
            muted
            loop
          />
        ) : (
          <Text style={styles.videoPlaceholder}>
            Video will appear here on mobile
          </Text>
        )}
      </View>

      {isSidebarVisible && (
        <View style={styles.sidebar}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={styles.sidebarTitle}>Welcome, User!</Text>

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

          <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
            <Text style={styles.closeButtonText}>Sign out</Text>
          </TouchableOpacity>
        </View>
      )}

     
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Get Started – it only takes 10 minutes</Text>
        <Text style={styles.listItem}>✔ Restaurant name and address</Text>
        <Text style={styles.listItem}>✔ Menu details</Text>
        <Text style={styles.listItem}>✔ Owner’s information</Text>
        <Text style={styles.listItem}>✔ Bank account details</Text>
      </View>

    
      <View style={styles.featureContainer}>
        <Image source={require("../../assets/images/support.png")} style={styles.foodImage}/>
        <Text style={styles.listItem}>Attract new customers</Text>
        <Text style={styles.listItem}>Reach millions of people ordering on Bite Heaven</Text>
      </View>

      <View style={styles.featureContainer}>
        <Image source={require("../../assets/images/support1.jpg")} style={styles.foodImage}/>
        <Text style={styles.listItem}>Hotline support</Text>
        <Text style={styles.listItem}>On-call support for issues or growth consultations</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  bannerContainer: { width: '100%', height: 200 },
  bannerImage: { width: '100%', height: '100%', opacity: 0.7 },
  menuIconContainer: { position: 'absolute', top: 20, left: 20, padding: 10, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 25 },
  bannerContent: { alignItems: 'center', backgroundColor: '#f8b400', padding: 20 },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: 5 },
  bannerSubtitle: { fontSize: 16, color: 'black', textAlign: 'center', marginBottom: 10 },
  bannerButton: { backgroundColor: 'orange', padding: 10, borderRadius: 5 },
  buttonText: { color: 'black', fontWeight: 'bold' },
  video: { width: '100%', height: 150, borderRadius: 10, marginTop: 10 },
  videoPlaceholder: { width: '100%', height: 150, backgroundColor: '#ccc', textAlign: 'center', lineHeight: 150 },
  sidebar: { position: 'absolute', right: 0, top: 0, width: '60%', height: '100%', backgroundColor: 'white', padding: 20, zIndex: 1000 },
  profileImage: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
  sidebarTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  input: { backgroundColor: '#f2f2f2', borderRadius: 5, padding: 10, marginBottom: 10 },
  closeButton: { backgroundColor: '#f8b400', padding: 10, borderRadius: 5, alignItems: 'center' },
  closeButtonText: { color: '#fff', fontWeight: 'bold' },
  infoSection: { padding: 20 },
  infoTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  listItem: { fontSize: 14, marginBottom: 5 },
  featureContainer: { padding: 20, alignItems: 'center' },
  foodImage: { width: 100, height: 100, marginBottom: 10 },
});

export default RegisterRestaurant;
