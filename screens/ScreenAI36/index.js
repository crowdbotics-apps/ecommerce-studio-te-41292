import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Picker } from 'react-native';

const AwayFromHomeScreen = () => {
  const navigation = useNavigation();
  const [mileRange, setMileRange] = useState('10');
  const [customMiles, setCustomMiles] = useState('');
  return <ScrollView style={styles.container} onPress={() => {
    navigation.navigate("ScreenAI37");
  }}>
      <View style={styles.section1}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Away from home</Text>
      </View>

      <View style={styles.section2}>
        <TouchableOpacity style={styles.useMyLocationButton}>
          <Text style={styles.useMyLocationButtonText}>Use My Location</Text>
        </TouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Search (by closest city or town)" />
        <Text style={styles.mileRangeText}>Mile Range from this location</Text>
        <Picker selectedValue={mileRange} style={styles.mileRangePicker} onValueChange={itemValue => setMileRange(itemValue)}>
          <Picker.Item label="10 miles" value="10" />
          <Picker.Item label="20 miles" value="20" />
          <Picker.Item label="30 miles" value="30" />
          <Picker.Item label="Custom" value="custom" />
        </Picker>
        {mileRange === 'custom' && <TextInput style={styles.customMilesInput} placeholder="Enter custom miles" keyboardType="numeric" value={customMiles} onChangeText={text => setCustomMiles(text)} />}
        <TouchableOpacity style={styles.doneButton}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  section1: {
    padding: 20
  },
  backButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  section2: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  useMyLocationButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5
  },
  useMyLocationButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 10
  },
  mileRangeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20
  },
  mileRangePicker: {
    height: 50,
    width: '100%',
    marginTop: 10
  },
  customMilesInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10
  },
  doneButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default AwayFromHomeScreen;