import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { router } from "expo-router";

export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState("Room");

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

          {/* Filter */}
          <Text style={styles.filterText}>Filter by Type</Text>
          <View style={styles.filterOptions}>
            <TouchableOpacity
              style={[styles.filterOption, activeFilter === "Restaurant" && styles.activeFilter]}
              onPress={() => {
                setActiveFilter("Restaurant");
                router.push("/home");
              }}
            >
              <Text style={styles.filterOptionText}>Restaurant</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.filterOption, activeFilter === "Room" && styles.activeFilter]}
              onPress={() => setActiveFilter("Room")}
            >
              <Text style={styles.filterOptionText}>Room</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>EXCLUSIVE OFFERINGS</Text>
          <View style={styles.divider} />
        </View>

        {/* Offerings */}
        <View style={styles.offeringsContainer}>
          {[
            { label: "Special Deals", image: require("../../assets/images/User1.png") },
            { label: "Walk-In Offers", image: require("../../assets/images/User3.png") },
            { label: "Group Bookings", image: require("../../assets/images/User4.png") },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.offeringItem}>
              <Image source={item.image} style={styles.offeringImage} resizeMode="cover" />
              <Text style={styles.offeringText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Promotion */}
        <View style={styles.promotionContainer}>
          <Image
            source={require("../../assets/images/User2.png")}
            style={styles.promotionImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: { flex: 1, backgroundColor: "#fff" },
  header: { backgroundColor: "#FFCB05", padding: 16 },
  headerTop: { flexDirection: "row", justifyContent: "space-between" },
  locationContainer: { flexDirection: "row", alignItems: "center" },
  locationText: { fontSize: 16, fontWeight: "600", marginRight: 4 },
  title: { fontSize: 24, fontWeight: "700", marginVertical: 8, textAlign: "center" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  searchInput: { flex: 1, height: 40 },
  searchIconsContainer: { flexDirection: "row", alignItems: "center" },
  searchIcon: { marginRight: 10 },
  filterText: { fontSize: 16, fontWeight: "600", marginTop: 10 },
  filterOptions: { flexDirection: "row", marginVertical: 10 },
  filterOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  activeFilter: { backgroundColor: "rgba(0,0,0,0.1)" },
  filterOptionText: { fontSize: 14, fontWeight: "bold" },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  dividerText: { marginHorizontal: 10, fontSize: 14, fontWeight: "600" },
  offeringsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  offeringItem: { alignItems: "center", width: 100 },
  offeringImage: { width: 80, height: 80, borderRadius: 10 },
  offeringText: { marginTop: 6, fontSize: 12, fontWeight: "600", textAlign: "center" },
  promotionContainer: { margin: 16, borderRadius: 12, overflow: "hidden" },
  promotionImage: { width: "100%", height: 180, borderRadius: 12 },
};
