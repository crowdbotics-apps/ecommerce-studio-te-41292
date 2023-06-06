import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserDashboard = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>User Dashboard</Text>
      </View>
      <View style={styles.mainMenu}>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.menuText}>Menu 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.menuText}>Menu 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image style={styles.menuIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.menuText}>Menu 3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image style={styles.navIcon} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    backgroundColor: '#4A90E2',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24
  },
  mainMenu: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  menuItem: {
    width: '40%',
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },
  menuIcon: {
    width: 50,
    height: 50
  },
  menuText: {
    fontSize: 18,
    marginTop: 10
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    height: 60
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  navIcon: {
    width: 30,
    height: 30
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 12
  }
});
export default UserDashboard;