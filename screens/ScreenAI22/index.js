import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList, StyleSheet } from 'react-native';
const friends = [{
  id: '1',
  name: 'John Doe'
}, {
  id: '2',
  name: 'Jane Smith'
}, {
  id: '3',
  name: 'Michael Johnson'
}, {
  id: '4',
  name: 'Emily Brown'
}, {
  id: '5',
  name: 'William Davis'
}];

const InviteFriendsScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.friendContainer}>
      <Text style={styles.friendName}>{item.name}</Text>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteButtonText}>Invite</Text>
      </TouchableOpacity>
    </View>;

  return <View style={styles.container}>
      <Image style={styles.headerImage} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Invite Friends</Text>
      <TextInput style={styles.searchInput} placeholder="Search friends..." />
      <FlatList data={friends} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  headerImage: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 20,
    marginBottom: 20
  },
  friendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10
  },
  friendName: {
    fontSize: 18
  },
  inviteButton: {
    backgroundColor: '#4B9DFE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});
export default InviteFriendsScreen;