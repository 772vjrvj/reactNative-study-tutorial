import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ConfirmButton = ({onConfirm, name, color}) => {
  const styles = StyleSheet.create({
    button: {
      width: 250,
      height: 50,
      backgroundColor: color,
      borderRadius: 30,
      justifyContent: 'center',
      marginTop: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      textAlign: 'center',
      textShadowColor: '#1f1e1e',
      textShadowRadius: 9,
      textShadowOffset: {height: 1, width: 1},
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onConfirm}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;
