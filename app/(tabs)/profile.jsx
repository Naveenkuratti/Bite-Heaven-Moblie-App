import React, { useEffect, useRef, useState } from 'react';
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
  const scrollViewRef = useRef(null);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 9999, animated: true });
  }, []);

  const handleNext = () => {
    router.push('/profilesection/editscreen');
  };

  const handlePress = (item) => {
    const supportRoutes = {
      'Frequently asked questions': '/profilesection/faq',
      'Chat with us': '/profilesection/chatwithus',
      'Share feedback': '/profilesection/sharefeedback',
    };

    const manageRoutes = {
      'Your reviews': '/profilesection/reviews',
      'Movie reminders': '/profilesection/reminders',
      'Payment settings': '/profilesection/paymentsettings',
    };

    const moreRoutes = {
      'Notification settings': '/profilesection/notifications',
      'Account settings': '/profilesection/accountsettings',
      'About us': '/profilesection/about',
    };

    const combinedRoutes = { ...supportRoutes, ...manageRoutes, ...moreRoutes };
    const path = combinedRoutes[item];
    if (path) {
      router.push(path);
    } else {
      console.warn(`No route defined for "${item}"`);
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
       
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
            style={styles.listItem}
            key={idx}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
            <Icon name="chevron-forward" size={18} />
          </TouchableOpacity>
        ))}

      
        <Text style={styles.sectionTitle}>Support</Text>
        {['Frequently asked questions', 'Chat with us', 'Share feedback'].map((item, idx) => (
          <TouchableOpacity
            style={styles.listItem}
            key={idx}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
            <Icon name="chevron-forward" size={18} />
          </TouchableOpacity>
        ))}

        {/* More */}
        <Text style={styles.sectionTitle}>More</Text>
        {['Notification settings', 'Account settings', 'About us'].map((item, idx) => (
          <TouchableOpacity
            style={styles.listItem}
            key={idx}
            onPress={() => handlePress(item)}
          >
            <Text>{item}</Text>
            <Icon name="chevron-forward" size={18} />
          </TouchableOpacity>
        ))}

        {/* Logout */}
        <TouchableOpacity style={styles.logout} onPress={() => setLogoutModalVisible(true)}>
          <Text style={{ color: 'red', fontWeight: 'bold' }}>Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <Text style={styles.footerText}>Bite Heaven v.1.0</Text>
      </ScrollView>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        visible={logoutModalVisible}
        animationType="fade"
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Log out from</Text>

            <Pressable
              onPress={() => {
                setLogoutModalVisible(false);
                console.log('Logout from this device');
              }}
            >
              <Text style={styles.modalOption}>This device</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                setLogoutModalVisible(false);
                console.log('Logout from all devices');
              }}
            >
              <Text style={styles.modalOption}>All devices</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingBottom: 60,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#ccc',
    borderRadius: 30,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    color: '#666',
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logout: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#fceaea',
    borderRadius: 8,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
    marginTop: 20,
    marginBottom: 20,
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
    marginBottom: 20,
    fontWeight: 'bold',
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
