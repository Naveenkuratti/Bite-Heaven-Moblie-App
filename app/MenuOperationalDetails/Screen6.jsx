import React, { useState } from "react";
import { 
  View, Text, Switch, TouchableOpacity, Modal, FlatList, StyleSheet 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router"; 

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const RestaurantTimings = () => {
  const router = useRouter();
  const [timings, setTimings] = useState(
    days.map((day) => ({ day, isOpen: true, slots: [] }))
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentSlot, setCurrentSlot] = useState({ start: "", end: "" });

  
  const toggleSwitch = (index) => {
    setTimings((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  
  const openTimeModal = (day) => {
    setSelectedDay(day);
    setModalVisible(true);
  };

 
  const addTimeSlot = () => {
    if (currentSlot.start && currentSlot.end) {
      setTimings((prev) =>
        prev.map((item) =>
          item.day === selectedDay
            ? { ...item, slots: [...item.slots, currentSlot] }
            : item
        )
      );
      setCurrentSlot({ start: "", end: "" });
      setModalVisible(false); 
    }
  };

  const handleNext = () => {
    router.push("/MenuOperationalDetails/Screen7"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurant Timings</Text>

      <FlatList
        data={timings}
        keyExtractor={(item) => item.day}
        renderItem={({ item, index }) => (
          <View style={styles.dayContainer}>
            <View style={styles.row}>
              <Text style={styles.dayText}>{item.day}</Text>
              <Switch value={item.isOpen} onValueChange={() => toggleSwitch(index)} />
            </View>
            <TouchableOpacity onPress={() => openTimeModal(item.day)}>
              <Text style={styles.addTimeText}>+ Add/Edit Time</Text>
            </TouchableOpacity>
          </View>
        )}
      />

   
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedDay}</Text>

            <Text style={styles.label}>Start Time:</Text>
            <Picker
              selectedValue={currentSlot.start}
              onValueChange={(value) => setCurrentSlot((prev) => ({ ...prev, start: value }))}
            >
              <Picker.Item label="Select Start Time" value="" />
              <Picker.Item label="08:00 AM" value="08:00 AM" />
              <Picker.Item label="09:00 AM" value="09:00 AM" />
            </Picker>

            <Text style={styles.label}>End Time:</Text>
            <Picker
              selectedValue={currentSlot.end}
              onValueChange={(value) => setCurrentSlot((prev) => ({ ...prev, end: value }))}
            >
              <Picker.Item label="Select End Time" value="" />
              <Picker.Item label="10:00 AM" value="10:00 AM" />
              <Picker.Item label="11:00 AM" value="11:00 AM" />
            </Picker>

            <TouchableOpacity style={styles.addSlotButton} onPress={addTimeSlot}>
              <Text style={styles.buttonText}>Add Slot</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dayContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dayText: {
    fontSize: 18,
  },
  addTimeText: {
    color: "blue",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
  },
  addSlotButton: {
    marginTop: 10,
    backgroundColor: "#008CBA",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  closeText: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
  },
  footer: {
    marginTop: 10,
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#ff6600",
    padding: 12,
    marginTop: 10,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  nextText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default RestaurantTimings;
