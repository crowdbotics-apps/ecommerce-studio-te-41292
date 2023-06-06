import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CouponScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndPicker(false);
    setEndDate(currentDate);
  };

  return <View style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Name of the coupon" />
      <TouchableOpacity onPress={() => setShowStartPicker(true)}>
        <Text style={styles.dateText}>Start Date: {startDate.toDateString()}</Text>
      </TouchableOpacity>
      {showStartPicker && <DateTimePicker testID="startPicker" value={startDate} mode="date" display="default" onChange={onChangeStartDate} />}
      <TouchableOpacity onPress={() => setShowEndPicker(true)}>
        <Text style={styles.dateText}>End Date: {endDate.toDateString()}</Text>
      </TouchableOpacity>
      {showEndPicker && <DateTimePicker testID="endPicker" value={endDate} mode="date" display="default" onChange={onChangeEndDate} />}
      <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Description" />
      <Button title="Save" onPress={() => {}} />
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
    width: 100,
    height: 100,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default CouponScreen;