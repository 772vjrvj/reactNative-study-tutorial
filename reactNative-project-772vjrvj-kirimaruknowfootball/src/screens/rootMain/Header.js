import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';

const Header = (props) => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#fff',
        },
      }}
      style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Title style={{color: '#222'}}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default Header;
