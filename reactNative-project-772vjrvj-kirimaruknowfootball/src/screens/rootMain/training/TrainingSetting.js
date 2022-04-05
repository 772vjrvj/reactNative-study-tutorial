import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import ConfirmButton from '../../common/ConfirmButton';

const TimeSetting = ({route, navigation}) => {
  const {select} = route.params;
  const [num, setNum] = useState('2');
  function onNumPlus() {
    if (num === '99') {
      setNum('99');
    } else {
      const num1 = Number(num) + 1;
      setNum(num1 + '');
    }
  }
  function onNumMinus() {
    if (num === '1') {
      setNum('1');
    } else {
      const num1 = Number(num) - 1;
      setNum(num1 + '');
    }
  }
  function onConfirm() {
    if (num.substring(0, 1) === '0') {
      return null;
    }
    navigation.push('준비', {
      sec: num + '000',
      item: select,
      navigation: navigation,
    });
  }
  return (
    <View style={styles.outterView}>
      <View style={styles.innerView}>
        <IconButton
          icon="arrow-down-drop-circle"
          color={Colors.black}
          size={80}
          onPress={onNumMinus}
        />
        <TextInput
          style={{
            height: 45,
            borderColor: 'gray',
            borderBottomWidth: 3,
            width: 55,
            textAlign: 'center',
            fontSize: 20,
          }}
          value={num}
          textContentType={'number'}
          maxLength={2}
          keyboardType={'numeric'}
          onChangeText={(num) => setNum(num)}
        />
        <Text style={{fontSize: 35}}>{'  초'}</Text>
        <IconButton
          icon="arrow-up-drop-circle"
          color={Colors.black}
          size={80}
          onPress={onNumPlus}
        />
      </View>
      <View>
        <ConfirmButton name="확인" color="#ffcb39" onConfirm={onConfirm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outterView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 0,
  },
  innerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default TimeSetting;
