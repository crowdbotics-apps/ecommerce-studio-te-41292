import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  return <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} value={username} />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <Image style={styles.checkbox} source={{
          uri: isChecked ? 'https://tinyurl.com/42evm3m3' : 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree to the{' '}
          <Text style={styles.link} onPress={() => {}}>
            Terms and Conditions
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={() => {}}>
            Privacy Policy
          </Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.socialText}>Or sign up with:</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  checkboxText: {
    fontSize: 14,
    color: '#666666'
  },
  link: {
    color: '#007AFF'
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  socialText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '50%'
  },
  socialIcon: {
    width: 40,
    height: 40
  }
});
export default SignUpScreen;