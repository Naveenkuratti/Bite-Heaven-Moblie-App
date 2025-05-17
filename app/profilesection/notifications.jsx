import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Notifications() {
  const [enableAll, setEnableAll] = useState(true);
  const router = useRouter();

  const [orders, setOrders] = useState({
    email: true,
    push: true,
    sms: true,
    whatsapp: true,
  });

  const [promos, setPromos] = useState({
    email: true,
    push: true,
    sms: true,
    whatsapp: true,
  });

  const handleToggleAll = () => {
    const newState = !enableAll;
    setEnableAll(newState);
    setOrders({
      email: newState,
      push: newState,
      sms: newState,
      whatsapp: newState,
    });
    setPromos({
      email: newState,
      push: newState,
      sms: newState,
      whatsapp: newState,
    });
  };

  const handleBack = () => {
    router.back('/profile');
  };

  return (
    <View style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Enable All */}
        <View style={styles.section}>
          <Text style={styles.label}>Enable all</Text>
          <Text style={styles.subtext}>Activate all notifications</Text>
          <Switch
            value={enableAll}
            onValueChange={handleToggleAll}
            thumbColor="#fff"
            trackColor={{ false: '#888', true: '#A88BFE' }}
          />
        </View>

        {/* Orders and purchases */}
        <Text style={styles.category}>Orders and purchases</Text>
        <Text style={styles.description}>
          Receive updates related to your bookings, reminders, payments and more
        </Text>
        {Object.keys(orders).map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.rowLabel}>{capitalize(key)}</Text>
            <Switch
              value={orders[key]}
              onValueChange={(val) => setOrders({ ...orders, [key]: val })}
              thumbColor="#fff"
              trackColor={{ false: '#888', true: '#A88BFE' }}
            />
          </View>
        ))}

        {/* Promos and offers */}
        <Text style={styles.category}>Promos and offers</Text>
        <Text style={styles.description}>
          Receive updates about coupons, promotions and offers
        </Text>
        {Object.keys(promos).map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.rowLabel}>{capitalize(key)}</Text>
            <Switch
              value={promos[key]}
              onValueChange={(val) => setPromos({ ...promos, [key]: val })}
              thumbColor="#fff"
              trackColor={{ false: '#888', true: '#A88BFE' }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    paddingRight: 12,
  },
  headerTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    padding: 16,
  },
  section: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  subtext: {
    color: '#555',
    fontSize: 12,
    marginBottom: 8,
  },
  category: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 4,
  },
  description: {
    color: '#666',
    fontSize: 13,
    marginBottom: 10,
  },
  row: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLabel: {
    color: '#000',
    fontSize: 15,
  },
});
