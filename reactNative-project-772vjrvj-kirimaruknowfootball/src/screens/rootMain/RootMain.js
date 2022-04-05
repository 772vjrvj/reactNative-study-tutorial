import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './Search';
import Home from './Home';
import Setting from './Setting';
import TraningMain from './training/TraningMain';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const RootMain = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === '훈련일지') {
            iconName = 'note-multiple-outline';
          } else if (route.name === '검색') {
            iconName = 'file-search-outline';
          } else if (route.name === '트레이닝') {
            iconName = 'run-fast';
          } else if (route.name === '설정') {
            iconName = 'tools';
          }
          return (
            <MaterialCommunityIcons name={iconName} size={25} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#222',
        inactiveTintColor: '#b3a8a8',
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor: '#fff',
      }}>
      <Tab.Screen name="훈련일지" component={Home} />
      <Tab.Screen name="검색" component={Search} />
      <Tab.Screen name="트레이닝" component={TraningMain} />
      <Tab.Screen name="설정" component={Setting} />
    </Tab.Navigator>
  );
};

export default RootMain;
