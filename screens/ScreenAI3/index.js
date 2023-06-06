import { Pressable } from "react-native";
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';

const SplashScreen = ({
  navigation
}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return <View style={styles.container}>
      <StatusBar hidden />
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.backgroundImage} />
      <Pressable onPress={() => {
      navigation.navigate("ScreenAI10");
    }}><View style={styles.content}>
        <Text style={styles.title}>Welcome to MyApp</Text>
        <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.logo} />
      </View></Pressable>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  }
});
export default SplashScreen;