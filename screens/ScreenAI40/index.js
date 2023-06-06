import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const PushNotificationScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Push Notifications</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Enable Push Notifications</Text>
        <Switch trackColor={{
        false: '#767577',
        true: '#81b0ff'
      }} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View style={styles.notifications}>
        <TouchableOpacity style={styles.notification}>
          <Image style={styles.notificationImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.notificationText}>New Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notification}>
          <Image style={styles.notificationImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.notificationText}>New Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notification}>
          <Image style={styles.notificationImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.notificationText}>New Announcement</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  header: {
    backgroundColor: '#4b7bec',
    padding: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  switchText: {
    fontSize: 18
  },
  notifications: {
    padding: 20
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  notificationImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  notificationText: {
    fontSize: 18
  }
});
export default PushNotificationScreen;