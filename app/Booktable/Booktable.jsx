import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { router } from "expo-router";
import Icon from "react-native-vector-icons/Feather";

export default function Booktable() {
  const [guests, setGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState("23");
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = [
    { day: "23", label: "Tue" },
    { day: "24", label: "Wed" },
    { day: "25", label: "Thu" },
    { day: "26", label: "Fri" },
    { day: "27", label: "Sat" },
    { day: "28", label: "Sun" },
  ];

  const times = [
    "8:45 PM",
    "9:00 PM",
    "9:15 PM",
    "9:30 PM",
    "9:45 PM",
    "10:00 PM",
    "10:15 PM",
    "10:30 PM",
    "10:45 PM",
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Book a table</Text>
          <Text style={styles.subTitle}>Tiger Trail - Royal Orchid Hotel</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Guests */}
        <View style={styles.section}>
          <Text style={styles.label}>Select number of guests</Text>
          <View style={styles.guestSelector}>
            <TouchableOpacity
              disabled={guests <= 1}
              onPress={() => setGuests(guests - 1)}
            >
              <Text style={styles.guestBtn}>-</Text>
            </TouchableOpacity>
            <Text style={styles.guestText}>{guests}</Text>
            <TouchableOpacity onPress={() => setGuests(guests + 1)}>
              <Text style={styles.guestBtn}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dates */}
        <View style={styles.section}>
          <Text style={styles.label}>Select day and time</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((d) => (
              <TouchableOpacity
                key={d.day}
                style={[
                  styles.dateBox,
                  selectedDate === d.day && styles.dateBoxActive,
                ]}
                onPress={() => setSelectedDate(d.day)}
              >
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === d.day && styles.dateTextActive,
                  ]}
                >
                  {d.day}
                </Text>
                <Text
                  style={[
                    styles.dayText,
                    selectedDate === d.day && styles.dateTextActive,
                  ]}
                >
                  {d.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Meal Type */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.mealButton}>
            <Text style={styles.mealText}>Dinner</Text>
          </TouchableOpacity>
        </View>

        {/* Times */}
        <View style={styles.section}>
          <FlatList
            data={times}
            keyExtractor={(item) => item}
            numColumns={3}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.timeBox,
                  selectedTime === item && styles.timeBoxActive,
                ]}
                onPress={() => setSelectedTime(item)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === item && styles.timeTextActive,
                  ]}
                >
                  {item}
                </Text>
                <Text style={styles.discountText}>30% OFF</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Info */}
        <Text style={styles.infoText}>
          Any cover charge paid will be adjusted in the final bill
        </Text>
      </ScrollView>

      {/* Footer Button */}
      <TouchableOpacity
        style={[
          styles.proceedBtn,
          !selectedTime && { backgroundColor: "#ccc" },
        ]}
        disabled={!selectedTime}
        onPress={() =>
          alert(
            `Table booked for ${guests} guests on ${selectedDate} at ${selectedTime}`
          )
        }
      >
        <Text style={styles.proceedText}>Proceed to book</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  backBtn: { marginRight: 10 },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: "#000" },
  subTitle: { fontSize: 13, color: "#555" },

  // Section
  section: { padding: 15 },

  // Guests
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#000" },
  guestSelector: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: 120,
    justifyContent: "space-between",
  },
  guestBtn: { fontSize: 22, fontWeight: "bold", color: "#000" },
  guestText: { fontSize: 16, fontWeight: "600", color: "#000" },

  // Dates
  dateBox: {
    width: 60,
    height: 70,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#fff",
  },
  dateBoxActive: { backgroundColor: "#000", borderColor: "#000" },
  dateText: { fontSize: 18, fontWeight: "bold", color: "#000" },
  dayText: { fontSize: 14, color: "#555" },
  dateTextActive: { color: "#fff" },

  // Meal
  mealButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  mealText: { fontSize: 15, fontWeight: "600", color: "#000" },

  // Times
  timeBox: {
    width: "30%",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  timeBoxActive: { backgroundColor: "#000", borderColor: "#000" },
  timeText: { fontSize: 14, fontWeight: "600", color: "#000" },
  timeTextActive: { color: "#fff" },
  discountText: { fontSize: 12, color: "#6c63ff", marginTop: 4 },

  // Info
  infoText: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
  },

  // Footer
  proceedBtn: {
    backgroundColor: "#000",
    paddingVertical: 16,
    alignItems: "center",
    margin: 15,
    borderRadius: 10,
  },
  proceedText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
