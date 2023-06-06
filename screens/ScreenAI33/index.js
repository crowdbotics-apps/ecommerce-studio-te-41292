import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
const coupons = [{
  id: '1',
  title: '10% Off',
  status: 'Active',
  validFrom: '2022-01-01',
  validTo: '2022-01-31'
}, {
  id: '2',
  title: '15% Off',
  status: 'Inactive',
  validFrom: '2022-02-01',
  validTo: '2022-02-28'
}];

const CouponScreen = () => {
  const [data, setData] = useState(coupons);

  const toggleStatus = id => {
    setData(prevData => prevData.map(item => item.id === id ? { ...item,
      status: item.status === 'Active' ? 'Inactive' : 'Active'
    } : item));
  };

  const deleteCoupon = id => {
    Alert.alert('Delete Coupon', 'Are you sure you want to delete this coupon?', [{
      text: 'Cancel',
      style: 'cancel'
    }, {
      text: 'OK',
      onPress: () => setData(prevData => prevData.filter(item => item.id !== id))
    }]);
  };

  const shareCoupon = () => {
    Alert.alert('Share Coupon', 'Share this coupon with your customers.');
  };

  const renderItem = ({
    item
  }) => <View style={styles.couponContainer}>
      <Text style={styles.couponTitle}>{item.title}</Text>
      <Text style={styles.couponStatus}>{item.status}</Text>
      {item.status === 'Active' && <Text style={styles.couponValid}>
          Valid from {item.validFrom} to {item.validTo}
        </Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => toggleStatus(item.id)}>
          <Text style={styles.buttonText}>{item.status === 'Active' ? 'Deactivate' : 'Activate'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Edit Coupon')}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => deleteCoupon(item.id)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={shareCoupon}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>;

  return <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} ListHeaderComponent={<Text style={styles.header}>List of all Coupons</Text>} />
      <TouchableOpacity style={styles.addButton} onPress={() => Alert.alert('Add a new coupon')}>
        <Text style={styles.addButtonText}>Add a new coupon</Text>
      </TouchableOpacity>
    </View>;
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
  couponContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20
  },
  couponTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  couponStatus: {
    fontSize: 16,
    color: '#888',
    marginTop: 10
  },
  couponValid: {
    fontSize: 14,
    color: '#555',
    marginTop: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14
  },
  addButton: {
    backgroundColor: '#2196F3',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  }
});
export default CouponScreen;