import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootMain from './rootMain/RootMain';
import RootModal from './rootModal/RootModal';
import Schedule from './rootModal/Schedule';
import TrainingDetail from './rootModal/TrainingDetail';

const RootStack = createStackNavigator();

const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <RootStack.Navigator mode="modal" headerMode="none">
          <RootStack.Screen name="RootMain" component={RootMain} />
          <RootStack.Screen name="RootModal" component={RootModal} />
          <RootStack.Screen name="Schedule" component={Schedule} />
          <RootStack.Screen name="TrainingDetail" component={TrainingDetail} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Main;
