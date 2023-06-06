import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
const FAQ_DATA = [{
  id: '1',
  question: 'What is React Native?',
  answer: 'React Native is a framework for building native mobile apps using JavaScript and React.'
}, {
  id: '2',
  question: 'How do I get started with React Native?',
  answer: 'To get started, follow the official documentation on the React Native website.'
}, {
  id: '3',
  question: 'What platforms does React Native support?',
  answer: 'React Native supports iOS, Android, and other platforms like Windows and macOS.'
}, {
  id: '4',
  question: 'Can I use my existing React knowledge?',
  answer: 'Yes, React Native is based on React, so your existing knowledge will be helpful.'
}, {
  id: '5',
  question: 'How is React Native different from React?',
  answer: 'React Native is for building native mobile apps, while React is for building web apps.'
}];

const FAQScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <FlatList data={FAQ_DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  itemContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  answer: {
    fontSize: 16,
    color: '#666'
  }
});
export default FAQScreen;