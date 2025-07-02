import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AccountSettings() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleDeletePress = () => {
    setModalVisible(true);
  };

  const confirmDelete = () => {
    setModalVisible(false);
    console.log('Account deletion confirmed');
    // Call API or logic to delete account
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account Settings</Text>
      </View>

      {/* Delete Button */}
      <TouchableOpacity style={styles.button} onPress={handleDeletePress}>
        <MaterialIcons name="delete" size={20} color="#000" />
        <Text style={styles.buttonText}>Delete account</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>
              All the data associated with it (including your profile, photos,
              and reviews) will be permanently deleted in 30 days. This
              information can’t be recovered once the account is deleted
            </Text>

            <Pressable onPress={confirmDelete} style={styles.deleteBtn}>
              <Text style={styles.deleteText}>Delete my account now</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: 10,
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#111',
    padding: 20,
    borderRadius: 16,
    width: '85%',
  },
  modalText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
  deleteBtn: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  deleteText: {
    color: '#f55',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelBtn: {
    paddingVertical: 12,
  },
  cancelText: {
    color: '#f55',
    fontSize: 14,
    textAlign: 'center',
  },
});
