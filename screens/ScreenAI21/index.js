import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const ECOMMERCE_FAQ_DATA = [{
  id: "1",
  question: "What payment methods do you accept?",
  answer: "We accept credit cards, debit cards, and PayPal."
}, {
  id: "2",
  question: "How long does shipping take?",
  answer: "Shipping usually takes 3-5 business days."
}, {
  id: "3",
  question: "Can I return or exchange an item?",
  answer: "Yes, we offer a 30-day return and exchange policy."
}, {
  id: "4",
  question: "How do I track my order?",
  answer: "You will receive a tracking number via email once your order has shipped."
}, {
  id: "5",
  question: "Do you ship internationally?",
  answer: "Yes, we ship to most countries worldwide."
}];

const EcommerceFAQScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.answer}>{item.answer}</Text>
    </View>;

  return <View style={styles.container}>
      <Text style={styles.title}>Ecommerce Frequently Asked Questions</Text>
      <FlatList data={ECOMMERCE_FAQ_DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 20
  },
  itemContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
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
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10
  },
  answer: {
    fontSize: 16,
    color: "#666"
  }
});
export default EcommerceFAQScreen;