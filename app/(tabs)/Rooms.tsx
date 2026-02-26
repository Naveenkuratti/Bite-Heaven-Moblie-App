import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import Feather from "react-native-vector-icons/Feather";
import { router } from "expo-router";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState("Room");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState<string | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const scrollRef = useRef<ScrollView>(null);

  const promotions = [
    { image: require("../../assets/images/rooms1.png"), title: "Special Deals" },
    { image: require("../../assets/images/rooms2.png"), title: "Walk-In Offers" },
    { image: require("../../assets/images/rooms1.png"), title: "Group Bookings" },
  ];

  const rooms = [
    {
      name: "Deluxe Room",
      description: "Spacious, fully furnished | ₹1500 per night",
      offer: "Flat 20% off",
      image: require("../../assets/images/rooms1.png"),
    },
    {
      name: "Premium Suite",
      description: "Luxury room with city view | ₹2500 per night",
      offer: "Special Weekend Offer",
      image: require("../../assets/images/rooms2.png"),
    },
    {
      name: "Couple Room",
      description: "Romantic suite for two | ₹2000 per night",
      offer: "Flat 15% off",
      image: require("../../assets/images/rooms2.png"),
    },
  ];

 
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLocation("Permission Denied");
        setLoadingLocation(false);
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      const geo = await Location.reverseGeocodeAsync({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      if (geo.length > 0) {
        const { city, region } = geo[0];
        setLocation(`${city || "Unknown City"}, ${region || ""}`);
      } else {
        setLocation("Unknown Location");
      }
      setLoadingLocation(false);
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % promotions.length;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({
        x: nextIndex * ITEM_WIDTH,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }} 
      >
       
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Feather name="map-pin" size={18} color="black" />
            {loadingLocation ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text style={styles.locationText}>
                {location || "Location not available"}
              </Text>
            )}
            <Feather name="chevron-down" size={20} color="black" />
          </View>

          <Text style={styles.title}>Bite Heaven</Text>

          {/* SEARCH */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for restaurants & rooms"
            />
            <Feather name="search" size={20} />
            <Feather name="mic" size={20} style={{ marginLeft: 10 }} />
          </View>

          {/* FILTER */}
          <View style={styles.filterOptions}>
            <TouchableOpacity
              style={[
                styles.filterOption,
                activeFilter === "Restaurant" && styles.activeFilter,
              ]}
              onPress={() => router.push("/home")}
            >
              <Text style={styles.filterText}>Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterOption,
                activeFilter === "Room" && styles.activeFilter,
              ]}
            >
              <Text style={styles.filterText}>Room</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* OFFERS */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>EXCLUSIVE OFFERINGS</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.offeringsContainer}>
          {promotions.map((item, index) => (
            <View key={index} style={styles.offeringItem}>
              <Image source={item.image} style={styles.offeringImage} />
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* SLIDER */}
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={scrollRef}
          contentContainerStyle={{
            paddingHorizontal: (width - ITEM_WIDTH) / 2,
          }}
        >
          {promotions.map((item, index) => (
            <View key={index} style={{ width: ITEM_WIDTH }}>
              <Image source={item.image} style={styles.promotionImage} />
            </View>
          ))}
        </ScrollView>

        {/* DOTS */}
        <View style={styles.pagination}>
          {promotions.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === currentIndex && styles.activeDot]}
            />
          ))}
        </View>

        {/* ROOMS */}
        <View style={styles.allRoomsContainer}>
          <Text style={styles.sectionTitle}>ALL ROOMS</Text>
          {rooms.map((room, index) => (
            <View key={index} style={styles.roomCard}>
              <Image source={room.image} style={styles.roomImage} />
              <Text style={styles.roomName}>{room.name}</Text>
              <Text style={styles.roomDesc}>{room.description}</Text>
              <Text style={styles.roomOffer}>{room.offer}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { backgroundColor: "#FFCB05", padding: 15 },
  locationContainer: { flexDirection: "row", alignItems: "center", gap: 5 },
  locationText: { fontWeight: "bold" },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center" },
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  searchInput: { flex: 1 },
  filterOptions: { flexDirection: "row", marginTop: 10 },
  filterOption: { padding: 10, marginRight: 15, borderRadius: 5 },
  activeFilter: { backgroundColor: "rgba(0,0,0,0.1)" },
  filterText: { fontWeight: "bold" },
  dividerContainer: { flexDirection: "row", alignItems: "center", margin: 15 },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  dividerText: { marginHorizontal: 10, fontWeight: "bold" },
  offeringsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  offeringItem: { alignItems: "center" },
  offeringImage: { width: 80, height: 80, borderRadius: 10 },
  promotionImage: { width: ITEM_WIDTH, height: 220, borderRadius: 20 },
  pagination: { flexDirection: "row", justifyContent: "center", margin: 10 },
  dot: { width: 8, height: 8, backgroundColor: "#ccc", margin: 4 },
  activeDot: { backgroundColor: "#FFCB05" },
  allRoomsContainer: { padding: 15 },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  roomCard: { marginBottom: 15 },
  roomImage: { width: "100%", height: 150, borderRadius: 10 },
  roomName: { fontWeight: "bold" },
  roomDesc: { fontSize: 12, color: "gray" },
  roomOffer: { color: "purple", fontSize: 12 },
});
