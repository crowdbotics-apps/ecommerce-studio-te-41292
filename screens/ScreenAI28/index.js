import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [cardHolder, setCardHolder] = useState('');
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
      <TextInput style={styles.input} placeholder="Cardholder" value={cardHolder} onChangeText={setCardHolder} />
      <TextInput style={styles.input} placeholder="Card number" value={cardNumber} onChangeText={setCardNumber} keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="Expiration date" value={expirationDate} onChangeText={setExpirationDate} />
      <TextInput style={styles.input} placeholder="CCV" value={ccv} onChangeText={setCcv} keyboardType="number-pad" />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Edit')}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Paypal')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Paypal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Apple Pay')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Apple Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Google Pay')}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Google Pay</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.payButton} onPress={handlePay}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI29");
      }}><Text style={styles.buttonText}>Pay</Text></Pressable>
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
    padding: 10,
    marginTop: 5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  payButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 5
  }
});
export default PaymentScreen;