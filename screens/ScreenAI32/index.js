import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ProgressBarAndroid } from 'react-native';

const App = () => {
  return <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <ProgressBarAndroid style={styles.progressBar} />
      <Text style={styles.header}>Customer information</Text>
      <Text style={styles.header}>Shipping and payment</Text>
      <Text style={styles.header}>Order confirmation</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Address - from the previous screen</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.shippingFee}>Shipping fee</Text>
      <Text style={styles.payment}>Payment</Text>
      <View style={styles.paymentButtons}>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Google Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Apple Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>PayPal</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.returnButton}>
        <Text style={styles.returnButtonText}>Return to store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editCartButton}>
        <Text style={styles.editCartButtonText}>Edit cart</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20
  },
  backButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  progressBar: {
    marginTop: 20
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  addressText: {
    fontSize: 16
  },
  editButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  shippingFee: {
    fontSize: 16,
    marginTop: 20
  },
  payment: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20
  },
  paymentButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20
  },
  paymentButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '48%'
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  continueButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  returnButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  returnButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  },
  editCartButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  editCartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center'
  }
});
export default App;