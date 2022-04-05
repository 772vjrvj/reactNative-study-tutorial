import * as React from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

const SettingButton = ({item}) => {
  const {navigation, name, select, text} = item;

  return (
    <TouchableHighlight
      underlayColor="goldenrod"
      style={styles.listButton}
      accessibilityRole={'button'}
      onPress={() =>
        navigation.push(name, {
          select: select,
        })
      }>
      <Text style={styles.listText}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listButton: {
    backgroundColor: '#ffcb39',
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 20,
    elevation: 3,
  },
  listText: {
    textAlign: 'center',
    lineHeight: 150,
    fontSize: 25,
    textShadowColor: '#a5a2a2',
    textShadowRadius: 9,
    color: '#fff',
    textShadowOffset: {height: 1, width: 1},
  },
});

export default SettingButton;
