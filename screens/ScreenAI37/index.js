import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
const dummyData = [{
  id: '1',
  title: 'Result 1',
  description: 'This is a description for result 1'
}, {
  id: '2',
  title: 'Result 2',
  description: 'This is a description for result 2'
}, {
  id: '3',
  title: 'Result 3',
  description: 'This is a description for result 3'
}, {
  id: '4',
  title: 'Result 4',
  description: 'This is a description for result 4'
}, {
  id: '5',
  title: 'Result 5',
  description: 'This is a description for result 5'
}];

const SearchResultItem = ({
  title,
  description
}) => <TouchableOpacity style={styles.resultItem}>
    <Image source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} style={styles.resultImage} />
    <View style={styles.resultTextContainer}>
      <Text style={styles.resultTitle}>{title}</Text>
      <Text style={styles.resultDescription}>{description}</Text>
    </View>
  </TouchableOpacity>;

const SearchResultScreen = () => {
  return <View style={styles.container}>
      <FlatList data={dummyData} renderItem={({
      item
    }) => <SearchResultItem title={item.title} description={item.description} />} keyExtractor={item => item.id} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  resultImage: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  resultTextContainer: {
    marginLeft: 10
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  resultDescription: {
    fontSize: 14,
    color: '#777'
  }
});
export default SearchResultScreen;