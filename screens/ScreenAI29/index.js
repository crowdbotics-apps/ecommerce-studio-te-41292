import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const ConfirmationScreen = () => {
  const handleYes = () => {
    console.log('Yes');
  };

  const handleCancel = () => {
    console.log('Cancel');
  };

  return <ImageBackground source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Are you sure you want to perform the chosen action?</Text>
        <TouchableOpacity style={styles.yesButton} onPress={handleYes}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  yesButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
    width: 200,
    marginBottom: 10
  },
  cancelButton: {
    backgroundColor: '#F44336',
    borderRadius: 5,
    padding: 10,
    width: 200
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default ConfirmationScreen;