import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

const ReportScreen = () => {
  const [selectedReason, setSelectedReason] = useState(null);
  const [otherReason, setOtherReason] = useState('');
  const reasons = ['Spam', 'Pornography', 'Hatred and bullying', 'Self-harm', 'Violent, gory and harmful content', 'Child porn', 'Illegal activities (e.g. drug uses)', 'Deceptive content', 'Copyright and trademark infringement', 'Other'];

  const handleReasonPress = reason => {
    setSelectedReason(reason);
  };

  const renderReasons = () => {
    return reasons.map((reason, index) => <TouchableOpacity key={index} style={[styles.reasonButton, selectedReason === reason ? styles.selectedReason : null]} onPress={() => handleReasonPress(reason)}>
        <Text style={styles.reasonText}>{reason}</Text>
      </TouchableOpacity>);
  };

  return <ScrollView style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.title}>Why are you reporting this?</Text>
      <View style={styles.reasonsContainer}>{renderReasons()}</View>
      {selectedReason === 'Other' && <TextInput style={styles.input} onChangeText={setOtherReason} value={otherReason} placeholder="Enter your reason" />}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  reasonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  reasonButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5
  },
  selectedReason: {
    backgroundColor: '#007AFF'
  },
  reasonText: {
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
    marginTop: 10
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});
export default ReportScreen;