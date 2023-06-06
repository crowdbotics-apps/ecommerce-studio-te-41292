import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const TermsAndConditionsScreen = () => {
  const termsAndConditions = `
  1. Introduction
  Welcome to our application. By accessing and using our services, you agree to be bound by these Terms and Conditions.

  2. Changes to Terms and Conditions
  We reserve the right to modify these Terms and Conditions at any time. Your continued use of our services constitutes your acceptance of any changes.

  3. Privacy Policy
  Our Privacy Policy, which is incorporated into these Terms and Conditions, governs your use of our services.

  4. User Conduct
  You agree to use our services only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of our services.

  5. Intellectual Property
  All content included on our application, such as text, graphics, logos, images, and software, is the property of our company or its content suppliers and protected by copyright laws.

  6. Limitation of Liability
  In no event shall our company be liable for any direct, indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of our services.

  7. Governing Law
  These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is located.

  8. Severability
  If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.

  9. Entire Agreement
  These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and our company with respect to your use of our services.
  `;
  return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.text}>{termsAndConditions}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 40
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 30,
    marginBottom: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default TermsAndConditionsScreen;