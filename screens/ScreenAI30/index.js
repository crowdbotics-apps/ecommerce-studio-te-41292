import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Picker } from 'react-native';
const countries = ['United States', 'Canada', 'United Kingdom'];
const states = ['Alabama', 'Alaska', 'Arizona'];

const CheckoutScreen = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  return <ScrollView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.header}>Customer Information</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone (Optional)" />
      <Text style={styles.header}>Shipping Address</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="First Name" />
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Last Name" />
      <Picker selectedValue={country} style={styles.picker} onValueChange={itemValue => setCountry(itemValue)}>
        {countries.map(country => <Picker.Item key={country} label={country} value={country} />)}
      </Picker>
      <TextInput style={styles.input} value={street} onChangeText={setStreet} placeholder="Street" />
      <TextInput style={styles.input} value={number} onChangeText={setNumber} placeholder="Number" />
      <TextInput style={styles.input} value={postalCode} onChangeText={setPostalCode} placeholder="Postal Code / Zip" />
      <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="City" />
      {country === 'United States' && <Picker selectedValue={state} style={styles.picker} onValueChange={itemValue => setState(itemValue)}>
          {states.map(state => <Picker.Item key={state} label={state} value={state} />)}
        </Picker>}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Return to Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Cart</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  picker: {
    height: 50,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
export default CheckoutScreen;