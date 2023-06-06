import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.title}>Privacy Policy</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>1. Introduction</Text>
        <Text style={styles.text}>
          Welcome to our Privacy Policy. This document explains how we collect, use, and share your personal information when you use our services.
        </Text>
        <Text style={styles.sectionTitle}>2. Information We Collect</Text>
        <Text style={styles.text}>
          We collect information you provide directly to us, such as your name, email address, and any other information you choose to provide.
        </Text>
        <Text style={styles.sectionTitle}>3. How We Use Your Information</Text>
        <Text style={styles.text}>
          We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you and personalize your experience.
        </Text>
        <Text style={styles.sectionTitle}>4. Sharing Your Information</Text>
        <Text style={styles.text}>
          We may share your information with third parties in certain circumstances, such as when we have your consent or when required by law.
        </Text>
        <Text style={styles.sectionTitle}>5. Security</Text>
        <Text style={styles.text}>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
        </Text>
        <Text style={styles.sectionTitle}>6. Changes to This Privacy Policy</Text>
        <Text style={styles.text}>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </Text>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 10
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    lineHeight: 24
  }
});
export default PrivacyPolicyScreen;