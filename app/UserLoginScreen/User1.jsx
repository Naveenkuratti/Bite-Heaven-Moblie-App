import React from 'react';
import { 
  View, Text, TextInput, Image, ScrollView, TouchableOpacity, 
  StyleSheet, SafeAreaView, StatusBar 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function User1() {
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
            <View style={styles.blackCircle} />
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
        
        {/* Divider with text */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>EXCLUSIVE OFFERINGS</Text>
          <View style={styles.divider} />
        </View>
        
        {/* Exclusive Offerings */}
        <View style={styles.offeringsContainer}>
          <TouchableOpacity style={styles.offeringItem}>
            <Image source={require('../../assets/images/User1.png')}
              style={styles.offeringImage} resizeMode="cover"
            />
            <Text style={styles.offeringText}>Special Deals</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.offeringItem}>
            <Image 
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wBu66c6sagGg8FPssaj4eeuTfBT1AB.png' }} 
              style={styles.offeringImage} resizeMode="cover"
            />
            <Text style={styles.offeringText}>Walk-In Offers</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.offeringItem}>
            <Image 
              source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wBu66c6sagGg8FPssaj4eeuTfBT1AB.png' }} 
              style={styles.offeringImage} resizeMode="cover"
            />
            <Text style={styles.offeringText}>Group Bookings</Text>
          </TouchableOpacity>
        </View>
        
       
        <View style={styles.promotionContainer}>
          <Image 
            source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wBu66c6sagGg8FPssaj4eeuTfBT1AB.png' }} 
            style={styles.promotionImage} resizeMode="cover"
          />
          <TouchableOpacity style={styles.bookNowButton}>
            <Text style={styles.bookNowText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        
        {/* All Restaurants Section */}
        <View style={styles.allRestaurantsContainer}>
          <Text style={styles.allRestaurantsTitle}>ALL RESTAURANTS</Text>
          
          {/* Filter Options */}
          <View style={styles.filterButtonsContainer}>
            {["Filter", "Sort by", "Cuisines", "New on Bite", "Ratings 4.5+"].map((item, index) => (
              <TouchableOpacity key={index} style={styles.filterButton}>
                <Text style={styles.filterButtonText}>{item}</Text>
              </TouchableOpacity>
            ))}
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
  filterOption: { paddingVertical: 5, paddingHorizontal: 15, marginRight: 10, borderRadius: 5 },
  activeFilter: { backgroundColor: 'rgba(0,0,0,0.1)' },
});     