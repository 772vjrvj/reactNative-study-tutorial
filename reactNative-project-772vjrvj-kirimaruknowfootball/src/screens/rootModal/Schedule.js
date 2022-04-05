import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';

const Schedule = ({navigation}) => {
  const [items, setItems] = useState({});

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styles.X} onPress={() => navigation.goBack()}>
        X
      </Text>
      <Text style={styles.complete} onPress={() => Alert.alert()}>
        완료
      </Text>
      <View style={{flex: 1}}>
        <Agenda
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2017-05-16'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  X: {
    textAlign: 'left',
    fontSize: 25,
    color: '#222',
    padding: 10,
    paddingLeft: 20,
  },
  complete: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 20,
    color: '#222',
    padding: 15,
  },
  textInput: {
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
  },
  textAreaInput: {
    marginBottom: 5,
    padding: 5,
    height: 150,
  },
});

export default Schedule;
