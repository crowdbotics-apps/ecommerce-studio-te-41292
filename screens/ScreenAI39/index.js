import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductScreen = () => {
  const product = {
    name: 'Sample Product',
    type: 'Physical',
    price: 49.99,
    description: 'This is a sample product description.',
    availableQuantity: 10
  };
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.type}>{product.type}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      {product.type === 'Physical' && <Text style={styles.quantity}>
          Available Quantity: {product.availableQuantity}
        </Text>}
      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  type: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 5
  },
  price: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20
  },
  backButton: {
    backgroundColor: '#9E9E9E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF'
  }
});
export default ProductScreen;