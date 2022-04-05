import React, {useState} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import ConfirmButton from '../../common/ConfirmButton';

const TrainingReady = ({route}) => {
  const sec = route.params.sec;
  const item = route.params.item;
  const navigation = route.params.navigation;
  const [btn, setBtn] = useState(false);
  const [start, setStart] = useState(true);

  function onPressRestart() {
    setStart(true);
    setBtn(false);
  }

  return (
    <View style={styles.container}>
      {start ? (
        <CountdownCircleTimer
          isPlaying={start}
          duration={3}
          size={300}
          onComplete={() => {
            navigation.push('시작', {
              sec: sec,
              item: item,
            });
            setBtn(true);
            setStart(false);
            return [false, null];
          }}
          colors={[
            ['#004777', 0.4],
            ['#F7B801', 0.4],
            ['#A30000', 0.2],
          ]}>
          {({remainingTime, animatedColor}) => (
            <Animated.Text style={{color: animatedColor, fontSize: 100}}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      ) : null}

      {btn ? (
        <ConfirmButton
          name="다시 시작"
          color="#ffcb39"
          onConfirm={onPressRestart}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrainingReady;
