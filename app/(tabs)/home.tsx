import React from 'react';
import { 
  View, Text, TextInput, Image, ScrollView, TouchableOpacity, 
  StyleSheet, SafeAreaView, StatusBar 
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router } from 'expo-router';
import FilterScreen from './../Fliter/FilterScreen';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}>Location</Text>
              <Feather name="chevron-down" size={20} color="black" />
            </View>
            
          </View>
          
          <Text style={styles.title}>Bite Heaven</Text>
          
          {/* Search Bar */}
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
          
          {/* Filter Options */}
          <Text style={styles.filterText}>
            Filter by Type</Text>
            <View style={styles.filterOptions}>
  <TouchableOpacity style={[styles.filterOption, styles.activeFilter]}>
    <Text style={styles.filterOptionText}>Restaurant</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.filterOption}>
    <Text style={styles.filterOptionText}>Room</Text>
  </TouchableOpacity>
</View>

        </View>
        
        {/* Divider with text */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>EXCLUSIVE OFFERINGS</Text>
          <View style={styles.divider} />
        </View>
        
        {/* Exclusive Offerings */}
        <View style={styles.offeringsContainer}>
          {[
            { label: "Special Deals", image: require('../../assets/images/User1.png') },
            { label: "Walk-In Offers", image: (require('../../assets/images/User3.png')) },
            { label: "Group Bookings", image: (require('../../assets/images/User4.png')) }
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.offeringItem}>
              <Image source={item.image} style={styles.offeringImage} resizeMode="cover" />
              <Text style={styles.offeringText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
         
          <View style={styles.divider} />
        </View>
        
        {/* Promotional Banner */}
        <View style={styles.promotionContainer}>
         
          <Image 
  source={require('../../assets/images/User2.png')} 
  style={styles.promotionImage} resizeMode="cover"
/>

        
        </View>
        
        {/* All Restaurants Section */}
        <View style={styles.allRestaurantsContainer}>
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>ALL RESTAURANTS </Text>
          <View style={styles.divider} />
        </View>
          
        <View style={styles.filterButtonsContainer}>
            {/* Filter */}
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}> Filter</Text>
              <Feather name="chevron-down" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>

            {/* Sort by */}
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Sort by</Text>
              <Feather name="chevron-down" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>

            {/* Cuisines */}
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Cuisines</Text>
              <Feather name="chevron-down" size={20} color="black" style={styles.icon} />
            </TouchableOpacity>

            {/* New on Bite */}
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>New on Bite</Text>
            </TouchableOpacity>

            {/* Ratings 4.5+ */}
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Ratings 4.5+</Text>
            </TouchableOpacity>
          </View>
          
          {/* Restaurant Card */}
          <View style={styles.restaurantCard}>
            <Image 
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wBu66c6sagGg8FPssaj4eeuTfBT1AB.png' }} 
              style={styles.restaurantImage} resizeMode="cover"
            />
          </View>
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
  blackCircle: { width: 30, height: 30, borderRadius: 15, backgroundColor: 'black' },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  searchContainer: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 25, alignItems: 'center', paddingHorizontal: 15, marginVertical: 10 },
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
  bookNowButton: { backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5, marginTop: 10 },
  bookNowText: { color: 'white', fontWeight: 'bold' },
  allRestaurantsContainer: { padding: 15 },
  allRestaurantsTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  filterButtonsContainer: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 },
  filterButton: { backgroundColor: '#f1f1f1', padding: 8, margin: 5, borderRadius: 5 },
  filterButtonText: { fontSize: 12 },
  restaurantCard: { borderRadius: 10, overflow: 'hidden' },
  restaurantImage: { width: '100%', height: 150, borderRadius: 10 },
  icon: {
    marginLeft: 5,
  },

  
  filterOptionText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});

