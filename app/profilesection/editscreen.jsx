import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Platform,
  } from 'react-native';
  import React, { useState } from 'react';
  import { Picker } from '@react-native-picker/picker';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import { useRouter } from 'expo-router';
  
  export default function EditScreen() {
    const router = useRouter();
  
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [anniversary, setAnniversary] = useState('');
  
    const handleNext = () => {
      router.push('/profile'); // Ensure '/profile' route exists in your app
    };
  
    return (
      <ScrollView style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={handleNext} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#007AFF" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
  
        
        <Text style={styles.title}>Edit Profile</Text>
  
        {/* Profile Image */}
        <View style={styles.profilePicContainer}>
          <Image
            source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Icon name="edit" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
  
        
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
  
        
        <TextInput
          value="9620395087"
          style={[styles.input, styles.disabledInput]}
          editable={false}
        />
  
        {/* Email Input */}
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
  
        
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
  
      
        <TextInput
          placeholder="Birthday (DD/MM/YY)"
          style={styles.input}
          value={birthday}
          onChangeText={setBirthday}
        />
  
        <TextInput
          placeholder="Anniversary (DD/MM/YY)"
          style={styles.input}
          value={anniversary}
          onChangeText={setAnniversary}
        />
  
        <Text style={styles.sectionTitle}>Invoice Details</Text>
  
        
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={state}
            onValueChange={(itemValue) => setState(itemValue)}
          >
            <Picker.Item label="Select State" value="" />
            <Picker.Item label="Karnataka" value="Karnataka" />
            <Picker.Item label="Maharashtra" value="Maharashtra" />
            <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
          </Picker>
        </View>
  
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    profilePicContainer: {
      alignSelf: 'center',
      position: 'relative',
      marginBottom: 16,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    editIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      backgroundColor: '#007AFF',
      padding: 6,
      borderRadius: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: Platform.OS === 'ios' ? 14 : 10,
      marginBottom: 12,
    },
    disabledInput: {
      backgroundColor: '#f0f0f0',
      color: '#777',
    },
    pickerContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      marginBottom: 12,
      overflow: 'hidden',
    },
    sectionTitle: {
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 8,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 24,
      marginBottom: 32,
    },
    buttonText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
    },
    backButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    backText: {
      marginLeft: 8,
      fontSize: 16,
      color: '#007AFF',
    },
  });
  