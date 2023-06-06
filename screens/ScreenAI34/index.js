import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CouponScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const onChangeStartDate = selectedDate => {
    const currentDate = selectedDate || startDate;
    setShowStartPicker(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = selectedDate => {
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
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI33");
    }}><Text style={styles.MbJjWtrO}>{"List of All Coupons"}</Text></Pressable></View>;
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
  },
  MbJjWtrO: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default CouponScreen;