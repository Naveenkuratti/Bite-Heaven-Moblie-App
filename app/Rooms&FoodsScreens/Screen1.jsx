
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { ArrowLeft } from "react-native-feather";
import { useRouter } from 'expo-router';
import { useState } from "react";
import Screen2 from './Screen2';

const Service = () => {
  const router = useRouter(); 

  
  const [isRestaurantInfoCompleted, setIsRestaurantInfoCompleted] = useState(false);
  const [isMenuDetailsCompleted, setIsMenuDetailsCompleted] = useState(false);
  const [isDocumentsCompleted, setIsDocumentsCompleted] = useState(false);

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/')}> 
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Get started, it takes only 10 minutes</Text>
        <Text style={styles.headerSubtitle}>0% commission for the 1st month, for new restaurant partners in selected cities</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.infoContainer}>

         
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.iconBox}><Text style={styles.emoji}>🍽️</Text></View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Restaurant Information</Text>
              <Text style={styles.subtitle}>Name, location, and contact number</Text>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  router.push( '/Rooms&FoodsScreens/Screen2');
                  setIsRestaurantInfoCompleted(true);
                }}
              >
                <Text style={styles.subtitle}>
                  {isRestaurantInfoCompleted ? "Continue to Rooms & Foods" : "Continue to Restaurant Info"}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Step 2: Menu & Operational Details */}
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.iconBox}><Text style={styles.emoji}>📄</Text></View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Menu and Operational Details</Text>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  router.push( '/MenuOperationalDetails/Screen1');
                  setIsMenuDetailsCompleted(true);
                }}
              >
                <Text style={styles.subtitle}>
                  {isMenuDetailsCompleted ? "Continue to Documents" : "Continue"}
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* Step 3: Restaurant Document */}
          <TouchableOpacity style={styles.infoItem}>
            <View style={styles.iconBox}><Text style={styles.emoji}>📋</Text></View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Restaurant Document</Text>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => {
                  router.push('/RestaurantDocument/Screen1');
                  setIsDocumentsCompleted(true);
                }}
              >
                <Text style={styles.subtitle}>{isDocumentsCompleted ? "Edit" : "Continue"}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

        </View>

        {/* Document Requirements */}
        <TouchableOpacity style={styles.requirementsButton}>
          <Text style={styles.requirementsText}>Document required for registration</Text>
        </TouchableOpacity>

        {/* Required Documents List */}
        <View style={styles.documentList}>
          <Text style={styles.documentItem}>✓ PAN Card</Text>
          <Text style={styles.documentItem}>✓ Menu details and one dish image</Text>
          <Text style={styles.documentItem}>✓ GST Number, if applicable</Text>
          <Text style={styles.documentItem}>✓ FSSAI License</Text>
          <Text style={styles.documentItem}>✓ Bank account details</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#2D1B69",
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    color: "white",
    fontSize: 14,
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  infoContainer: {
    backgroundColor: "orange",
    borderRadius: 12,
    padding: 20,
    gap: 24,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBox: {
    backgroundColor: "#000",
    padding: 8,
    borderRadius: 8,
  },
  emoji: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.6,
    color: "blue",
  },
  registerButton: {
    marginTop: 8,
  },
  requirementsButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    backgroundColor: "#FFE4CC",
    padding: 12,
    borderRadius: 8,
  },
  requirementsText: {
    flex: 1,
    fontSize: 14,
  },
  documentList: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    marginTop: 16,
    borderRadius: 8,
    gap: 8,
  },
  documentItem: {
    fontSize: 14,
  },
});

export default Service;
