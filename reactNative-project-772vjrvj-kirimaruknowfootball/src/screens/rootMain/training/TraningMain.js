import * as React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../Header';
import TrainingSetting from './TrainingSetting';
import TrainingList from './TrainingList';
import TrainingStart from './TrainingStart';
import TrainingReady from './TrainingReady';

const Stack = createStackNavigator();

const TraningMain = () => {
  return (
    <View style={{flex: 1}}>
      <Header name="트레이닝" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="트레이닝 목록" component={TrainingList} />
        <Stack.Screen name="시간 설정" component={TrainingSetting} />
        <Stack.Screen name="시작" component={TrainingStart} />
        <Stack.Screen name="준비" component={TrainingReady} />
      </Stack.Navigator>
    </View>
  );
};

export default TraningMain;
