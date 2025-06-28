import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
export default function ShareFeedback({ navigation }) {
  const [rating, setRating] = useState(2); // Default 2-star rating
  const [feedback, setFeedback] = useState('');
 const router = useRouter();
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const index = i + 1;
      return (
        <Pressable key={index} onPress={() => setRating(index)}>
          <Ionicons
            name={index <= rating ? 'star' : 'star-outline'}
            size={32}
            color="#FFD700"
            style={styles.star}
          />
        </Pressable>
      );
    });
  };

  const handleBack = () => {
    router.back('/profile');
  };
  const getMessage = () => {
    if (rating < 3) return 'Uh oh! Tell us why we missed the mark';
    if (rating === 3) return 'Thanks! How can we do better?';
    return 'Awesome! What did you love?';
  };

  const handleSubmit = () => {
    console.log('Submitted Rating:', rating);
    console.log('Submitted Feedback:', feedback);
   
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
       
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Share feedback</Text>
        </View>

        {/* Card */}
        <View style={styles.card}>
          <Text style={styles.feedbackPrompt}>{getMessage()}</Text>
          <View style={styles.starsContainer}>{renderStars()}</View>

          <Text style={styles.textLabel}>Tell us more</Text>
          <TextInput
            placeholder="Eg: The event I liked was not listed"
            placeholderTextColor="#888"
            style={styles.input}
            multiline
            value={feedback}
            onChangeText={setFeedback}
          />
        </View>
      </ScrollView>

      {/* Fixed Submit Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit feedback</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 120, // space for footer
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 16,
    padding: 20,
  },
  feedbackPrompt: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  star: {
    marginHorizontal: 4,
  },
  textLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    color: '#000',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
