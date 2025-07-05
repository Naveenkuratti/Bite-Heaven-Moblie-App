import React from 'react';
import {
  View, Text, TextInput, Image, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Home() {

  const handleNext = (item: { name: any; description: any; discount: any; image?: any; imageKey: any; }) => {
    router.push({
      pathname: '/RestaurantDetails/RestaurantDetails',
      params: {
        name: item.name,
        description: item.description,
        discount: item.discount,
        imageKey: item.imageKey,
      },
    });
  };

  const restaurants = [
    {
      name: 'Sharief Bhai Biryani',
      description: 'Tiger check biryani in North India | ₹1000 for two',
      discount: 'Flat 15% off',
      image: require('../../assets/images/rest.png'),
      imageKey: 'rest',
    },
    {
      name: 'Sharief Bhai Biryani',
      description: 'Royal Biryani in North India | ₹800 for two',
      discount: 'Flat 15% off',
      image: require('../../assets/images/rest1.png'),
      imageKey: 'rest1',
    },
    {
      name: 'Sharief Bhai Biryani',
      description: 'Royal Biryani in North India | ₹800 for two',
      discount: 'Flat 15% off',
      image: require('../../assets/images/rest1.png'),
      imageKey: 'rest1',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
       
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Location</Text>
              <Feather name="chevron-down" size={20} color="black" />
            </View>
          </View>

          <Text style={styles.title}>Bite Heaven</Text>

          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for restaurants & rooms"
            />
            <View style={styles.searchIconsContainer}>
              <Feather name="search" size={20} color="black" style={styles.searchIcon} />
              <Feather name="mic" size={20} color="black" />
            </View>
          </View>

          <Text style={styles.filterText}>Filter by Type</Text>
          <View style={styles.filterOptions}>
            <TouchableOpacity style={[styles.filterOption, styles.activeFilter]}>
              <Text style={styles.filterOptionText}>Restaurant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption}>
              <Text style={styles.filterOptionText}>Room</Text>
            </TouchableOpacity>
          </View>
        </View>

    
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>EXCLUSIVE OFFERINGS</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.offeringsContainer}>
          {[
            { label: "Special Deals", image: require('../../assets/images/User1.png') },
            { label: "Walk-In Offers", image: require('../../assets/images/User3.png') },
            { label: "Group Bookings", image: require('../../assets/images/User4.png') }
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.offeringItem}>
              <Image source={item.image} style={styles.offeringImage} resizeMode="cover" />
              <Text style={styles.offeringText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

       
        <View style={styles.promotionContainer}>
          <Image
            source={require('../../assets/images/User2.png')}
            style={styles.promotionImage}
            resizeMode="cover"
          />
        </View>

      
        <View style={styles.allRestaurantsContainer}>
          <Text style={styles.sectionTitle}>ALL RESTAURANTS</Text>

          {restaurants.map((item, index) => (
            <TouchableOpacity key={index} style={styles.restaurantCard} onPress={() => handleNext(item)}>
              <Image source={item.image} style={styles.restaurantImage} resizeMode="cover" />
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>{item.description}</Text>
                <Text style={{ fontSize: 12, color: 'purple' }}>{item.discount}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#FFCB05', padding: 15 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  locationContainer: { flexDirection: 'row', alignItems: 'center' },
  locationText: { fontSize: 16, fontWeight: 'bold', marginRight: 5 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10
  },
  searchInput: { flex: 1, height: 40 },
  searchIconsContainer: { flexDirection: 'row', alignItems: 'center' },
  searchIcon: { marginRight: 10 },
  filterText: { fontSize: 12, marginTop: 5 },
  filterOptions: { flexDirection: 'row', marginTop: 5 },
  filterOption: { paddingVertical: 10, paddingHorizontal: 15, marginRight: 20, borderRadius: 5 },
  activeFilter: { backgroundColor: 'rgba(0,0,0,0.1)' },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  divider: { flex: 1, height: 1, backgroundColor: '#ccc' },
  dividerText: { fontSize: 14, fontWeight: 'bold', marginHorizontal: 10 },
  offeringsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  offeringItem: { alignItems: 'center', flex: 1 },
  offeringImage: { width: 100, height: 100, borderRadius: 10 },
  offeringText: { marginTop: 5, fontSize: 12 },
  promotionContainer: { alignItems: 'center', marginVertical: 20 },
  promotionImage: { width: '100%', height: 210, borderRadius: 20 },
  allRestaurantsContainer: { padding: 15 },
  restaurantCard: { borderRadius: 10, overflow: 'hidden', marginBottom: 15 },
  restaurantImage: { width: '100%', height: 150, borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  filterOptionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
