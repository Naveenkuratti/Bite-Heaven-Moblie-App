import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity,
  StyleSheet, SafeAreaView, StatusBar
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function RestaurantDetails() {
  const { name, description, discount, imageKey } = useLocalSearchParams();

  const imageMap = {
    rest: require('../../assets/images/rest.png'),
    rest1: require('../../assets/images/rest1.png'),
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={imageMap[imageKey]} style={styles.bannerImage} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.discount}>{discount}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <View style={styles.galleryRow}>
            <Image source={imageMap[imageKey]} style={styles.galleryImage} />
            <Image source={imageMap[imageKey]} style={styles.galleryImage} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <Text style={styles.reviewText}>
            ⭐⭐⭐⭐⭐ Excellent place. Good ambiance. Tasty food.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the restaurant</Text>
          <Text>Takeaway Available{"\n"}Indoor Seating</Text>
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookText}>Book a Table</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.payButton}>
            <Text style={styles.bookText}>Pay Bill</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  bannerImage: { width: '100%', height: 200 },
  section: { padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, marginTop: 5 },
  discount: { fontSize: 14, marginTop: 2, color: 'green' },
  galleryRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  galleryImage: { width: '48%', height: 100, borderRadius: 10 },
  reviewText: { fontSize: 13, color: '#333', marginTop: 5 },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#eee',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  bookButton: {
    flex: 1,
    marginRight: 5,
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButton: {
    flex: 1,
    marginLeft: 5,
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  bookText: { color: '#fff', fontWeight: 'bold' },
});
