import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.logo} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI17");
      }}><Text style={styles.loginButtonText}>Log In</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><Text style={styles.forgotPasswordText}>Forgot Password?</Text></Pressable>
      </TouchableOpacity>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connect with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Connect with Google</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10
  },
  loginButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  forgotPasswordText: {
    color: '#007AFF',
    marginBottom: 20
  },
  socialContainer: {
    width: '80%'
  },
  socialButton: {
    height: 40,
    backgroundColor: '#3B5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  socialButtonText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});
export default LoginScreen;