import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleNext = () => {
    router.push('/profilesection/editscreen');
  };

  const handlePress = (item) => {
    const routes = {
      'Frequently asked questions': '/profilesection/faq',
      'Chat with us': '/profilesection/chatwithus',
      'Share feedback': '/profilesection/sharefeedback',
      'Your reviews': '/profilesection/reviews',
      'Movie reminders': '/profilesection/reminders',
      'Payment settings': '/profilesection/paymentsettings',
      'Notification settings': '/profilesection/notifications',
      'Account settings': '/profilesection/accountsettings',
      'About us': '/profilesection/about',
    };

    if (routes[item]) {
      router.push(routes[item]);
    }
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarPlaceholder} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Update your name</Text>
            <Text style={styles.phone}>9620395087</Text>
          </View>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Bookings */}
        <Text style={styles.sectionTitle}>All bookings</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card}>
            <Text>Table bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Movie tickets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Event tickets</Text>
          </TouchableOpacity>
        </View>

        {/* Vouchers */}
        <Text style={styles.sectionTitle}>Vouchers</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text>Collected vouchers</Text>
          <Icon name="chevron-forward" size={18} />
        </TouchableOpacity>

        {/* Payments */}
        <Text style={styles.sectionTitle}>Payments</Text>
        <TouchableOpacity style={styles.listItem}>
          <Text>Dining transactions</Text>
          <Icon name="chevron-forward" size={18} />
        </TouchableOpacity>

        {/* Manage */}
        <Text style={styles.sectionTitle}>Manage</Text>
        {['Your reviews', 'Movie reminders', 'Payment settings'].map((item, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.listItem}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
            <Icon name="chevron-forward" size={18} />
          </TouchableOpacity>
        ))}

        {/* Support */}
        <Text style={styles.sectionTitle}>Support</Text>
        {['Frequently asked questions', 'Chat with us', 'Share feedback'].map(
          (item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
              onPress={() => handlePress(item)}
            >
              <Text>{item}</Text>
              <Icon name="chevron-forward" size={18} />
            </TouchableOpacity>
          )
        )}

        {/* More */}
        <Text style={styles.sectionTitle}>More</Text>
        {['Notification settings', 'Account settings', 'About us'].map(
          (item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.listItem}
              onPress={() => handlePress(item)}
            >
              <Text>{item}</Text>
              <Icon name="chevron-forward" size={18} />
            </TouchableOpacity>
          )
        )}

        {/* Logout */}
        <TouchableOpacity
          style={styles.logout}
          onPress={() => setLogoutModalVisible(true)}
        >
          <Text style={{ color: 'red', fontWeight: 'bold' }}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>Bite Heaven v1.0</Text>
      </ScrollView>

      {/* Logout Modal */}
      <Modal
        transparent
        visible={logoutModalVisible}
        animationType="fade"
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Log out from</Text>

            <Pressable onPress={() => setLogoutModalVisible(false)}>
              <Text style={styles.modalOption}>This device</Text>
            </Pressable>

            <Pressable onPress={() => setLogoutModalVisible(false)}>
              <Text style={styles.modalOption}>All devices</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff' },
  content: { padding: 16, paddingBottom: 60 },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ccc',
    marginRight: 12,
  },
  userInfo: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  phone: { color: '#666' },

  nextButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  nextButtonText: { color: '#fff', fontWeight: 'bold' },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },

  row: { flexDirection: 'row', justifyContent: 'space-between' },
  card: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
    margin: 4,
    borderRadius: 8,
    alignItems: 'center',
  },

  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logout: {
    marginTop: 24,
    backgroundColor: '#fceaea',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
    marginTop: 20,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#1c1c1e',
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    color: '#f25c66',
    fontSize: 16,
    paddingVertical: 12,
    width: '100%',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
});
