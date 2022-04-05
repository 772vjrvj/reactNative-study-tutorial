import React, {useState, useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
import MainLoading from './screens/MainLoading';
import Main from './screens/Main';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();

///test modeul////

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [isLoading]);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {isLoading ? <MainLoading /> : <Main />}
      {/*<Main />*/}
    </>
  );
};

export default App;
