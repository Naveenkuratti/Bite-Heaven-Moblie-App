import React, { useState, useEffect } from "react";
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
  const [guests, setGuests] = useState(2);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState("Lunch");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dates, setDates] = useState([]);

  const times = [
    "12:00 PM",
    "12:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
  ];
  const options = [
    {
      id: 1,
      title: "Regular table reservation",
      subtitle: "No cover charge required",
    },
  ];

  // Generate all dates in 2025
  useEffect(() => {
    const generateDates2025 = () => {
      const start = new Date("2025-01-01");
      const end = new Date("2025-12-31");
      const datesArray = [];
      const options = { weekday: "short" }; // e.g., "Thu"

      let current = start;
      while (current <= end) {
        const dayOfWeek = current.toLocaleDateString("en-US", options);
        const formatted = `${current.getDate()} ${dayOfWeek}`; // e.g., "25 Thu"
        datesArray.push(formatted);
        current.setDate(current.getDate() + 1);
      }
      return datesArray;
    };

    const allDates = generateDates2025();
    setDates(allDates);

    // Set default selected date to today if in 2025
    const today = new Date();
    if (today.getFullYear() === 2025) {
      const todayStr = `${today.getDate()} ${today.toLocaleDateString("en-US", { weekday: "short" })}`;
      setSelectedDate(todayStr);
    } else {
      setSelectedDate(allDates[0]);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Book a table</Text>
          <Text style={styles.subTitle}>Phurr</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Guests */}
        <View style={styles.section}>
          <Text style={styles.label}>Select number of guests</Text>
          <View style={styles.guestBox}>
            <Text style={styles.guestText}>{guests}</Text>
            <View style={styles.guestActions}>
              <TouchableOpacity
                disabled={guests <= 1}
                onPress={() => setGuests(guests - 1)}
              >
                <Text style={styles.guestBtn}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setGuests(guests + 1)}>
                <Text style={styles.guestBtn}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Dates */}
        <View style={styles.section}>
          <Text style={styles.label}>Select day and time</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((d) => (
              <TouchableOpacity
                key={d}
                style={[
                  styles.dateBox,
                  selectedDate === d && styles.dateBoxActive,
                ]}
                onPress={() => setSelectedDate(d)}
              >
                <Text
                  style={[
                    styles.dateText,
                    selectedDate === d && styles.dateTextActive,
                  ]}
                >
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Meal */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.mealButton}>
            <Text style={styles.mealText}>{selectedMeal}</Text>
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
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Options */}
        <View style={styles.section}>
          <Text style={styles.label}>1 option available</Text>
          {options.map((opt) => (
            <TouchableOpacity
              key={opt.id}
              style={[
                styles.optionCard,
                selectedOption === opt.id && styles.optionCardActive,
              ]}
              onPress={() => setSelectedOption(opt.id)}
            >
              <Icon name="bell" size={20} color="#000" />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.optionTitle}>{opt.title}</Text>
                <Text style={styles.optionSubtitle}>{opt.subtitle}</Text>
              </View>
              <View
                style={[
                  styles.radio,
                  selectedOption === opt.id && styles.radioActive,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <TouchableOpacity
        style={[
          styles.proceedBtn,
          (!selectedTime || !selectedOption) && { backgroundColor: "#ccc" },
        ]}
        disabled={!selectedTime || !selectedOption}
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

  label: { fontSize: 16, fontWeight: "600", marginBottom: 10, color: "#000" },

  // Guest
  guestBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
  },
  guestText: { fontSize: 16, fontWeight: "600", color: "#000" },
  guestActions: { flexDirection: "row" },
  guestBtn: { fontSize: 20, marginHorizontal: 10, color: "#000" },

  // Dates
  dateBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 10,
  },
  dateBoxActive: { backgroundColor: "#000", borderColor: "#000" },
  dateText: { fontSize: 14, color: "#000" },
  dateTextActive: { color: "#fff", fontWeight: "bold" },

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
  },
  timeBoxActive: { backgroundColor: "#000", borderColor: "#000" },
  timeText: { fontSize: 14, fontWeight: "600", color: "#000" },
  timeTextActive: { color: "#fff" },

  // Options
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  optionCardActive: { borderColor: "#000" },
  optionTitle: { fontSize: 15, fontWeight: "600", color: "#000" },
  optionSubtitle: { fontSize: 13, color: "#777" },
  radio: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#000",
  },
  radioActive: { backgroundColor: "#000" },

  
  proceedBtn: {
    backgroundColor: "#000",
    paddingVertical: 16,
    alignItems: "center",
    margin: 15,
    borderRadius: 10,
  },
  proceedText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
