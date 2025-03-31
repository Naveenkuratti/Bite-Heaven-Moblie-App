import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useRouter } from 'expo-router'; 
const cuisines = [
  'North Indian', 'Chinese', 'Fast Food', 'South Indian', 'Biryani', 'Pizza',
  'Bakery', 'Street Food', 'Burger', 'Mughlai', 'Momos', 'Sandwich', 'Mithai',
  'Rolls', 'Beverages', 'Desserts', 'Cafe', 'Healthy Food', 'Maharashtrian',
  'Tea', 'Bengali', 'Ice Cream', 'Juices', 'Shake', 'Shawarma', 'Gujarati',
  'Italian', 'Continental', 'Lebanese', 'Salad', 'Andhra', 'Waffle', 'Coffee'
];

const App = () => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter(); 

  const handleSelectCuisine = (item) => {
    if (selectedCuisines.includes(item)) {
      setSelectedCuisines(selectedCuisines.filter((cuisine) => cuisine !== item));
    } else if (selectedCuisines.length < 3) {
      setSelectedCuisines([...selectedCuisines, item]);
    }
  };

  const handleNext = () => {
    router.push('/MenuOperationalDetails/Screen6'); 
  };

  
  const filteredCuisines = cuisines.filter((cuisine) =>
    cuisine.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.stepText}>5 of 7</Text>
      <Text style={styles.title}>Select up to 3 cuisines</Text>
      <Text style={styles.subtitle}>Your restaurant will appear in searches for these cuisines</Text>

      <TextInput
        placeholder="Search for cuisines*"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredCuisines}
        keyExtractor={(item) => item}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.cuisineItem,
              selectedCuisines.includes(item) && styles.selectedCuisine,
            ]}
            onPress={() => handleSelectCuisine(item)}
          >
            <Text style={styles.cuisineText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

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
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  stepText: {
    alignSelf: 'flex-end',
    backgroundColor: '#f4f4f4',
    padding: 5,
    borderRadius: 10,
    fontSize: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  cuisineItem: {
    flex: 1,
    margin: 5,
    paddingVertical: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    alignItems: 'center',
  },
  selectedCuisine: {
    backgroundColor: '#ff6600',
  },
  cuisineText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    marginTop: 10,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#ff6600',
    padding: 12,
    marginTop: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  nextText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
