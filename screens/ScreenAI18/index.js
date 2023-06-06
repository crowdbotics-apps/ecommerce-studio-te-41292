import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  return <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.profileImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI15");
      }}><Text style={styles.buttonText}>Edit Profile</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI13");
      }}><Text style={styles.buttonText}>Privacy Policy</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI12");
      }}><Text style={styles.buttonText}>Terms and Conditions</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI19");
      }}><Text style={styles.buttonText}>Change Password</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI20");
      }}><Text style={styles.buttonText}>Support / Send Feedback</Text></Pressable>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI41");
      }}><Text style={styles.buttonText}>Log Out</Text></Pressable>
      </TouchableOpacity>
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI21");
    }}><Text style={styles.JttMHlEE}>{"Frequently Asked Questions"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI24");
    }}><Text style={styles.BNKuNXRW}>{"Notification"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI22");
    }}><Text style={styles.ByrfWqgw}>{"Invite Friends"}</Text></Pressable></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  button: {
    width: '80%',
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    paddingVertical: 12,
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  JttMHlEE: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  BNKuNXRW: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  ByrfWqgw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default SettingsScreen;