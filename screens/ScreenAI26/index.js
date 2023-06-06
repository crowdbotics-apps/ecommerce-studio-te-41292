import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiration, setCardExpiration] = useState('');
  const [cvv, setCvv] = useState('');

  const handleUpdate = () => {// Update logic here
  };

  return <View style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} placeholder="First Name" onChangeText={setFirstName} value={firstName} />
      <TextInput style={styles.input} placeholder="Last Name" onChangeText={setLastName} value={lastName} />
      <TextInput style={styles.input} placeholder="Address Line 1" onChangeText={setAddress1} value={address1} />
      <TextInput style={styles.input} placeholder="Address Line 2" onChangeText={setAddress2} value={address2} />
      <TextInput style={styles.input} placeholder="City" onChangeText={setCity} value={city} />
      <TextInput style={styles.input} placeholder="State" onChangeText={setState} value={state} />
      <TextInput style={styles.input} placeholder="Zip" onChangeText={setZip} value={zip} />
      <TextInput style={styles.input} placeholder="Country" onChangeText={setCountry} value={country} />
      <TextInput style={styles.input} placeholder="Card Number" onChangeText={setCardNumber} value={cardNumber} />
      <TextInput style={styles.input} placeholder="Card Expiration Date" onChangeText={setCardExpiration} value={cardExpiration} />
      <TextInput style={styles.input} placeholder="CVV" onChangeText={setCvv} value={cvv} />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  input: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5
  },
  button: {
    width: '80%',
    backgroundColor: '#1C86EE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
export default ProfileScreen;