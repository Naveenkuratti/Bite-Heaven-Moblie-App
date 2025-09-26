import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import Icon from "react-native-vector-icons/Feather";

export default function RestaurantDetails() {
  const { name, description, discount, imageKey } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const [guests, setGuests] = useState(1);

  const imageMap = {
    rest: require("../../assets/images/rest.png"),
    rest1: require("../../assets/images/rest1.png"),
  };

  const handleContinue = () => {
    setModalVisible(false);
    // Go to next step (e.g. date selection screen)
    router.push({
      pathname: "/Booktable/Booktable",
      params: { guests },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      {/* Banner */}
      <View>
        <Image source={imageMap[imageKey]} style={styles.bannerImage} />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/home")}
        >
          <Icon name="chevron-left" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={styles.subInfo}>₹500 for two • ⭐ 4.5</Text>
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

        {/* Reviews */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <Text style={styles.reviewText}>
            ⭐⭐⭐⭐⭐ Amazing food and great ambiance!{"\n"}
            ⭐⭐⭐⭐ Service was quick and friendly.
          </Text>
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About the restaurant</Text>
          <Text style={styles.aboutText}>
            🍴 Takeaway Available{"\n"}
            🪑 Indoor Seating{"\n"}
            🚗 Parking Facility
          </Text>
        </View>
      </ScrollView>

      {/* Fixed Footer Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.bookText}>Book a Table</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.payButton}
          onPress={() => alert("Pay Bill feature coming soon!")}
        >
          <Text style={styles.bookText}>Pay Bill</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for selecting guests */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ fontSize: 18, color: "#fff" }}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Select number of guests</Text>

            <View style={styles.guestRow}>
              {[1, 2, 3, 4].map((num) => (
                <TouchableOpacity
                  key={num}
                  style={[
                    styles.guestButton,
                    guests === num && styles.guestButtonSelected,
                  ]}
                  onPress={() => setGuests(num)}
                >
                  <Text
                    style={[
                      styles.guestText,
                      guests === num && styles.guestTextSelected,
                    ]}
                  >
                    {num}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleContinue}
            >
              <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Banner
  bannerImage: { width: "100%", height: 230 },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 4,
  },

  // Sections
  section: { padding: 15 },
  restaurantName: { fontSize: 24, fontWeight: "bold", marginBottom: 4 },
  subInfo: { fontSize: 14, color: "#777", marginBottom: 6 },
  description: { fontSize: 14, color: "#555", marginBottom: 4 },
  discount: { fontSize: 14, color: "green", fontWeight: "600" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  aboutText: { fontSize: 14, color: "#444", lineHeight: 20 },

  // Gallery
  galleryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  galleryImage: { width: "48%", height: 120, borderRadius: 10 },

  // Reviews
  reviewText: { fontSize: 14, color: "#333", marginTop: 5, lineHeight: 20 },

  // Footer Buttons
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  bookButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: "#FFA500",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  payButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: "#FF4500",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  bookText: { color: "#fff", fontWeight: "bold", fontSize: 15 },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#222",
    borderRadius: 12,
    padding: 20,
    width: "85%",
  },
  closeBtn: { position: "absolute", top: 10, right: 10 },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  guestRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  guestButton: {
    width: 60,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },
  guestButtonSelected: {
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#333",
  },
  guestText: { color: "#ccc", fontSize: 16, fontWeight: "bold" },
  guestTextSelected: { color: "#fff" },
  continueButton: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  continueText: { color: "#000", fontSize: 16, fontWeight: "bold" },
});
