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
      let { status } = await Location.requestForegroundPermissionsAsync();
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
      let nextIndex = currentIndex + 1;
      if (nextIndex >= promotions.length) nextIndex = 0;
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
      <ScrollView showsVerticalScrollIndicator={false}>
    
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.locationContainer}>
              <Feather name="map-pin" size={18} color="black" style={{ marginRight: 5 }} />
              {loadingLocation ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text style={styles.locationText}>
                  {location || "Location not available"}
                </Text>
              )}
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
            <TouchableOpacity
              style={[
                styles.filterOption,
                activeFilter === "Restaurant" && styles.activeFilter,
              ]}
              onPress={() => {
                setActiveFilter("Restaurant");
                router.push("/home");
              }}
            >
              <Text style={styles.filterOptionText}>Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterOption,
                activeFilter === "Room" && styles.activeFilter,
              ]}
              onPress={() => setActiveFilter("Room")}
            >
              <Text style={styles.filterOptionText}>Room</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>EXCLUSIVE OFFERINGS</Text>
          <View style={styles.divider} />
        </View>

        {/* Offerings */}
        <View style={styles.offeringsContainer}>
          {promotions.map((item, index) => (
            <TouchableOpacity key={index} style={styles.offeringItem}>
              <Image source={item.image} style={styles.offeringImage} resizeMode="cover" />
              <Text style={styles.offeringText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        
        <View style={styles.promotionContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            ref={scrollRef}
            snapToAlignment="center"
            decelerationRate="fast"
            contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
          >
            {promotions.map((item, index) => (
              <View
                key={index}
                style={{ width: ITEM_WIDTH, alignItems: "center", marginRight: 10 }}
              >
                <Image
                  source={item.image}
                  style={styles.promotionImage}
                  resizeMode="cover"
                />
                <Text style={styles.promotionTitle}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.pagination}>
            {promotions.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentIndex === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>

        {/* All Rooms */}
        <View style={styles.allRoomsContainer}>
          <Text style={styles.sectionTitle}>ALL ROOMS</Text>
          {rooms.map((room, index) => (
            <View key={index} style={styles.roomCard}>
              <Image source={room.image} style={styles.roomImage} resizeMode="cover" />
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: "bold" }}>{room.name}</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>{room.description}</Text>
                <Text style={{ fontSize: 12, color: "purple" }}>{room.offer}</Text>
              </View>
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
  headerTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  locationContainer: { flexDirection: "row", alignItems: "center" },
  locationText: { fontSize: 16, fontWeight: "bold", marginRight: 5 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  searchContainer: { flexDirection: "row", backgroundColor: "white", borderRadius: 25, alignItems: "center", paddingHorizontal: 15, marginVertical: 10 },
  searchInput: { flex: 1, height: 40 },
  searchIconsContainer: { flexDirection: "row", alignItems: "center" },
  searchIcon: { marginRight: 10 },
  filterText: { fontSize: 12, marginTop: 5 },
  filterOptions: { flexDirection: "row", marginTop: 5 },
  filterOption: { paddingVertical: 10, paddingHorizontal: 15, marginRight: 20, borderRadius: 5 },
  activeFilter: { backgroundColor: "rgba(0,0,0,0.1)" },
  filterOptionText: { fontSize: 14, fontWeight: "bold" },
  dividerContainer: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  dividerText: { fontSize: 14, fontWeight: "bold", marginHorizontal: 10 },
  offeringsContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10, paddingHorizontal: 15 },
  offeringItem: { alignItems: "center", flex: 1 },
  offeringImage: { width: 80, height: 80, borderRadius: 10 },
  offeringText: { marginTop: 5, fontSize: 12, textAlign: "center" },
  promotionContainer: { marginVertical: 20 },
  promotionImage: { width: ITEM_WIDTH, height: 220, borderRadius: 20 },
  promotionTitle: { marginTop: 5, fontSize: 14, fontWeight: "bold", color: "#000" },
  pagination: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#ccc", marginHorizontal: 4 },
  activeDot: { backgroundColor: "#FFCB05" },
  allRoomsContainer: { padding: 15 },
  roomCard: { borderRadius: 10, overflow: "hidden", marginBottom: 15 },
  roomImage: { width: "100%", height: 150, borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
