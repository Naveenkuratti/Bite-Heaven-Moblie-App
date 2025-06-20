import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useRouter } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const FAQItem = ({ question, answer }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
        <Text style={styles.question}>{question}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <Text style={styles.answer}>{answer}</Text>
      </Collapsible>
    </View>
  );
};

const HelpScreen = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    { question: 'How can I reach out to customer support?', answer: "You can reach out to customer support by going to the 'Chat with us' page..." },
    { question: 'How to give feedback on District?', answer: 'You can email us at Feedback@district.in or use the Share Feedback option...' },
    { question: 'What services are available on the District app?', answer: 'You can book tickets for movies, concerts, plays, sports...' },
    { question: 'How to log in to the app?', answer: 'You can log in or sign up using your phone number...' },
    { question: 'How to log out of the app?', answer: 'Tap the Profile icon in the top-right corner...' },
    { question: 'How can I delete my account?', answer: 'Go to the Profile section > Account Settings > Delete Account...' },
    { question: 'How can I change my phone number on the District app?', answer: "Currently, it's not possible to change your phone number..." },
    { question: 'Where can I find the privacy policy?', answer: 'You can read our privacy policy under the About Us section...' },
    { question: 'Where can I find the Terms of Service?', answer: 'You can read our Terms of Service under the About Us section...' },
    { question: 'How do I manage all the notifications on the App?', answer: 'In the Profile section, go to Notification Settings...' },
    { question: 'How can I add/modify the payment method?', answer: 'In the Profile section, go to Payment Settings...' },
    { question: 'Which modes of payment are available on the District app?', answer: 'You can pay using debit/credit cards, net banking...' },
    { question: 'Can I change my birthday/Anniversary on the App?', answer: 'Yes, go to the Profile section and click the pencil icon...' },
    { question: 'Why do I have to input a state for the Invoice?', answer: 'We need it to generate a valid invoice as per regulatory requirements.' },
  ];

  const filteredFaqs = faqs.filter(
    faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBack = () => {
    router.back(''); 
  };
  const go=()=>{
    router.push('/profilesection/chatwithus')
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#007AFF" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>How can we help you?</Text>
      <TextInput
        placeholder="Search for FAQs"
        placeholderTextColor="#666"
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.tabRow}>
        {['All', 'Movies', 'Events', 'Dining'].map(tab => (
          <TouchableOpacity key={tab} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 120 }}>
        {filteredFaqs.length === 0 ? (
          <Text style={{ color: '#888', marginTop: 20 }}>No FAQs found.</Text>
        ) : (
          filteredFaqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))
        )}
      </ScrollView>

      {/* Chat with us Button */}
      <TouchableOpacity style={styles.chatButton}>
        <Icon name="chatbubbles-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.chatText} onPress={go}>Chat with us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', padding: 16 },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 6,
  },
  backText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 6,
  },
  title: { fontSize: 20, color: '#000', fontWeight: 'bold', marginBottom: 10 },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    color: '#000',
    marginBottom: 16,
  },
  tabRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  tab: { backgroundColor: '#e0e0e0', padding: 10, borderRadius: 20 },
  tabText: { color: '#000', fontWeight: '600' },
  faqItem: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
  },
  question: { color: '#000', fontWeight: 'bold', fontSize: 15 },
  answer: { color: '#555', marginTop: 8 },
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

export default HelpScreen;
