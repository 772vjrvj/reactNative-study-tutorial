import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import SettingButton from '../../common/SettingButton';
import _ from 'lodash';
const TraningList = ({navigation}) => {
  const DATA = [
    {
      navigation: navigation,
      name: '시간 설정',
      select: '72',
      text: '화살표Skill',
      num: '1',
    },
    {
      navigation: navigation,
      name: '시간 설정',
      select: '60',
      text: '화살표',
      num: '2',
    },
  ];

  return (
    <View style={styles.listMain}>
      {_.map(DATA, (item, idx) => {
        return <SettingButton key={idx} item={item} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default TraningList;
