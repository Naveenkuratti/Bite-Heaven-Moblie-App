

import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Profile() {
  const router = useRouter(); 

  const handleNext = () => {
    router.push('/profilesection/editscreen'); 
  };

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.profileHeader}>
        <View style={styles.avatarPlaceholder} />
        <View>
          <Text style={styles.name}>Update your name</Text>
          <Text style={styles.phone}>9620395087</Text>
        </View>
        <Icon name="pencil" size={20} color="#000" style={styles.editIcon} />
         <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
         
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
      </View>

    
      <Text style={styles.sectionTitle}>All bookings</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card}><Text>Table bookings</Text></TouchableOpacity>
        <TouchableOpacity style={styles.card}><Text>Movie tickets</Text></TouchableOpacity>
        <TouchableOpacity style={styles.card}><Text>Event tickets</Text></TouchableOpacity>
      </View>

      
      <Text style={styles.sectionTitle}>Vouchers</Text>
      <TouchableOpacity style={styles.listItem}>
        <Text>Collected vouchers</Text>
        <Icon name="chevron-forward" size={18} />
      </TouchableOpacity>

      
      <Text style={styles.sectionTitle}>Payments</Text>
      <TouchableOpacity style={styles.listItem}>
        <Text>Dining transactions</Text>
        <Icon name="chevron-forward" size={18} />
      </TouchableOpacity>

     
      <Text style={styles.sectionTitle}>Manage</Text>
      {['Your reviews', 'Movie reminders', 'Payment settings'].map((item, idx) => (
        <TouchableOpacity style={styles.listItem} key={idx}>
          <Text>{item}</Text>
          <Icon name="chevron-forward" size={18} />
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>Support</Text>
      {['Frequently asked questions', 'Chat with us', 'Share feedback'].map((item, idx) => (
        <TouchableOpacity style={styles.listItem} key={idx}>
          <Text>{item}</Text>
          <Icon name="chevron-forward" size={18} />
        </TouchableOpacity>
      ))}

      <Text style={styles.sectionTitle}>More</Text>
      {['Notification settings', 'Account settings', 'About us'].map((item, idx) => (
        <TouchableOpacity style={styles.listItem} key={idx}>
          <Text>{item}</Text>
          <Icon name="chevron-forward" size={18} />
        </TouchableOpacity>
      ))}

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <Text style={{ color: 'red' }}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>distrct v2.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
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
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  phone: {
    color: '#666',
  },
  editIcon: {
    marginLeft: 'auto',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
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
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fceaea',
    borderRadius: 8,
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});
