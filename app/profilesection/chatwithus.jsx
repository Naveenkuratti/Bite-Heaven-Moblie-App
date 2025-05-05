import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function ChatWithUs() {
  const router = useRouter();

  const supportItems = [
    { label: 'App support', icon: 'chatbubble-outline' },
    { label: 'Movie support', icon: 'film-outline' },
    { label: 'Dining support', icon: 'restaurant-outline' },
    { label: 'Event support', icon: 'musical-notes-outline' },
    { label: 'IPL support', icon: 'trophy-outline' },
  ];

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.allTickets}>All support tickets</Text>
        </View>

        <Text style={styles.title}>Chat with us</Text>

        <View style={styles.grid}>
          {supportItems.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.card}>
              <Icon name={item.icon} size={24} color="#000" />
              <Text style={styles.cardText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.subtitle}>Open tickets</Text>
        <Text style={styles.noTickets}>There are no open tickets</Text>
      </ScrollView>

      <TouchableOpacity style={styles.chatButton}>
        <Icon name="chatbubbles-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.chatText}>Chat with us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  allTickets: {
    color: '#000',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#f2f2f2',
    width: '48%',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  cardText: {
    color: '#000',
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  subtitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 24,
    marginBottom: 8,
  },
  noTickets: {
    color: '#666',
    fontSize: 14,
  },
  chatButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  chatText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
