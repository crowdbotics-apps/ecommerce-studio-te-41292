import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>OR</Text>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.socialText}>Connect with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image style={styles.socialIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.socialText}>Connect with Google</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  loginButton: {
    backgroundColor: '#4B0082',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  forgotPasswordText: {
    color: '#4B0082',
    textDecorationLine: 'underline',
    marginBottom: 20
  },
  orText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  socialContainer: {
    width: '80%'
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  socialText: {
    fontWeight: 'bold'
  }
});
export default LoginScreen;