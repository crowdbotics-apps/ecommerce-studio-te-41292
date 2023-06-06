import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const PaymentOptionsScreen = () => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [ccv, setCcv] = useState('');

  const handlePay = () => {
    Alert.alert('Payment Confirmation', 'Are you sure you want to proceed with the payment?', [{
      text: 'Cancel',
      style: 'cancel'
    }, {
      text: 'Confirm',
      onPress: () => console.log('Payment confirmed')
    }]);
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Choose a payment option</Text>

      <Text style={styles.label}>Credit Card</Text>
      <TextInput style={styles.input} placeholder="Cardholder" onChangeText={setCardholder} value={cardholder} />
      <TextInput style={styles.input} placeholder="Card number" onChangeText={setCardNumber} value={cardNumber} keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="Expiration date" onChangeText={setExpirationDate} value={expirationDate} />
      <TextInput style={styles.input} placeholder="CCV" onChangeText={setCcv} value={ccv} keyboardType="number-pad" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Edit')}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Paypal')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Paypal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Apple Pay')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Apple Pay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log('Google Pay')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Google Pay</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  payButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 20
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default PaymentOptionsScreen;