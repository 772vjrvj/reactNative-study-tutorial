import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from './Header';
import {List, Searchbar} from 'react-native-paper';
import _ from 'lodash';

const Search = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  const listData = [
    {
      title: '1:1트레이닝',
      description: '열심히 하자',
    },
    {
      title: '리프팅',
      description: '리프팅 벌서 100개',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Header name="검색" />
      <Searchbar
        style={{margin: 20}}
        placeholder="...제목"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
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
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
    position: 'relative',
  },
});

export default Search;
