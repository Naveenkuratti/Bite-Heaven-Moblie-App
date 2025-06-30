import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function About() {
  const router = useRouter();

  const handleBack = () => {
    router.back('/profile');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About us</Text>
      </View>

      {/* Cards */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="article" size={20} color="#000" />
          <Text style={styles.cardText}>Terms of Service</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="person-circle-outline" size={20} color="#000" />
          <Text style={styles.cardText}>Privacy policy</Text>
          <Ionicons name="chevron-forward" size={20} color="#888" style={{ marginLeft: 'auto' }} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef2', // Light pink background
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
  cardContainer: {
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
