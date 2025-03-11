import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const FilterScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const filterOptions = [
    { label: "Relevance" },
    { label: "Rating: High to Low" },
    { label: "Cost: Low to High" },
    { label: "Cost: High to Low" },
    { label: "Distance: Near to Far" },
  ];

  return (
    <View style={styles.container}>
      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.filterButtonText}>Filter</Text>
        <Feather name="chevron-down" size={20} color="black" style={styles.icon} />
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Filter by</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Feather name="x" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Sidebar Menu */}
            <ScrollView horizontal style={styles.sidebar}>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Sort by</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Dishes and cuisines</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Rating</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>Cost for two</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sidebarItem}>
                <Text style={styles.sidebarText}>More Filters</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* Filter Options */}
            <ScrollView style={styles.optionsContainer}>
              {filterOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => setSelectedOption(option.label)}
                >
                  <View style={styles.radioCircle}>
                    {selectedOption === option.label && <View style={styles.selectedCircle} />}
                  </View>
                  <Text style={styles.optionText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Bottom Buttons */}
            <View style={styles.bottomButtons}>
              <TouchableOpacity onPress={() => setSelectedOption(null)}>
                <Text style={styles.clearText}>Clear all</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  filterButtonText: { fontSize: 16, color: "black", fontWeight: "bold" },
  icon: { marginLeft: 5 },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", color: "white" },

  sidebar: { flexDirection: "row", marginVertical: 10 },
  sidebarItem: { paddingVertical: 8, paddingHorizontal: 12 },
  sidebarText: { color: "#aaa", fontSize: 14 },

  optionsContainer: { maxHeight: 300 },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  selectedCircle: { width: 10, height: 10, borderRadius: 5, backgroundColor: "white" },
  optionText: { color: "white", fontSize: 16 },

  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  clearText: { color: "#aaa", fontSize: 16, textDecorationLine: "underline" },
  applyButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyText: { color: "black", fontSize: 16, fontWeight: "bold" },
});

export default FilterScreen;
