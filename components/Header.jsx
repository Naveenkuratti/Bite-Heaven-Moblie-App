import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const Header = ({ title = 'onClick', onPress, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Navigation Bar */}
        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>get the app</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={onPress}>
            <Text style={styles.navButtonText}>{title}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navButton}
            onPress={navigation.navigateToLogin}
          >
            <Text style={styles.navButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Header Section */}
        <View style={styles.header}>
          <ImageBackground
            source={require('./../assets/images/backgroud.png')} // Replace with your image path
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <Text style={styles.logo}>Bite Heaven</Text>
            <Text style={styles.subtitle}>
              Discover the best Restaurants & Rooms in Hubli
            </Text>
          </ImageBackground>
        </View>

        {/* Search Section */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for restaurant and rooms"
              placeholderTextColor="#666"
            />
          </View>
        </View>

        {/* Action Cards */}
        <View style={styles.actionCards}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('./../assets/images/food.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Order Online</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('./../assets/images/Room.png')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Rooms</Text>
          </TouchableOpacity>
        </View>

        {/* Collections */}
        <View style={styles.collections}>
          <Text style={styles.sectionTitle}>Collections</Text>
          <Text style={styles.sectionSubtitle}>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Hubli, based on
            trends
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.collectionScroll}>
            {[require('./../assets/images/room3.png'), require('./../assets/images/room4.png'), require('./../assets/images/room3.png')].map(
              (imageSource, index) => (
                <View key={index} style={styles.collectionCard}>
                  <Image source={imageSource} style={styles.collectionImage} />
                </View>
              )
            )}
          </ScrollView>
        </View>

        {/* App Download */}
        <View style={styles.downloadSection}>
          <Text style={styles.downloadTitle}>Get the Bite Haven App</Text>
          <Text style={styles.downloadSubtitle}>
            We will send you a link, open it on your phone to download the app
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.emailInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#666"
            />
            <TouchableOpacity style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send the link</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.storeButtons}>
            <TouchableOpacity style={styles.storeButton}>
              <Image
                source={require('./../assets/images/Screen1.png')}
                style={styles.storeImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  navbar: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  navButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  header: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '120%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  searchSection: {
    padding: 16,
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
  },
  searchInput: {
    padding: 12,
    fontSize: 16,
  },
  actionCards: {
    flexDirection: 'row',
    padding: 16,
    gap: 16,
  },
  card: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardText: {
    padding: 12,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  collections: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  collectionScroll: {
    flexDirection: 'row',
  },
  collectionCard: {
    width: 200,
    height: 150,
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  collectionImage: {
    width: '100%',
    height: '100%',
  },
  downloadSection: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFE4B5',
    borderRadius: 8,
  },
  downloadTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  downloadSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  emailInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 4,
    fontSize: 16,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  storeButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storeButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  storeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
});

export default Header;
