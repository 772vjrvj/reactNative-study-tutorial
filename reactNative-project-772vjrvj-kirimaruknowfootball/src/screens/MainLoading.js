import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const MainLoading = () => (
  <View style={styles.container}>
    <ImageBackground source={require('../img/pic/78.png')} style={styles.image}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.text}>U Know Football</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MainLoading;
