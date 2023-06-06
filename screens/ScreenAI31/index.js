import { Pressable } from "react-native";
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const VerificationMessageScreen = ({
  navigation
}) => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.message}>
        Verification Message from the app provider
      </Text>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI32");
    }}><Text style={styles.LcgJgPGx}>{"Checkout/ Shipping and payment"}</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    resizeMode: 'contain'
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  closeButton: {
    backgroundColor: '#4B0082',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  LcgJgPGx: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default VerificationMessageScreen;