import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, Alert, SafeAreaView} from 'react-native';
import Header from './Header';
import {FAB, Portal, Provider, List} from 'react-native-paper';
import _ from 'lodash';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    lineHeight: 100,
    fontSize: 20,
    color: '#222',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    position: 'relative',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

const listData = [
  {
    title: '1:1트레이닝',
    description: '열심히 하자',
  },
  {
    title: '리프팅',
    description: '리프팅 벌서 100개',
  },
  {
    title: '슈팅',
    description: '캐논슛 반복연습~~',
  },
  {
    title: '1:1트레이닝',
    description: '열심히 하자',
  },
  {
    title: '리프팅',
    description: '리프팅 벌서 100개',
  },
  {
    title: '슈팅',
    description: '캐논슛 반복연습~~',
  },
  {
    title: '1:1트레이닝',
    description: '열심히 하자',
  },
  {
    title: '리프팅',
    description: '리프팅 벌서 100개',
  },
  {
    title: '슈팅',
    description: '캐논슛 반복연습~~',
  },
  {
    title: '1:1트레이닝',
    description: '열심히 하자',
  },
  {
    title: '리프팅',
    description: '리프팅 벌서 100개',
  },
  {
    title: '슈팅',
    description: '캐논슛 반복연습~~',
  },
];

const Home = ({navigation}) => {
  const [state, setState] = useState({open: false});
  const onStateChange = ({open}) => setState({open});
  const {open} = state;
  return (
    <SafeAreaView style={styles.container}>
      <Header name="훈련일지" />
      <ScrollView style={styles.scrollView}>
        {_.map(listData, (item, idx) => {
          return (
            <List.Item
              title={item.title}
              description={item.description}
              onPress={() => navigation.navigate('TrainingDetail')}
              right={(props) => (
                <List.Icon {...props} icon="star-circle-outline" />
              )}
              left={(props) => (
                <List.Icon {...props} icon="calendar-multiple" />
              )}
            />
          );
        })}
      </ScrollView>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            fabStyle={{backgroundColor: 'gold'}}
            actions={[
              {icon: 'plus', onPress: () => navigation.navigate('RootModal')},
              {
                icon: 'star',
                label: '일지작성',
                onPress: () => navigation.navigate('RootModal'),
              },
              {
                icon: 'calendar',
                label: '스케줄',
                onPress: () => navigation.navigate('Schedule'),
              },
              // {
              //   icon: 'bell',
              //   label: 'Remind',
              //   onPress: () => navigation.navigate('RootModal'),
              //   small: false,
              // },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
                // do something if the speed dial is open
              }
            }}
          />
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};

export default Home;
