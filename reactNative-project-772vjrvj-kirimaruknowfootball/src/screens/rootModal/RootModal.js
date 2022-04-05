import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ConfirmButton from '../common/ConfirmButton';

const RootModal = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [weather, setWeather] = useState('');
  const [contents, setContents] = useState('');
  const [location, setLocation] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState(
    moment().format('YYYY/MM/DD hh:mm'),
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setChosenDate(moment(date).format('YYYY/MM/DD hh:mm'));
    // setChosenDate(date);
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styles.X} onPress={() => navigation.goBack()}>
        X
      </Text>
      <Text
        style={styles.complete}
        onPress={() =>
          Alert.alert(
            '제목 :' +
              title +
              ', 날씨 : ' +
              weather +
              ', 내용 : ' +
              contents +
              ', 날짜 : ' +
              chosenDate,
          )
        }>
        완료
      </Text>
      <View style={{marginTop: 5}}>
        <TextInput
          theme={{colors: {text: 'black', primary: 'black'}}}
          style={styles.textInput}
          label="제목"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          theme={{colors: {text: 'black', primary: 'black'}}}
          style={styles.textInput}
          label="날씨"
          value={weather}
          onChangeText={(text) => setWeather(text)}
        />
        <TextInput
          multiline
          theme={{colors: {text: 'black', primary: 'black'}}}
          style={styles.textAreaInput}
          label="내용"
          place
          value={contents}
          onChangeText={(textArea) => setContents(textArea)}
        />
        <TextInput
          theme={{colors: {text: 'black', primary: 'black'}}}
          style={styles.textInput}
          label="장소"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          theme={{colors: {text: 'black', primary: 'black'}}}
          style={styles.textInput}
          label="날짜"
          value={chosenDate}
          disabled={true}
        />
        <ConfirmButton
          name="날짜 선택"
          onConfirm={showDatePicker}
          color="gray"
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="datetime"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
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

export default RootModal;
