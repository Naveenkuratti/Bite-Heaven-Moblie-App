import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Location from "expo-location";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Restaurant");
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("Fetching location...");
  const scrollRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const promotions = [
    { image: require("../../assets/images/User2.png"), title: "Special Deals" },
    { image: require("../../assets/images/user8.png"), title: "Walk-In Offers" },
    { image: require("../../assets/images/User9.png"), title: "Group Bookings" },
  ];

  const restaurants = [
    {
      name: "Sharief Bhai Biryani",
      description: "Tiger check biryani in North India | ₹1000 for two",
      discount: "Flat 15% off",
      image: require("../../assets/images/rest.png"),
      imageKey: "rest",
    },
    {
      name: "Sharief Bhai Biryani",
      description: "Royal Biryani in North India | ₹800 for two",
      discount: "Flat 15% off",
      image: require("../../assets/images/rest1.png"),
      imageKey: "rest1",
    },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= promotions.length) nextIndex = 0;
      setCurrentIndex(nextIndex);
      scrollRef.current?.scrollTo({ x: nextIndex * ITEM_WIDTH, animated: true });
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Denied", "Allow location access to display your area.");
        setLocation("Permission denied");
        return;
      }

      const currentLoc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLoc.coords;

      const [place] = await Location.reverseGeocodeAsync({ latitude, longitude });

      if (place) {
        const city = place.city || place.district || place.region || "Unknown";
        setLocation(city);
      } else {
        setLocation(`${latitude.toFixed(2)}, ${longitude.toFixed(2)}`);
      }
    })();
  }, []);

  const handleNext = (item: any) => {
    router.push({
      pathname: "/RestaurantDetails/RestaurantDetails",
      params: item,
    });
  };

  // Mic press (Expo Go safe)
  const handleMicPress = () => {
    Alert.alert(
      "Voice Input",
      "Voice input is only available in a custom dev client or bare workflow."
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.locationContainer}>
              <Feather name="map-pin" size={18} color="black" />
              <Text style={styles.locationText}>{location}</Text>
              <Feather name="chevron-down" size={18} color="black" />
            </View>
          </View>

          <Text style={styles.title}>Bite Heaven</Text>

         
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for restaurants & rooms"
              value={searchText}
              onChangeText={setSearchText}
            />
            <View style={styles.searchIconsContainer}>
              <Feather name="search" size={20} color="black" style={styles.searchIcon} />
              <TouchableOpacity onPress={handleMicPress}>
                <Feather name="mic" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Filter */}
          <Text style={styles.filterText}>Filter by Type</Text>
          <View style={styles.filterOptions}>
            <TouchableOpacity
              style={[styles.filterOption, activeFilter === "Restaurant" && styles.activeFilter]}
              onPress={() => setActiveFilter("Restaurant")}
            >
              <Text style={styles.filterOptionText}>Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.filterOption, activeFilter === "Room" && styles.activeFilter]}
              onPress={() => {
                setActiveFilter("Room");
                router.push("/Rooms/Rooms");
              }}
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

      
        <View style={styles.offeringsContainer}>
          {[
            { label: "Special Deals", image: require("../../assets/images/User1.png") },
            { label: "Walk-In Offers", image: require("../../assets/images/User3.png") },
            { label: "Group Bookings", image: require("../../assets/images/User4.png") },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.offeringItem}>
              <Image source={item.image} style={styles.offeringImage} />
              <Text style={styles.offeringText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

       
        <View style={styles.promotionContainer}>
          <ScrollView 
            horizontal
            ref={scrollRef}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: (width - ITEM_WIDTH) / 2 }}
          >
            {promotions.map((item, index) => (
              <View
                key={index}
                style={{ width: ITEM_WIDTH, alignItems: "center", marginRight: 10 }}
              >
                <Image source={item.image} style={styles.promotionImage} />
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

  
        <View style={styles.allRestaurantsContainer}>
          <Text style={styles.sectionTitle}>ALL RESTAURANTS</Text>
          {restaurants.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.restaurantCard}
              onPress={() => handleNext(item)}
            >
              <Image source={item.image} style={styles.restaurantImage} />
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text style={{ fontSize: 12, color: "gray" }}>{item.description}</Text>
                <Text style={{ fontSize: 12, color: "purple" }}>{item.discount}</Text>
              </View>
            </TouchableOpacity>
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
  locationText: { fontSize: 16, fontWeight: "bold", marginHorizontal: 5 },
  title: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 10,
  },
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
  offeringsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  offeringItem: { alignItems: "center", flex: 1 },
  offeringImage: { width: 80, height: 80, borderRadius: 10 },
  offeringText: { marginTop: 5, fontSize: 12, textAlign: "center" },
  promotionContainer: { marginVertical: 20 },
  promotionImage: { width: ITEM_WIDTH, height: 220, borderRadius: 20, left: 10 },
  promotionTitle: { marginTop: 5, fontSize: 14, fontWeight: "bold", color: "#000" },
  pagination: { flexDirection: "row", justifyContent: "center", marginTop: 10 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#ccc", marginHorizontal: 4 },
  activeDot: { backgroundColor: "#FFCB05" },
  allRestaurantsContainer: { padding: 15 },
  restaurantCard: { borderRadius: 10, overflow: "hidden", marginBottom: 15 },
  restaurantImage: { width: "100%", height: 150, borderRadius: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
