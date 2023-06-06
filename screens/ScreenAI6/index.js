import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. By using our services, you are agreeing to these terms. Please read them carefully.

  2. Using our Services
  You must follow any policies made available to you within the Services.

  3. Privacy
  Our privacy policy explains how we treat your personal data and protect your privacy when you use our Services.

  4. Content
  All content provided on our application is for informational purposes only. We make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.

  5. Changes to Terms
  We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly.

  6. Liability
  In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this application.

  7. Governing Law
  These terms and conditions are governed by and construed in accordance with the laws of our country and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
  `;
  return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.content}>{termsAndConditions}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default TermsAndConditionsScreen;