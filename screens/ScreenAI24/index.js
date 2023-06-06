import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
const notifications = [{
  id: '1',
  title: 'Notification 1',
  summary: 'This is a summary of notification 1',
  read: false
}, {
  id: '2',
  title: 'Notification 2',
  summary: 'This is a summary of notification 2',
  read: true
}, {
  id: '3',
  title: 'Notification 3',
  summary: 'This is a summary of notification 3',
  read: false
}];

const NotificationListScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item
  }) => <TouchableOpacity style={styles.item}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.summary}>{item.summary}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.read ? 'Read' : 'Mark as read'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>;

  return <View style={styles.container}>
      <Text style={styles.header}>List of all notifications</Text>
      <FlatList data={notifications} renderItem={renderItem} keyExtractor={item => item.id} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI25");
    }}><Text style={styles.CeFazale}>{"Notification Settings"}</Text></Pressable></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15
  },
  iconContainer: {
    marginRight: 15
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  summary: {
    fontSize: 14,
    color: '#777'
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  CeFazale: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default NotificationListScreen;