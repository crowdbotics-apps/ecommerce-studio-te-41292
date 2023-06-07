import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Picker } from 'react-native';
const gifts = [{
  id: 1,
  name: 'Gift 1',
  type: 'Physical',
  price: 10,
  quantity: 5,
  imageUrl: 'https://tinyurl.com/42evm3m3'
}, {
  id: 2,
  name: 'Gift 2',
  type: 'Virtual',
  price: 20,
  quantity: 0,
  imageUrl: 'https://tinyurl.com/42evm3m3'
}];

const GiftScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('Newest');
  return <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.filterText}>Filter</Text>
        <Picker selectedValue={selectedFilter} style={styles.picker} onValueChange={itemValue => setSelectedFilter(itemValue)}>
          <Picker.Item label="Newest" value="Newest" />
          <Picker.Item label="Oldest" value="Oldest" />
          <Picker.Item label="Price - ascending" value="Price - ascending" />
          <Picker.Item label="Price - descending" value="Price - descending" />
          <Picker.Item label="Popular" value="Popular" />
          <Picker.Item label="Physical" value="Physical" />
          <Picker.Item label="Virtual" value="Virtual" />
        </Picker>
      </View>
      <FlatList data={gifts} renderItem={({
      item
    }) => <Pressable><View style={styles.giftContainer}>
            <Image source={{
          uri: item.imageUrl
        }} style={styles.giftImage} />
            <View style={styles.giftInfo}>
              <Text style={styles.giftName}>{item.name}</Text>
              <Text>Type: {item.type}</Text>
              <Text>Price: ${item.price}</Text>
              {item.type === 'Physical' && <Text>Available Quantity: {item.quantity}</Text>}
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Pressable><Text style={styles.detailsLink}>See details</Text></Pressable>
              </TouchableOpacity>
            </View>
          </View></Pressable>} keyExtractor={item => item.id.toString()} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  filterText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  picker: {
    width: 200,
    height: 40
  },
  giftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10
  },
  giftImage: {
    width: 80,
    height: 80,
    borderRadius: 10
  },
  giftInfo: {
    marginLeft: 10
  },
  giftName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  detailsLink: {
    color: '#2196F3',
    textDecorationLine: 'underline',
    marginTop: 5
  }
});
export default GiftScreen;